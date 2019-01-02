const ipcRenderer = require('electron').ipcRenderer
const Mark = require('mark.js')

const libraries = {
  lodash: 'lodash',
  schild: 'schild',
  models: 'schild/models/Models',
  knex: 'knex',
  objection: 'objection'
}

global.ipc = () => {
  ipcRenderer.send('webviewReady')
  const mark = new Mark(document.querySelector('body'))
  global.R = (lib) => require(libraries[lib])
  let svelte
  let props

  ipcRenderer.on('showDataInConsole', (event, data) => {
    global.daten = data
    console.log('Die für Reports zur Verfügung stehenden Daten sind unter `daten` abegelegt:', global.daten)
  })
  ipcRenderer.on('editContent', (event, edit) => {
    document.querySelector('#content').setAttribute('contenteditable', edit)
  })
  ipcRenderer.on('setMark', async (event, state) => {
    state ? mark.mark(['undefined', '01.01.1970']) : mark.unmark()
  })
  ipcRenderer.on('setAbschnitt', async (event, abschnitt) => {
    await svelte.$set({ jahr: abschnitt.jahr, abschnitt: abschnitt.abschnitt })
    mark.mark(['undefined', '01.01.1970'])
  })
  ipcRenderer.on('setData', async (event, newData) => {
    await svelte.$set(newData)
    props = newData
    mark.mark(['undefined', '01.01.1970'])
  })

  ipcRenderer.on('updateComponents', (event, newData) => {
    props = props || newData
    delete require.cache[props.componentsPath]
    const Component = require(props.componentsPath)
    if (svelte) svelte.$destroy()
    svelte = new Component({ target: document.querySelector('svelte'), props })
    console.log('Svelte-Dokument erfolgreich kompiliert.')
    mark.mark(['undefined', '01.01.1970'])
  })
}
