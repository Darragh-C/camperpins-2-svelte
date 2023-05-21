<script>
  import PinCoordinates from '$lib/PinCoordinates.svelte';
  import PinTitle from '$lib/PinTitle.svelte';
  import AddPinTitle from '$lib/AddPinTitle.svelte';
  import AddPinDesc from '$lib/AddPinDesc.svelte';
  import PinDesc from '$lib/PinDesc.svelte';
  import MainNavigator from "$lib/MainNavigator.svelte";
  import TitleBar from '$lib/TitleBar.svelte';
  import DisplayImage from '$lib/DisplayImage.svelte';
  import { camperpinsService } from '../../../services/camperpins-service';
  import { dataMod } from '../../../services/data-mod';

  /** @type {import('./$types').PageData} */
  export let data;
  const { pin } = data

  const pinCategories = 
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
          {#if pin.description}
            <PinDesc description={pin.description} />
          {:else}   
            <AddPinDesc pinId={pin._id} />
          {/if}
        </div>
        <div class="column is-one-third">
          <PinCoordinates lat={pin.lattitude} long={pin.longitude} />
          {#if pin.img}
            <DisplayImage image={pin.img} name={pin.name} />
          {/if}
        </div>
    </div>   
</div>


