import { c as create_ssr_component, a as subscribe, d as createEventDispatcher, b as add_attribute, f as each, e as escape, v as validate_component } from "../../../chunks/index2.js";
import { T as TitleBar } from "../../../chunks/TitleBar.js";
import { u as user } from "../../../chunks/stores.js";
import { M as MainNavigator } from "../../../chunks/MainNavigator.js";
const AddPin = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $user, $$unsubscribe_user;
  $$unsubscribe_user = subscribe(user, (value) => $user = value);
  createEventDispatcher();
  $user.email;
  let pinName = "";
  $$unsubscribe_user();
  return `<div class="box box-link-hover-shadow"><form><div class="field is-horizontal"><div class="field-body"><div class="field"><label class="label" for="pinName">Add a pin:</label>
          <input class="input" type="text" placeholder="Enter pin name" name="pinname"${add_attribute("value", pinName, 0)}></div>
        <div><button class="button is-link">Add Pin</button></div></div></div></form></div>

${``}`;
});
const ListPins = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { pinList = [] } = $$props;
  if ($$props.pinList === void 0 && $$bindings.pinList && pinList !== void 0)
    $$bindings.pinList(pinList);
  return `<h2 class="title">Your pins:</h2>
${each(pinList, (pin) => {
    return `<div class="box box-link-hover-shadow"><h2 class="title">${escape(pin.name)}</h2>
    <p>${escape(pin.description)}</p>
  </div>`;
  })}`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let pinList = [];
  return `<div class="columns is-vcentered"><div class="column is-two-thirds">${validate_component(TitleBar, "TitleBar").$$render(
    $$result,
    {
      subTitle: "Your pins...",
      title: "Camperpins Inc."
    },
    {},
    {}
  )}</div>
  <div class="column">${validate_component(MainNavigator, "MainNavigator").$$render($$result, {}, {}, {})}</div></div> 

${validate_component(AddPin, "AddPin").$$render($$result, {}, {}, {})}
${validate_component(ListPins, "ListPins").$$render($$result, { pinList }, {}, {})}`;
});
export {
  Page as default
};
