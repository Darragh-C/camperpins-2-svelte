<script>
  import PinCoordinates from '$lib/PinCoordinates.svelte';
  import PinTitle from '$lib/PinTitle.svelte';
  import AddPinTitle from '$lib/AddPinTitle.svelte';
  import AddPinDesc from '$lib/AddPinDesc.svelte';
  import PinDesc from '$lib/PinDesc.svelte';
  import MainNavigator from "$lib/MainNavigator.svelte";
  import TitleBar from '$lib/TitleBar.svelte';
  import AddCategory from '$lib/AddCategory.svelte';
  import DisplayImage from '$lib/DisplayImage.svelte';
  import { camperpinsService } from '../../../services/camperpins-service';
  import { dataMod } from '../../../services/data-mod';
  import DisplayCategories from '$lib/DisplayCategories.svelte';
  import { onMount } from "svelte";

  /** @type {import('./$types').PageData} */
  export let data;
  const { pin } = data

  let currentPinCategories = [];
  /*
  const currentPinCategories = dataMod.filterCategoriesForPin(pin._id, async () => {
    return await camperpinsService.getCategories();
  })
  */
  onMount (getPinCategories);

  async function getPinCategories() {
    const allCategories = await camperpinsService.getCategories();
    currentPinCategories = dataMod.filterCategoriesForPin(pin._id, allCategories);
    console.log(currentPinCategories);
  }

</script>

<div class="columns is-vcentered">
  <div class="column is-two-thirds">
    <TitleBar subTitle={"Pin view"} title={"Camperpins Inc."}/>
  </div>
  <div class="column">
    <MainNavigator/>
  </div>
</div> 

<div >
    <div class="columns is-multiline is-mobile">
        <div class="column is-two-thirds">
          
          {#if pin.name}
            <PinTitle name={pin.name} />
          {:else}   
            <AddPinTitle pinId={pin._id} />
          {/if}
          {#if currentPinCategories}
            <DisplayCategories pinCategories={currentPinCategories} />
          {/if}
          {#if pin.description}
            <PinDesc description={pin.description} />
          {:else}   
            <AddPinDesc pinId={pin._id} />
          {/if}

        </div>
        <div class="column is-one-third">
          <PinCoordinates lat={pin.lattitude} long={pin.longitude} />
          <AddCategory pinId={pin._id} />
          {#if pin.img}
            <DisplayImage image={pin.img} name={pin.name} />
          {/if}
        </div>
    </div>   
</div>


