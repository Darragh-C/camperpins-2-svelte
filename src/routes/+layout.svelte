<script>
  import { beforeUpdate } from "svelte";
  import { camperpinsService } from "../services/camperpins-service";

  beforeUpdate(() => {
    camperpinsService.reload();
  });
</script>

<div class="container">
  <slot />
</div>
