<script>
  import { latestCategory } from '../stores';
  export let pinCategories;

</script>

<div class="tags are-medium">
  {#each pinCategories as category}
    <span class="tag">{category.category}</span>
  {/each}
</div>