
<script>
  import { onMount } from "svelte";
  import { camperpinsService } from "../services/camperpins-service";

  export let pinList = [];

  onMount(async () => {
    pinList = await camperpinsService.getPins();
  });
</script>

<h2 class="title">Your pins:</h2>
{#each pinList as pin}
  <div class="box box-link-hover-shadow">
    <h2 class="title">
      {pin.name}
    </h2>
    <p>{pin.description}</p>
  </div>
{/each}