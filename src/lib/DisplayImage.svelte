<script>
  import { goto } from "$app/navigation";
  import { camperpinsService } from "../services/camperpins-service";

  export let image = "";
  export let name = "";
  export let pinId = "";

  async function deleteImage() {
    await camperpinsService.updatePin(pinId, {
      img: null,
    });
    goto(`/pin/${pinId}`);
  }
</script>

<div class="box box-link-hover-shadow">
  <div class="card-image">
    <figure class="image is-256x256">
        <!-- svelte-ignore a11y-img-redundant-alt -->
        <img src={image} alt={`image of ${name}`}>
    </figure>
    <button on:click="{deleteImage}">Delete Image</button>
  </div>  
</div>