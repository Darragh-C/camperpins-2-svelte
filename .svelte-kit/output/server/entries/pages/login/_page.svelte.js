import { c as create_ssr_component, b as add_attribute, v as validate_component } from "../../../chunks/index2.js";
import { T as TitleBar } from "../../../chunks/TitleBar.js";
import { W as WelcomeNavigator } from "../../../chunks/WelcomeNavigator.js";
const van2 = "/_app/immutable/assets/epic-van.46ae8272.jpg";
const LoginForm = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let email = "";
  let password = "";
  return `<form><div class="field"><label class="label" for="email">Email</label>
      <input class="input" id="email" name="email" placeholder="Enter email" type="text"${add_attribute("value", email, 0)}></div>
  <div class="field"><label class="label" for="password">Password</label>
      <input class="input" id="password" name="password" placeholder="Enter Password" type="password"${add_attribute("value", password, 0)}></div>
  <div class="field is-grouped"><button class="button is-link">Log In</button></div></form>

${``}`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="columns is-vcentered"><div class="column is-two-thirds">${validate_component(TitleBar, "TitleBar").$$render(
    $$result,
    {
      title: "Camperpins Inc.",
      subTitle: "Sign up or Log in"
    },
    {},
    {}
  )}</div>
  <div class="column">${validate_component(WelcomeNavigator, "WelcomeNavigator").$$render($$result, {}, {}, {})}</div></div>

<div class="columns"><div class="column has-text-centered"><img alt="epic-van"${add_attribute("src", van2, 0)} width="300"></div>
  <div class="column"><div class="box"><h1 class="title">Login</h1>
          ${validate_component(LoginForm, "LoginForm").$$render($$result, {}, {}, {})}</div></div></div>`;
});
export {
  Page as default
};
