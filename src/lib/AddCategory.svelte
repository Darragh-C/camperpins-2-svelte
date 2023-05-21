<script>
  import { camperpinsService } from '../services/camperpins-service';

  let newCategory = "";
  export let pinId = "";

  async function addCategory() {
    const categoryObject = {
      category: newCategory,
      pinId: pinId,
    };
    const response = await camperpinsService.addCategory(pinId, categoryObject);
    console.log(response);
  }

</script>

<div class="box box-link-hover-shadow">
  <form on:submit|preventDefault={addCategory}>
    <div class="field">
        <label class="label" for="pinname">Add category</label>
        <input bind:value={newCategory} class="input" id="category" name="category" placeholder="Enter a new category" type="text" />
    </div>
    <div class="field is-grouped">
        <button class="button is-link">Add Category</button>
    </div>
  </form>
</div>