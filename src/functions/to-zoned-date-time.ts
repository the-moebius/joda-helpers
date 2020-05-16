
import { LocalDate, LocalDateTime, ZonedDateTime, ZoneId } from 'js-joda';

import { JodaDate } from '../joda-date';


export function toZonedDateTime(
  date: JodaDate,
  zone?: ZoneId

): ZonedDateTime {

  zone = (zone || ZoneId.systemDefault());

  if (date instanceof ZonedDateTime) {
    return date;

  } else if (date instanceof LocalDateTime) {
    return date.atZone(zone);

  } else if (date instanceof LocalDate) {
    return date.atStartOfDayWithZone(zone);

  } else {
    throw new Error(`Specified date has incorrect format`);

  }

}
