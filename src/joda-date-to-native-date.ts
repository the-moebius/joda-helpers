
import {convert} from 'js-joda';

import {JodaDate} from './joda-date.type';


export function jodaDateToNativeDate (jodaDate: JodaDate): Date {
  try {
    return convert(jodaDate).toDate();
  } catch (error) {
    console.warn('Failed to convert joda-date to native Date', error);
    return null;
  }
}
