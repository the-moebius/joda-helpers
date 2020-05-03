
import { convert } from 'js-joda';

import { JodaDate } from '../joda-date.type';
import { DateConversionError } from '../errors/date-conversion-error';


export function jodaDateToNativeDate(jodaDate: JodaDate): Date {
  try {
    return convert(jodaDate).toDate();

  } catch (error) {
    throw new DateConversionError(
      `Failed to convert joda-date to native Date: ${error.toString()}`
    );
  }
}
