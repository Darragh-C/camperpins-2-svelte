<script>
  import { goto } from "$app/navigation";
  import { camperpinsService } from "../../services/camperpins-service";

  camperpinsService.logout();
  goto("/");
</script>
