<script>
  import Input from "./../Input.svelte"
  export let path
</script>

<div class="card">
  <header class="card-header">
    <p class="card-header-title">
      Basisdaten
    </p>
  </header>
  <div class="card-content">
    <div class="content">
      <!-- <Form {path}> -->
        <Input {path} name={'vorname'} label="Vorname"/>
        <Input {path} name={'nachname'} label="Nachname"/>
      <!-- </Form> -->
    </div>
  </div>
</div>
