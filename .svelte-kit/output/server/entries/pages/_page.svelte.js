import { c as create_ssr_component, v as validate_component, b as add_attribute } from "../../chunks/index2.js";
import { T as TitleBar, c as camperpinsLogo } from "../../chunks/TitleBar.js";
import { W as WelcomeNavigator } from "../../chunks/WelcomeNavigator.js";
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="columns is-vcentered"><div class="column is-two-thirds">${validate_component(TitleBar, "TitleBar").$$render(
    $$result,
    {
      title: "Camperpins Inc.",
      subTitle: "Sign up or Log in"
    },
    {},
    {}
  )}</div>
  <div class="column is-one-third">${slots.default ? slots.default({}) : ``}</div></div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Header, "Header").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(WelcomeNavigator, "WelcomeNavigator").$$render($$result, {}, {}, {})}`;
    }
  })}  

<div class="columns is-vcentered content"><div class="column has-text-centered"><img width="300"${add_attribute("src", camperpinsLogo, 0)} alt="vw"></div>
  <div class="column"><h1 class="title">Add and find camping spots</h1>
      <p>Search by location or category</p></div></div>`;
});
export {
  Page as default
};
