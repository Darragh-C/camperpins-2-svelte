<script>
  import TitleBar from './TitleBar.svelte';
  import WelcomeNavigator from './WelcomeNavigator.svelte';
</script>

<div class="columns is-vcentered">
  <div class="column is-two-thirds">
      <TitleBar title={'Camperpins Inc.'} subTitle={'Sign up or Log in'} />
  </div>
  <div class="column is-one-third">
      <slot />
  </div>
</div>
