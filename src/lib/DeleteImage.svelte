<script>
  import { camperpinsService } from "../services/camperpins-service";
  import { createEventDispatcher } from 'svelte';
  
  const dispatch = createEventDispatcher();

  export let pinId = "";

  async function deleteImage() {
    const success = await camperpinsService.removeImage(pinId);
    if (success) {
      dispatch('deleted');
      console.log('image deleted!')
    }
  }
</script>


<button on:click={deleteImage}>Delete Image</button>
