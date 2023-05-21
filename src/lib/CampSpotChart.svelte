<script>
  import Chart from "svelte-frappe-charts";
  import { camperpinsService } from "../services/camperpins-service";
  import { dataMod } from "../services/data-mod";
  import { onMount } from "svelte";
  import ChartTemplate from "./ChartTemplate.svelte";

  let distinctCategories = [];
  let campType = [];

  onMount(async () => {
    const allCategories = dataMod.stripCategoryName(await camperpinsService.getCategories());
    campType = dataMod.removeCost(dataMod.removeCounties(allCategories));
    distinctCategories = dataMod.getDistinct(campType);

  });

</script>

<ChartTemplate chartTitle="Camping spots" chartType="donut" distinctCat={distinctCategories} allCategories={campType} />