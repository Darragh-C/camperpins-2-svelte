<script>
  import Chart from "svelte-frappe-charts";
  import { onMount, afterUpdate } from "svelte";

  export let chartTitle = "";
  export let chartType = "";
  export let chartLabels = [];
  export let chartDatapoints = [];
  
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
    data.labels = [...chartLabels];
    data.datasets[0].values = valuesArray(data.labels, chartDatapoints);
  }

  function valuesArray(labelArray, dataPointsArray) {
    let valueArray = [];
    for (let i = 0; i < labelArray.length; i++) {
      let count = 0;
      for (let j = 0; j < dataPointsArray.length; j++) {
        if (dataPointsArray[j] == labelArray[i]) {
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

