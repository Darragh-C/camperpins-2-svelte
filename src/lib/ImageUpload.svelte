<script>
  import { camperpinsService } from "../services/camperpins-service";

export let pin = {}; 
let fileName = '';
let fileInput; 
let imageUrl = ''; 

const handleFileChange = (event) => {
  const files = event.target.files;
  if (files.length > 0) {
    fileName = files[0].name;
  }
};

async function uploadImage () {
  const formData = new FormData();
  formData.append('imagefile', fileInput.files[0]);
  console.log(formData);
  imageUrl = await camperpinsService.uploadImage(pin._id, formData);
}
</script>


<div class="card">
  <div class="card-image">
    <figure class="image is-256x256">
      <img src={imageUrl}>
    </figure>
  </div>
</div>


<div class="card-content">
<form on:submit|preventDefault={uploadImage}>
  <div id="file-select" class="file has-name is-fullwidth">
    <label class="file-label"> 
      <input bind:this={fileInput} class="file-input" name="imagefile" type="file" accept="image/png, image/jpeg" on:change={handleFileChange}>
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
