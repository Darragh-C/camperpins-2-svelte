import { c as create_ssr_component, e as escape, v as validate_component } from "../../../chunks/index2.js";
import { T as TitleBar } from "../../../chunks/TitleBar.js";
import { M as MainNavigator } from "../../../chunks/MainNavigator.js";
const Test = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let pin = {};
  return `<h2 class="title">Pin: ${escape(pin.name)}</h2>
<p>${escape(pin.description)}</p>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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

${validate_component(Test, "Test").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
