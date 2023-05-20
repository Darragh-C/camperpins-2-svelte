<script>
  import Chart from "svelte-frappe-charts";
  import { camperpinsService } from "../services/camperpins-service";
  import { dataMod } from "../services/data-mod";
  import { onMount, afterUpdate } from "svelte";

  let freeCamping = 0;
  let paidCamping = 0;
  
  let data = {
    labels: ['Free', 'Paid'],
    datasets: []
  };

  onMount(async () => {
    const allCategories = dataMod.stripCategoryName(await camperpinsService.getCategories());
    tally(allCategories);
  });

  function tally(pins) {
    freeCamping = 0;
    paidCamping = 0;

    for (let i = 0; i < pins.length; i++) {
      if (pins[i] == 'Free') {
        freeCamping += 1;
      } else if (pins[i] == 'Paid') {
        paidCamping += 1;
      }
    }

    data.datasets = [
      {
        values: [freeCamping, paidCamping]
      }
    ];
  }
</script>



<h1 class="title is-4">Free vs Paid locations</h1>
<Chart {data} type="pie" />

