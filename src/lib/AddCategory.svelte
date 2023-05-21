<script>
  import { camperpinsService } from '../services/camperpins-service';

  let newCategory = "";
  export let pinId = "";
  export let currentPinCategories;
  export let updateArray;

  async function addCategory() {
    const categoryObject = {
      category: newCategory,
      pinId: pinId,
    };
    const addedCategory = await camperpinsService.addCategory(pinId, categoryObject);
    if (addedCategory) {
      newCategory = "";
      const updatedArray = [...currentPinCategories, addedCategory];
      updateArray(updatedArray);
    }
    
  }

</script>

<div class="box box-link-hover-shadow">
  <form on:submit|preventDefault={addCategory}>
    <div class="field">
        <label class="label" for="category">Add category</label>
        <input bind:value={newCategory} class="input" id="category" name="category" placeholder="Enter a new category" type="text" />
    </div>
    <div class="field is-grouped">
        <button class="button is-link">Add Category</button>
    </div>
  </form>
</div>