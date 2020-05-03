
import { ZonedDateTime } from 'js-joda';

import { JodaDate } from '../joda-date';


export function toIsoString(date: JodaDate): string {

  if (date instanceof ZonedDateTime) {
    date = date.withFixedOffsetZone();
  }

  return date.toString();

}
