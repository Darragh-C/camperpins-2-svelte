<script>
  import camperpinsLogo from "/src/assets/camper-pins-logo.png"
  import Header from '$lib/Header.svelte';
  import WelcomeNavigator from '$lib/WelcomeNavigator.svelte';
</script>

<Header>
  <WelcomeNavigator />
</Header>  

<div class="columns is-vcentered content">
  <div class="column has-text-centered">
      <img width="300" src={camperpinsLogo} alt="vw" />
  </div>
  <div class="column">
      <h1 class="title">Add and find camping spots</h1>
      <p>Search by location or category</p>
  </div>
</div>