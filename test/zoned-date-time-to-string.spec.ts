
import { expect } from 'chai';
import { ZonedDateTime, ZoneOffset } from 'js-joda';

import { zonedDateTimeToString } from '../src/functions/zoned-date-time-to-string';


describe('zonedDateTimeToString()', function () {

  it('should return compatible ISO:8601 string with ZoneOffset', function () {

    const date = ZonedDateTime.of(1989, 8, 16, 21, 30, 0, 0, ZoneOffset.ofHours(3));

    expect(zonedDateTimeToString(date)).to.equal('1989-08-16T18:30:00.000Z');

  });

});
