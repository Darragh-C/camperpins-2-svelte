<script>
  import Chart from "svelte-frappe-charts";
  import { camperpinsService } from "../services/camperpins-service";
  import { dataMod } from "../services/data-mod";
  import { onMount, afterUpdate } from "svelte";

  let distinctCounties = [];
  let countyCategories = [];
  
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
    countyCategories = dataMod.filterCounties(allCategories);
    distinctCounties = dataMod.getDistinct(countyCategories);
    

    updateData();
  });

  afterUpdate(() => {
    updateData();
  });

  function updateData() {
    data.labels = [...distinctCounties];
    data.datasets[0].values = valuesArray(data.labels, countyCategories);
  }

  function valuesArray(distinctArray, allArray) {
    let valueArray = [];
    for (let i = 0; i < distinctArray.length; i++) {
      let count = 0;
      for (let j = 0; j < allArray.length; j++) {
        if (allArray[j] == distinctArray[i]) {
          count++;
        }
      }
      valueArray.push(count);
    }
    return valueArray;
  }
</script>



<h1 class="title is-4">Pins by county</h1>
<Chart {data} type="bar" />

