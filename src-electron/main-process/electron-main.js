import { app, BrowserWindow, webviewTag } from 'electron'
import { VERSION } from './version'
console.log(VERSION)
if (process.argv.some(a => a === '-v')) app.exit()

import ipc from 'electron-better-ipc'
import { join, basename, dirname } from 'path'
import { lstatSync, readdirSync } from 'fs'
import configFile from './configstore'
import { rollupBuild } from './rollup'
import { is } from 'electron-util'
import schild from 'schild'
import CheapWatch from 'cheap-watch'
import { mkDirByPathSync } from './mkdir'

let configData = configFile.store
configData['passAuth'] = process.argv.some(a => a === '--no-login') || is.development
configData['version'] = VERSION
console.log('Verzeichnisse anlegen oder verwenden …')
mkDirByPathSync(configData.reports)

let mainWindow
let watcher = []

if (process.env.PROD) {
  global.__statics = join(__dirname, 'statics').replace(/\\/g, '\\\\')
}

function createWindow () {
  let { width, height } = configData.windowBounds.main
  mainWindow = new BrowserWindow({
    width: width,
    height: height,
    useContentSize: true,
    icon: join(__dirname, '../icons/linux-256x256.png')
  })

  mainWindow.loadURL(process.env.APP_URL)
  if (is.development || process.argv.some(a => a === '--devtools')) mainWindow.openDevTools()

  mainWindow.on('close', (e) => {
    if (!configData.close) {
      e.preventDefault()
      ipc.callRenderer(mainWindow, 'getConfigData')
        .then(data => {
          configFile.set(data)
          console.log('Konfigurationsdaten gespeichert.')
          configData.close = true
          mainWindow.close()
        })
    }
  })
  mainWindow.on('closed', () => {
    mainWindow = null
  })
  mainWindow.on('resize', () => {
    let { width, height } = mainWindow.getBounds()
    configData.windowBounds.main = { width, height }
  })
}

app.on('ready', createWindow)
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})
app.on('activate', () => {
  if (mainWindow === null) {
    createWindow()
  }
})

const scanSource = async () => {
  const isDirectory = source => lstatSync(source).isDirectory()
  const getDirectories = source =>
    readdirSync(source).map(name => join(source, name)).filter(isDirectory)
  const source = configData.reports
  const obj = {}
  getDirectories(source).forEach(element => {
    obj[basename(element)] = readdirSync(element).filter(fn => fn.slice(-5) === '.html' && fn.charAt(0) !== '_')
  })
  ipc.callRenderer(mainWindow, 'updateRepos', obj)
}

ipc.answerRenderer('repos', async () => {
  scanSource()
  const fileWatcher = new CheapWatch({
    dir: configData.reports,
    filter: ({ path, stats }) => stats.isDirectory() ? !path.includes('/') : path.endsWith('.html')
  })
  await fileWatcher.init()
  fileWatcher.on('+', ({ path, stats, isNew }) => { if (isNew) scanSource() })
  fileWatcher.on('-', ({ path, stats }) => { scanSource() })
})

let webview
let webviewReady = {}
ipc.on('webviewReady', event => {
  webview = event.sender
  webviewReady.webview = true
  updateWebView()
})

const updateWebView = async () => {
  if (webviewReady.webview && webviewReady.dokument) {
    webview.send('updateComponents', webviewReady.componentArgs)
    webviewReady.webview = false
  }
}
const compileDokumente = async (file) => {
  try {
    const moduleIDs = await rollupBuild({
      source: join(configData.reports, file),
      dest: join(configData.userData)
    })
    webviewReady.dokument = true
    updateWebView()
    return moduleIDs
  } catch (err) {
    ipc.callRenderer(mainWindow, 'messageRollup', {
      ...err,
      code: err.code,
      stack: err.stack,
      message: err.message
    })
    return [file, err.filename]
  }
}
ipc.answerRenderer('compileDokumente', async (args) => {
  console.log('Rollup starten für …', args.file)
  webviewReady.componentArgs = args.componentArgs
  const moduleIDs = await compileDokumente(args.file)
  console.log(moduleIDs)
  while (watcher.length) { watcher.pop().close() }
  moduleIDs.forEach(async (moduleID) => {
    if (!moduleID.includes('node_modules')) {
      const emitter = new CheapWatch({
        dir: dirname(moduleID),
        debounce: 50,
        filter: ({ path, stats }) => moduleID.endsWith(path)
      })
      console.log('Beobachte: ' + moduleID)
      try {
        await emitter.init()
        emitter.on('+', async ({ path, stats, isNew }) => {
          if (!isNew) {
            console.log('Änderungen bei: ' + path)
            await compileDokumente(args.file)
            webviewTag.send('updateComponents', args.componentArgs)
          }
        })
      } catch (e) {
        console.log(e)
      }
      watcher.push(emitter)
    }
  })
})

ipc.answerRenderer('getConfig', async () => {
  return configData
})
ipc.answerRenderer('schildConnect', async data => {
  return schild.connect(data.arg, data.arg2)
})
ipc.answerRenderer('schildTestConnection', async () => {
  return schild.testConnection()
})
ipc.answerRenderer('schildSuche', async data => {
  // suche returns array
  return schild.suche(data.arg)
})
ipc.answerRenderer('schildGetKlasse', async data => {
  return (await schild.getKlasse(data.arg)).toJSON()
})
ipc.answerRenderer('schildGetSchule', async () => {
  return (await schild.getSchule()).toJSON()
})
ipc.answerRenderer('schildGetSchueler', async data => {
  const schueler = await schild.getSchueler(data.arg)
  return schueler.toJSON()
})
ipc.answerRenderer('schildGetSchuelerfoto', async data => {
  return schild.getSchuelerfoto(data.arg)
})
ipc.answerRenderer('schildGetNutzer', async data => {
  return (await schild.getNutzer(data.arg)).toJSON()
})
