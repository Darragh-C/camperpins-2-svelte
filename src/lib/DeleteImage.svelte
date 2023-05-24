<script>
  import { camperpinsService } from "../services/camperpins-service";

  export let pinId = "";

  async function deleteImage() {
    await camperpinsService.updatePin(pinId, {
      "img": "",
    });
   
  }
</script>


<button on:click="{deleteImage}">Delete Image</button>
