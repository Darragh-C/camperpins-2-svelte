<script>
  import TitleBar from "$lib/TitleBar.svelte";
  import MainNavigator from "$lib/MainNavigator.svelte";
  import PinsByCounty from "$lib/PinsByCounty.svelte";
  import CampSpotChart from "$lib/CampSpotChart.svelte";
  import FreePaidChart from "$lib/FreePaidChart.svelte";
  import van2 from "/src/assets/epic-van.jpg"
</script>

<div class="columns is-vcentered">
  <div class="column is-two-thirds">
      <TitleBar subTitle={"Pin analytics"} title={"Camperpins Inc."} />
  </div>
  <div class="column">
      <MainNavigator />
  </div>
</div>

<div class="columns">
  <div class="column has-text-centered">
    <PinsByCounty />
  </div>
  <div class="column has-text-centered">
    <FreePaidChart />
  </div>
</div>
<div class="column has-text-centered">
  <CampSpotChart />
</div>