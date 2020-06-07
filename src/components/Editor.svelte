<script>
  import { configData, schueler, selected, stammdaten } from "./../stores.js";
  import Basisdaten from "./Editor/Schueler/Basisdaten.svelte"
  import {
    SchuelerApi,
    SchuelerlisteEintrag,
    SchuelerStammdaten,
LehrerStammdaten
  } from "./../openapi/src/index";

  let schuelerpfad, lehrerpfad;
  let schema = 'schildtest'
  const apiSchueler = new SchuelerApi();
  apiSchueler.apiClient.plugins = [ request => request.disableTLSCerts() ]
  apiSchueler.apiClient.authentications.basicAuth.username = 'Admin'
  console.log(apiSchueler)

  $: promise = apiSchueler.getSchuelerStammdaten($configData.schema, $selected[0].ID)
    .then((res) => {
      $stammdaten = res;
      schuelerpfad = `/db/${schema}/api/schueler/${res.id}`
    })
    .catch((e) => {
      console.error(e);
    });

</script>

{#await promise then _}
  <Basisdaten path={schuelerpfad}/>
{/await}