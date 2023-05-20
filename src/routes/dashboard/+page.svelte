<script>
  import { onMount } from 'svelte';
  import { camperpinsService } from '../../services/camperpins-service';
  import TitleBar from '$lib/TitleBar.svelte';
  import AddPin from '$lib/AddPin.svelte';
  import ListPins from '$lib/ListPins.svelte';
  import MainNavigator from '$lib/MainNavigator.svelte';

  let pinList = [];

  async function updatePinList() {
    pinList = await camperpinsService.getPins();
  }

  onMount(updatePinList);

  function pinAdded() {
    updatePinList();
  }
</script>

<div class="columns is-vcentered">
  <div class="column is-two-thirds">
    <TitleBar subTitle={"Your pins..."} title={"Camperpins Inc."}/>
  </div>
  <div class="column">
    <MainNavigator/>
  </div>
</div> 

<AddPin on:pinAdded={pinAdded} />
<ListPins {pinList} />

