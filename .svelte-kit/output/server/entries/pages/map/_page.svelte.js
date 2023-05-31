import { c as create_ssr_component, a as subscribe, o as onDestroy, v as validate_component } from "../../../chunks/index2.js";
import { M as MainNavigator } from "../../../chunks/MainNavigator.js";
import { T as TitleBar } from "../../../chunks/TitleBar.js";
import "leaflet";
import { u as user, l as latestLatLong, a as lastPin } from "../../../chunks/stores.js";
import { c as camperpinsService } from "../../../chunks/camperpins-service.js";
import { g as goto } from "../../../chunks/navigation.js";
const PinMap = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $user, $$unsubscribe_user;
  $$unsubscribe_user = subscribe(user, (value) => $user = value);
  const userEmail = $user.email;
  async function addPin(markerPin) {
    console.log(`attemting to add pin`);
    const users = await camperpinsService.getUsers();
    const loggedInUser = users.find((loggedInUser2) => loggedInUser2.email == userEmail);
    const userId = loggedInUser._id;
    console.log(userId);
    const pin = {
      userid: userId,
      lattitude: markerPin.lat.toString(),
      longitude: markerPin.long.toString()
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
  const unsub = latestLatLong.subscribe((value) => {
    if (value.long && value.long !== lastPin.long && value.lat && value.lat !== lastPin.lat) {
      console.log(`New pin at long ${value.long} and lat ${value.lat}`);
      const newMarker = { lat: value.lat, long: value.long };
      addPin(newMarker);
    }
  });
  onDestroy(unsub);
  $$unsubscribe_user();
  return `<div class="box" id="pin-map" style="height:75vh"></div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="columns is-vcentered"><div class="column is-two-thirds">${validate_component(TitleBar, "TitleBar").$$render(
    $$result,
    {
      subTitle: "Pin map",
      title: "Camperpins Inc."
    },
    {},
    {}
  )}</div>
  <div class="column">${validate_component(MainNavigator, "MainNavigator").$$render($$result, {}, {}, {})}</div></div> 

${validate_component(PinMap, "PinMap").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
