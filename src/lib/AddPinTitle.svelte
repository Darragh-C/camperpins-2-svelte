<script>
  import { camperpinsService } from '../services/camperpins-service';
  import { goto } from '$app/navigation';
  import sanitizeHtml from 'sanitize-html';

  export let displayName = "";
  export let pinname = "";
  export let pinId = "";

  function sanitize(e) {
    e.preventDefault();
    value = e.target.value = e.target.value.replace(/[<>&"'`;*$()]/g, '');
  }

  function sanitizeOutput(output) {
    return sanitizeHtml(output);
  }

  async function addPinName() {
    const update = {
      name: sanitizeHtml(pinname),
    }
    let success = await camperpinsService.updatePin(pinId, update);
    console.log(success);
    if (success) {
      displayName = pinname;
      pinname = "";
    } else {
      pinname = '';
      pinId = '';
    }
  }
</script>


<div class="box box-link-hover-shadow">
  <h2 class="title">
    {@html sanitizeOutput(displayName)}
  </h2>
</div>

<div class="box box-link-hover-shadow">
  <form on:submit|preventDefault={addPinName}>
    <div class="field">
        <label class="label" for="pinname">Pin name</label>
        <input bind:value={pinname} on:input={sanitize} class="input" id="pinname" name="pinname" placeholder="Enter a new pin name" type="text" />
    </div>
    <div class="field is-grouped">
        <button class="button is-link">Add Name</button>
    </div>
  </form>
</div>

