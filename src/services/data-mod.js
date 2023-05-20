// @ts-nocheck

import { irishCounties } from "../stores";
import { camperpinsService } from "./camperpins-service";

export const dataMod = {

  getDistinct(array) {
    const distinctSet = new Set(array);
      return Array.from(distinctSet);
  },
    
  filterCounties(array) {
    return array.filter(item => irishCounties.includes(item));
  },

  stripCategoryName(array) {
    return array.map(obj => obj.category);
  },

  getPinsWithCategory(category) {
  
  }

};