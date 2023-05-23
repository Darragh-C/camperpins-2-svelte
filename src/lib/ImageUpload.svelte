<script>
  export let pin = {}; // define pin data
  let fileName = '';
  let imageFile;

  const handleFileChange = (event) => {
    const files = event.target.files;
    if (files.length > 0) {
      fileName = files[0].name;
    }
  };

  function uploadImage () {

  }
</script>

{#if pin.img}
  <div class="card">
    <div class="card-image">
      <figure class="image is-256x256">
        <img src={pin.img}>
      </figure>
    </div>
  {/if}
  <div class="card-content">
    <form on:submit|preventDefault={uploadImage} action="/pin/{pin._id}/uploadimage" method="POST" enctype="multipart/form-data">
      <div id="file-select" class="file has-name is-fullwidth">
        <label class="file-label"> 
          <input bind:value={imageFile} class="file-input" name="imagefile" type="file" accept="image/png, image/jpeg" on:change={handleFileChange}>
          <span class="file-cta">
            <span class="file-icon">
              <i class="fas fa-upload"></i>
            </span>
            <span class="file-label">
              Choose a file…
            </span>
           </span>
          <span class="file-name">{fileName}</span>
        </label>
        <button type="submit" class="button is-info">Upload Image</button>
      </div>
    </form>
  </div>
</div>
