<script>
  import { beforeUpdate } from "svelte";
  import MainNavigator from "$lib/MainNavigator.svelte";
  import TitleBar from '$lib/TitleBar.svelte';
  import PinMap from "$lib/PinMap.svelte";
  import { camperpinsService } from "../../services/camperpins-service";


</script>

<div class="columns is-vcentered">
  <div class="column is-two-thirds">
    <TitleBar subTitle={"Pin map"} title={"Camperpins Inc."}/>
  </div>
  <div class="column">
    <MainNavigator/>
  </div>
</div> 

<PinMap />