
<script>
  import { user } from "../stores.js";
  import { goto } from '$app/navigation';
  import { camperpinsService } from '../services/camperpins-service'; 
  import { createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher();
  const userEmail = $user.email;
  let pinName = '';
  let errorMessage = '';

  async function addPin() {
    console.log(`attemting to add pin: ${pinName}`);
    const users = await camperpinsService.getUsers();
    const loggedInUser = users.find(loggedInUser => loggedInUser.email == userEmail);
    const userId = loggedInUser._id; 
    const pin = {
      name: pinName,
      userid: userId,
    };
    const success = await camperpinsService.addPin(pin);
    console.log(success)
    if (success) {
      dispatch('pinAdded');
      goto('/dashboard');
    } else {
      errorMessage = "Add pin error"
    }
  }
</script>

<div class="box box-link-hover-shadow">
  <form on:submit|preventDefault={addPin}>
    <div class="field is-horizontal">
      <div class="field-body">
        <div class="field">
          <label class="label" for="pinName">Add a pin:</label>
          <input bind:value={pinName} class="input" type="text" placeholder="Enter pin name" name="pinname">
        </div>
        <div>
          <button class="button is-link">Add Pin</button>
        </div>
      </div>    
    </div>
  </form>
</div>

{#if errorMessage}
  <div class="section">
    {errorMessage}
  </div>
{/if}
