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
      <Input {path} name={'vorname'} label="Vorname"/>
      <Input {path} name={'nachname'} label="Nachname"/>
      <Input {path} name={'zusatzNachname'} label="Zusatz Nachname"/>
      <Input {path} name={'alleVornamen'} label="alle Vornamen"/>
      <Input {path} name={'geburtsort'} label="Geburtsort"/>
      <Input {path} name={'geburtsname'} label="Geburtsname"/>
    </div>
  </div>
</div>
