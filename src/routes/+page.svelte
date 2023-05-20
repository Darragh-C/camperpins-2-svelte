<script>
  import vw from "/src/assets/vw.png"
  import Header from '$lib/Header.svelte';
  import WelcomeNavigator from '$lib/WelcomeNavigator.svelte';
</script>

<Header>
  <WelcomeNavigator />
</Header>  

<div class="columns is-vcentered content">
  <div class="column has-text-centered">
      <img width="300" src={vw} alt="vw" />
  </div>
  <div class="column">
      <h1 class="title">Add and find camping spots</h1>
      <p>Search by location or category</p>
  </div>
</div>