
import {expect} from 'chai';

import {JodaComparator} from '../src/joda-comparator';
import {LocalDate, LocalDateTime, ZonedDateTime} from 'js-joda';
import {jodaDateToNativeDate} from '../src/joda-date-to-native-date';


describe('jodaDateToNativeDate()', function () {

  it.only('converts local dates', function () {

    console.log(jodaDateToNativeDate(LocalDate.of(1989, 8, 16)));

    // expect(JodaComparator.isBefore).to.be.a('function');

  });

});
