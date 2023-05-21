// @ts-nocheck

import { irishCounties, costType } from "../stores";
import { camperpinsService } from "./camperpins-service";

export const dataMod = {

  getDistinct(array) {
    const distinctSet = new Set(array);
      return Array.from(distinctSet);
  },
    
  filterCounties(array) {
    return array.filter(item => irishCounties.includes(item));
  },

  filterCost(array) {
    return array.filter(item => costType.includes(item));
  },

  removeCounties(array) {
    return array.filter(item => !irishCounties.includes(item));
  },

  removeCost(array) {
    return array.filter(item => !costType.includes(item));
  },

  stripCategoryName(array) {
    return array.map(obj => obj.category);
  },

  filterCategoriesForPin(id, array) {
    return array.filter(item => item.pinId == id);
  }

};