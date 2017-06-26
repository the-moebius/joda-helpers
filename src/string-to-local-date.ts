
import {LocalDate} from 'js-joda';


export function stringToLocalDate (dateString: string): LocalDate {

  try {
    const date = new Date(
      Date.parse(dateString)
    );
    return LocalDate.of(
      date.getFullYear(),
      date.getMonth() + 1,
      date.getDate()
    );
  } catch (error) {
    console.warn('Failed to convert ISO8601 string to LocalDate', error);
    return null;
  }

}
