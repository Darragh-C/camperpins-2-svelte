
<script>
  import { onMount } from "svelte";
  import { camperpinsService } from "../services/camperpins-service";

  let pin = {};

  onMount(async () => {
    pin = await camperpinsService.getPin('6465027b9b7ce21cab7c3aa9')
  });

</script>

<h2 class="title">Pin: {pin.name}</h2>
<p>{pin.description}</p>
