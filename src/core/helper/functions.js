import { _t } from "./i18n"
import urlRegex from 'url-regex'

import rainy from '../../assets/rainy.png'
import sunny from '../../assets/sunny.png'
import clouds from '../../assets/clouds.png'

export const decimalAdjust = (type, value, exp) => {
    if (typeof exp === 'undefined' || +exp === 0) {
      return Math[type](value);
    }
    value = +value;
    exp = +exp;
    if (isNaN(value) || !(typeof exp === 'number' && exp % 1 === 0)) {
      return NaN;
    }
    value = value.toString().split('e');
    value = Math[type](+(value[0] + 'e' + (value[1] ? (+value[1] - exp) : -exp)));
    value = value.toString().split('e');
    return +(value[0] + 'e' + (value[1] ? (+value[1] + exp) : exp));
  }

export const getImage = (state) => {
  switch(state){
    case 'Rain': return rainy; break;
    case 'Clouds': return clouds; break;
    default: return clouds; break;
  }
}