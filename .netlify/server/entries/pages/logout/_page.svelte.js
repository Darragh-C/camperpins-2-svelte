import { c as create_ssr_component } from "../../../chunks/index2.js";
import { g as goto } from "../../../chunks/navigation.js";
import { c as camperpinsService } from "../../../chunks/camperpins-service.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  camperpinsService.logout();
  goto("/");
  return ``;
});
export {
  Page as default
};
