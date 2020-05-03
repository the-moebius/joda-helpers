
import { expect } from 'chai';

import { JodaComparator } from '../src/joda-comparator';
import { LocalDate, LocalDateTime, ZonedDateTime } from 'js-joda';


describe('JodaComparator', function () {

  describe('isBefore', function () {

    it('should be present', function () {

      expect(JodaComparator.isBefore).to.be.a('function');

    });

    it('should compare local dates correctly', function () {

      const date1 = LocalDate.parse('1989-08-16');
      const date2 = LocalDate.parse('2001-01-01');

      expect(JodaComparator.isBefore(date1, date2)).to.equal(true);
      expect(JodaComparator.isBefore(date2, date1)).to.equal(false);

    });

    it('should compare local dates with time correctly', function () {

      const date1 = LocalDateTime.parse('1989-08-16T17:30:00');
      const date2 = LocalDateTime.parse('1989-08-16T21:00:00');

      expect(JodaComparator.isBefore(date1, date2)).to.equal(true);
      expect(JodaComparator.isBefore(date2, date1)).to.equal(false);

    });

    it('should compare zoned dates with time correctly', function () {

      const date1 = ZonedDateTime.parse('1989-08-16T21:00:00+03:00');
      const date2 = ZonedDateTime.parse('1989-08-16T21:00:00Z');

      expect(JodaComparator.isBefore(date1, date2)).to.equal(true);
      expect(JodaComparator.isBefore(date2, date1)).to.equal(false);

    });

    it('should compare local date with local date and time correctly', function () {

      const date1 = LocalDate.parse('1989-08-16');
      const date2 = LocalDateTime.parse('1989-08-16T21:00:00');

      expect(JodaComparator.isBefore(date1, date2)).to.equal(true);
      expect(JodaComparator.isBefore(date2, date1)).to.equal(false);

    });

    it('should compare local date with zoned date and time correctly', function () {

      const date1 = LocalDate.parse('1989-08-16');
      const date2 = ZonedDateTime.parse('1989-08-16T00:00:00-03:00');

      expect(JodaComparator.isBefore(date1, date2)).to.equal(true);
      expect(JodaComparator.isBefore(date2, date1)).to.equal(false);

    });

    // @todo: cover all cases

  });

  describe('isAfter', function () {

    it('should be present', function () {

      expect(JodaComparator.isAfter).to.be.a('function');

    });

    it('should compare local dates correctly', function () {

      const date1 = LocalDate.parse('1989-08-16');
      const date2 = LocalDate.parse('2001-01-01');

      expect(JodaComparator.isAfter(date2, date1)).to.equal(true);
      expect(JodaComparator.isAfter(date1, date2)).to.equal(false);

    });

    // @todo: cover all cases

  });


  describe('isEqual', function () {

    it('should be present', function () {

      expect(JodaComparator.isEqual).to.be.a('function');

    });

    it('should compare local dates correctly', function () {

      const date1 = LocalDate.parse('1989-08-16');
      const date2 = LocalDate.parse('1989-08-16');
      const date3 = LocalDate.parse('2001-01-01');

      expect(JodaComparator.isEqual(date1, date2)).to.equal(true);
      expect(JodaComparator.isEqual(date1, date3)).to.equal(false);
      expect(JodaComparator.isEqual(date2, date3)).to.equal(false);

    });

    // @todo: cover all cases

  });

  describe('isBetween', function () {

    it('should be present', function () {

      expect(JodaComparator.isBetween).to.be.a('function');

    });

    it('should compare zoned date times correctly', function () {

      const now = ZonedDateTime.now();
      const date = now;
      const startDate = now;
      const endDate = ZonedDateTime.now().plusDays(1);

      expect(JodaComparator.isBetween(date, startDate, endDate)).to.equal(true);

    });

    // @todo: cover all cases

  });

});
