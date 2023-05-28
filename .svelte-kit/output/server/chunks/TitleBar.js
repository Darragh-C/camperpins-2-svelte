import { c as create_ssr_component, a as subscribe, b as add_attribute, e as escape } from "./index2.js";
import { u as user } from "./stores.js";
const camperpinsLogo = "/_app/immutable/assets/camper-pins-logo.a54ebb6e.png";
const TitleBar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $user, $$unsubscribe_user;
  $$unsubscribe_user = subscribe(user, (value) => $user = value);
  let { title = "" } = $$props;
  let { subTitle = "" } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.subTitle === void 0 && $$bindings.subTitle && subTitle !== void 0)
    $$bindings.subTitle(subTitle);
  $$unsubscribe_user();
  return `<div class="box has-text-centered columns m-2"><div class="column"><img${add_attribute("src", camperpinsLogo, 0)} width="60" alt="img"></div>
  <div class="column"><div class="title is-5">${escape(title)}</div>
      <div class="subtitle is-5">${escape(subTitle)}</div></div>
  <div class="column"><i class="fas fa-map-marker fa-3x" style="color:rgb(50, 50, 150)"></i>
    ${$user.email ? `<div class="is-size-7">${escape($user.email)}</div>` : `<div class="is-size-7">Camperpins-Svelte 0.1</div>`}</div></div>`;
});
export {
  TitleBar as T,
  camperpinsLogo as c
};
