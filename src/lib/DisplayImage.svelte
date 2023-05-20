<script>
  export let image = "";
  export let name = "";
</script>

<div class="box box-link-hover-shadow">
  <div class="card-image">
    <figure class="image is-256x256">
        <!-- svelte-ignore a11y-img-redundant-alt -->
        <img src={image} alt={`image of ${name}`}>
    </figure>
  </div>  
</div>