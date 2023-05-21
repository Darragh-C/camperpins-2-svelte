<script>
    import { onMount } from "svelte";
    import { camperpinsService } from "../services/camperpins-service";
    import { dataMod } from "../services/data-mod";

    let distinctCategories = [];

    onMount( async () => {
      updateDistinctCategories()
    }) 

    async function updateDistinctCategories() {
      const allCategories = dataMod.stripCategoryName(await camperpinsService.getCategories());
      distinctCategories = dataMod.getDistinct(allCategories);
      console.log(distinctCategories);
    } 
</script>

<form class="box" action="/dashboard/filtercategory" method="POST">
  <div class="field is-horizontal">
    <div class="field-body">
      <div class="field">
          <label class="label">Filter pins by category:</label>
          <div class="control">
              <div class="select">
                  <select name="filter">
                    {#each distinctCategories as category}
                      <option value="{category}">{category}</option>
                    {/each}
                  </select>
              </div>
          </div>
        </div>
      </div>  
      <div class="field is-horizontal">
        <button class="button is-link">Filter</button>
      </div>    
  </div>
</form>