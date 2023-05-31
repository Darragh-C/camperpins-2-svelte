<script>
  import van1 from "/src/static/van-sun.jpg"
  import TitleBar from '$lib/TitleBar.svelte';
  import SignupForm from '$lib/SignupForm.svelte';
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
  <div class="column">
      <div class="box">
          <h1 class="title">Sign up</h1>
          <SignupForm />
      </div>
  </div>
  <div class="column has-text-centered">
      <img alt="sun-van" src={van1} width="300" />
  </div>
</div>
