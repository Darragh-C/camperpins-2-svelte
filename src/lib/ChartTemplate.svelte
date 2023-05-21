<script>
  import Chart from "svelte-frappe-charts";
  import { onMount, afterUpdate } from "svelte";

  export let chartTitle = "";
  export let chartType = "";
  export let distinctCat = [];
  export let allCategories = [];
  
  let data = {
      labels: [],
      datasets: [
          {
              values: []
          }
      ]
  };

  onMount(async () => {
    updateData();
  });

  afterUpdate(() => {
    updateData();
  });

  function updateData() {
    data.labels = [...distinctCat];
    data.datasets[0].values = valuesArray(data.labels, allCategories);
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



<h1 class="title is-4">{chartTitle}</h1>
<Chart {data} type={chartType} />

