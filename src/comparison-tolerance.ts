
import { ChronoUnit } from 'js-joda';


export interface ComparisonTolerance {
  units: ChronoUnit;
  value: number;
}
