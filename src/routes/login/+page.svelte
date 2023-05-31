<script>
  import van2 from "/src/static/epic-van.jpg"
  import TitleBar from '$lib/TitleBar.svelte';
  import LoginForm from '$lib/LoginForm.svelte';
  import WelcomeNavigator from '$lib/WelcomeNavigator.svelte';
</script>

<div class="columns is-vcentered">
  <div class="column is-two-thirds">
    <TitleBar title={"Camperpins Inc."} subTitle={"Sign up or Log in"}/>
  </div>
  <div class="column">
    <WelcomeNavigator/>
  </div>
</div>

<div class="columns">
  <div class="column has-text-centered">
      <img alt="epic-van" src={van2} width="300" />
  </div>
  <div class="column">
      <div class="box">
          <h1 class="title">Login</h1>
          <LoginForm />
      </div>
  </div>
</div>
