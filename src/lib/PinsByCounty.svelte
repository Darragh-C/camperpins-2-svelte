<script>
  import { camperpinsService } from "../services/camperpins-service";
  import { dataMod } from "../services/data-mod";
  import { onMount } from "svelte";
  import ChartTemplate from "./ChartTemplate.svelte";

  let distinctCounties = [];
  let allCounties = [];
  
  let data = {
      labels: [],
      datasets: [
          {
              values: []
          }
      ]
  };

  onMount(async () => {
    const allCategories = dataMod.stripCategoryName(await camperpinsService.getCategories());
    allCounties = dataMod.filterCounties(allCategories);
    distinctCounties = dataMod.getDistinct(allCounties);
  });

</script>

<ChartTemplate chartTitle="Pins by county" chartType="bar" chartLabels={distinctCounties} chartDatapoints={allCounties} />