<script>
  import { camperpinsService } from '../services/camperpins-service';
  import { goto } from '$app/navigation';
  import sanitizeHtml from 'sanitize-html';

  export let displayDescrip = "";
  export let pindescrip = "";
  export let pinId = "";

  function sanitize(e) {
    e.preventDefault();
    value = e.target.value = e.target.value.replace(/[<>&"'`;*$()]/g, '');
  }

  function sanitizeOutput(output) {
    return sanitizeHtml(output);
  }

  async function addPinDescrip() {
    const update = {
      description: sanitizeHtml(pindescrip),
    }
    let success = await camperpinsService.updatePin(pinId, update);
    console.log(success);
    if (success) {
      displayDescrip = pindescrip;
      pindescrip = "";
    } else {
      pindescrip = '';
      pinId = '';
    }
  }
</script>


<div class="box box-link-hover-shadow">
  <p>
    {@html sanitizeOutput(displayDescrip)}
  </p>
</div>

<div class="box box-link-hover-shadow">
  <form on:submit|preventDefault={addPinDescrip}>
    <div class="field">
        <label class="label" for="pindescrip">Pin description</label>
        <input bind:value={pindescrip} on:input={sanitize} class="input" id="pindescrip" name="pindescrip" placeholder="Enter a new pin description" type="text" />
    </div>
    <div class="field is-grouped">
        <button class="button is-link">Add Description</button>
    </div>
  </form>
</div>