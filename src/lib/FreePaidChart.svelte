<script>
  import { camperpinsService } from "../services/camperpins-service";
  import { dataMod } from "../services/data-mod";
  import { onMount } from "svelte";
  import ChartTemplate from "./ChartTemplate.svelte";

  let distinctCategories = [];
  let costType = [];

  onMount(async () => {
    const allCategories = dataMod.stripCategoryName(await camperpinsService.getCategories());
    costType = dataMod.filterCost(allCategories);
    distinctCategories = dataMod.getDistinct(costType);

  });

</script>

<ChartTemplate chartTitle="Paid vs Free locations" chartType="pie" chartLabels={distinctCategories} chartDatapoints={costType} />