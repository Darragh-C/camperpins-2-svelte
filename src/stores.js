import {readable, writable} from "svelte/store";

export const user = writable({
  email: "",
  token: "",
});

export const latestLatLong = writable({ 
  lat: 0, 
  long: 0, 
});

export const lastPin = writable({ 
  lat: 0, 
  long: 0, 
});

export const irishCounties = (
  [
    'Antrim',
    'Armagh',
    'Carlow',
    'Cavan',
    'Clare',
    'Cork',
    'Derry',
    'Donegal',
    'Down',
    'Dublin',
    'Fermanagh',
    'Galway',
    'Kerry',
    'Kildare',
    'Kilkenny',
    'Laois',
    'Leitrim',
    'Limerick',
    'Longford',
    'Louth',
    'Mayo',
    'Meath',
    'Monaghan',
    'Offaly',
    'Roscommon',
    'Sligo',
    'Tipperary',
    'Tyrone',
    'Waterford',
    'Westmeath',
    'Wexford',
    'Wicklow'
  ]
)