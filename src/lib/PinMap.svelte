<script>
  import "leaflet/dist/leaflet.css";
  import { LeafletMap } from "../services/leaflet-map";
  import { onMount } from "svelte";
  import { camperpinsService } from "../services/camperpins-service";
  import { user, latestLatLong, lastPin } from "../stores.js";
  import { onDestroy } from "svelte";
  import { goto } from "$app/navigation";
  import * as L from "leaflet";
  
  let testLG = "";

  const mapConfig = {
    location: { lat: 52.160858, lng: -7.15242 },
    zoom: 8,
    minZoom: 1,
    layers: testLG,
  };

  const userEmail = $user.email;
  

  async function addPin(markerPin) {
    console.log(`attemting to add pin`);
    const users = await camperpinsService.getUsers();
    const loggedInUser = users.find(loggedInUser => loggedInUser.email == userEmail);
    const userId = loggedInUser._id; 
    console.log(userId);
    const pin = {
      userid: userId,
      lattitude: markerPin.lat.toString(),
      longitude: markerPin.long.toString(),
    };
    const response = await camperpinsService.addPin(pin);
    
    if (response) {
      console.log("Pin added");
      lastPin.lat = markerPin.lat;
      lastPin.long = markerPin.long;
      console.log(`last pin: ${lastPin.lat} ${lastPin.long}`);
      goto(`/pin/${response._id}`);
      return response;
    } else {
      console.log("Pin add error");
    }
  }

  const unsub = latestLatLong.subscribe(value => {
    if (value.long && value.long !== lastPin.long && value.lat && value.lat !== lastPin.lat) {
      console.log(`New pin at long ${value.long} and lat ${value.lat}`);
      const newMarker = {
        lat: value.lat,
        long: value.long,
      }; 
      addPin(newMarker);
      
    } 
  });

  onDestroy(unsub);


  onMount(async () => {
    const map = new LeafletMap("pin-map", mapConfig);
    map.showZoomControl();
    map.showLayerControl();

    let TestLayerGroup = map.addLayerGroup("TestLayerGroup");
    
    const newMarker = await map.onClickAddMarker();
    if (newMarker) {
      console.log('new marker added');
    }
    const pins = await camperpinsService.getPins();
    pins.forEach((pin) => {
      addPinMarker(map, pin);
    });
    
    map.showLayerControl();
    /*
    testGroup = L.layerGroup([]);
    
    const testPins = pins.slice(0,4);
    testLG = L.layerGroup(testPins);
    const overlayMaps = {
      "testLG": testLG
    };
    const layerControl = L.control.layers(overlayMaps).addTo(map);
    */
  });

  function addPinMarker(map, pin) {
    let markerString = "";
    if (pin.name) {
      markerString = `<a href="/pin/${pin._id}">${pin.name}</a>`;
    } else {
      markerString = `<a href="/pin/${pin._id}">Add pin information</a>`;
    } 
    map.addMarker({ lat: pin.lattitude, lng: pin.longitude }, markerString, "TestLayerGroup");
  }
</script>

<div class="box" id="pin-map" style="height:75vh" />
