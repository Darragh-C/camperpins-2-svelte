<script>
  import TitleBar from '$lib/TitleBar.svelte';
  import Test from '$lib/Test.svelte';
  import MainNavigator from '$lib/MainNavigator.svelte';
</script>

<div class="columns is-vcentered">
  <div class="column is-two-thirds">
    <TitleBar subTitle={"Your pins..."} title={"Camperpins Inc."}/>
  </div>
  <div class="column">
    <MainNavigator/>
  </div>
</div> 

<Test />

