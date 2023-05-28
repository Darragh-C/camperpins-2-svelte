import { w as writable } from "./index.js";
const user = writable({
  email: "",
  token: ""
});
const latestLatLong = writable({
  lat: 0,
  long: 0
});
const lastPin = writable({
  lat: 0,
  long: 0
});
export {
  lastPin as a,
  latestLatLong as l,
  user as u
};
