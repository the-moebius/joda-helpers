
import { expect } from 'chai';
import { ZonedDateTime } from 'js-joda';

import { jodaDateToNativeDate } from '../src/functions/joda-date-to-native-date';


describe('jodaDateToNativeDate()', function () {

  it('should convert ZonedDateTime to native Date', function () {

    expect(jodaDateToNativeDate(ZonedDateTime.now()))
      .to.be.instanceOf(Date)
    ;

  });

});
