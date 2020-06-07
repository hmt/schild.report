<script>
  import { stammdaten } from "./../../stores.js";
  export let label
  export let path
  export let name
      console.log($stammdaten)
  let value = $stammdaten[name]

  function update (node, value) {
    return {
			update(value) {
        console.log(`${path}/${name}`)
        fetch(`https://localhost:4000${path}/${name}`, {
          method: "PUT",
          credentials: 'include',
          body: value
        })
          .then(response => response.json())
          .then(data => console.log(data));
			},
			destroy() {
				// the node has been removed from the DOM
			}
		};
  }
</script>


<div class="field">
  <label class="label">{label}</label>
  <div class="control">
    <input class="input" type="text" bind:value={value} use:update={value}>
  </div>
  <p class="help">This is a help text</p>
</div>
