<script lang="ts">
  import { goto } from '$app/navigation';
  import { camperpinsService } from '../services/camperpins-service'; 
  import sanitizeHtml from 'sanitize-html';

  let firstName = '';
  let lastName = '';
  let email = '';
  let password = '';
  let errorMessage = '';

  function sanitize(e) {
    e.preventDefault();
    value = e.target.value = e.target.value.replace(/[<>&"'`;*$()]/g, '');
  }

  async function signup() {
    const sanitizedFirstName = sanitizeHtml(firstName);
    const sanitizedLastName = sanitizeHtml(lastName);
    const sanitizedEmail = sanitizeHtml(email);
    const sanitizedPassword = sanitizeHtml(password);
    console.log(`attemting to sign up email: ${email}`);
    let success = await camperpinsService.signup(sanitizedFirstName, sanitizedLastName, sanitizedEmail, sanitizedPassword);
    if (success) {
      goto('/');
    } else {
      errorMessage = "Sign up error"
    }
    
  }
</script>

<form on:submit|preventDefault={signup}>
  <div class="field is-horizontal">
      <div class="field-body">
          <div class="field">
              <label for="firstname" class="label">First Name</label>
              <input bind:value={firstName} on:input={sanitize} id="firstname" class="input" type="text" placeholder="Enter first name" name="firstName" />
          </div>
          <div class="field">
              <label for="lastname" class="label">Last Name </label>
              <input bind:value={lastName} on:input={sanitize} id="lastname" class="input" type="text" placeholder="Enter last name" name="lastName" />
          </div>
      </div>
  </div>
  <div class="field">
      <label for="email" class="label">Email</label>
      <input bind:value={email} on:input={sanitize} id="email" class="input" type="text" placeholder="Enter email" name="email" />
  </div>
  <div class="field">
      <label for="password" class="label">Password</label>
      <input bind:value={password} on:input={sanitize} id="password" class="input" type="password" placeholder="Enter Password" name="password" />
  </div>
  <div class="field is-grouped">
      <button class="button is-link">Sign Up</button>
  </div>
</form>

{#if errorMessage}
  <div class="section">
    {errorMessage}
  </div>
{/if}
