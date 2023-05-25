<script>
  import { camperpinsService } from "../services/camperpins-service";

  export let pinId = "";

  async function deleteImage() {
    await camperpinsService.removeImage(pinId);
   
  }
</script>


<button on:click|preventDefault={deleteImage}>Delete Image</button>
