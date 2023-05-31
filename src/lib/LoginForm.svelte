<script>
  import { goto } from '$app/navigation';
  import { camperpinsService } from '../services/camperpins-service';
  import sanitizeHtml from 'sanitize-html';

  let email = '';
  let password = '';
  let errorMessage = "";

  function sanitize(e) {
    e.preventDefault();
    value = e.target.value = e.target.value.replace(/[<>&"'`;*$()]/g, '');
  }

  async function login() {
    const sanitizedEmail = sanitizeHtml(email);
    const sanitizedPassword = sanitizeHtml(password);
    console.log(`attemting to log in email: ${sanitizedEmail} with password: ${sanitizedPassword}`);
    let success = await camperpinsService.login(sanitizedEmail, sanitizedPassword);
    if (success) {
      goto('/map');
    } else {
      email = '';
      password = '';
      errorMessage = "Invalid Credentials";
    }
  }
</script>

<form on:submit|preventDefault={login}>
  <div class="field">
      <label class="label" for="email">Email</label>
      <input bind:value={email} on:input={sanitize} class="input" id="email" name="email" placeholder="Enter email" type="text" />
  </div>
  <div class="field">
      <label class="label" for="password">Password</label>
      <input bind:value={password} on:input={sanitize} class="input" id="password" name="password" placeholder="Enter Password" type="password" />
  </div>
  <div class="field is-grouped">
      <button class="button is-link">Log In</button>
  </div>
</form>

{#if errorMessage}
  <div class="section">
    {errorMessage}
  </div>
{/if}