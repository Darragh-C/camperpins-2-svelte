<script>
  import Chart from "svelte-frappe-charts";
  import { camperpinsService } from "../services/camperpins-service";
  import { dataMod } from "../services/data-mod";
  import { onMount, afterUpdate } from "svelte";

  let distinctCategories = [];
  let campType = [];
  
  let data = {
      labels: [],
      datasets: [
          {
              values: []
          }
      ],
      maxSlices: 10,
  };

  onMount(async () => {
    const allCategories = dataMod.stripCategoryName(await camperpinsService.getCategories());
    campType = dataMod.removeCost(dataMod.removeCounties(allCategories));
    distinctCategories = dataMod.getDistinct(campType);
    console.log(distinctCategories);
    console.log(campType);
    updateData();
  });

  afterUpdate(() => {
    updateData();
  });

  function updateData() {
    data.labels = [...distinctCategories];
    data.datasets[0].values = valuesArray(data.labels, campType);
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



<h1 class="title is-4">Pins by camp spot</h1>
<Chart {data} type="donut" />

