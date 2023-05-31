import { c as camperpinsService } from "../../../../chunks/camperpins-service.js";
async function load({ params }) {
  const pin = await camperpinsService.getPin(params.slug);
  return {
    pin
  };
}
export {
  load
};
