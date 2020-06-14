<script>
  import { stammdaten } from "./../../stores.js";
  export let label
  export let path
  export let name
  console.log($stammdaten)
  let value = $stammdaten[name]
  let ok = true

  function update (node, value) {
    return {
			update(value) {
        console.log(`${path}/${name}`)
        fetch(`http://localhost:4000${path}/${name}`, {
          method: "PUT",
          credentials: 'include',
          body: value,
          headers: {'Authorization': 'Basic ' + btoa('Admin:')}
        })
          .then(response => ok = response.ok)
          .catch(e => console.log(e) && (ok = false));
			},
			destroy() { }
		};
  }
</script>

<div class="field">
  <label class="label">{label}</label>
  <div class="control">
    <input class="input" type="text" bind:value={value} use:update={value}>
  </div>
  {#if !ok}
    <p class="help">Bitte korrigieren</p>
  {/if}
</div>
