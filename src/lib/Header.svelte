<script>
  import TitleBar from './TitleBar.svelte';
  import WelcomeNavigator from './WelcomeNavigator.svelte';
</script>

<div class="columns is-vcentered">
  <div class="column is-half">
      <TitleBar title={'Camperpins Inc.'} subTitle={'Sign up or Log in'} />
  </div>
  <div class="column is-half">
      <slot />
  </div>
</div>
