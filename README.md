# @moebius/joda-helpers

[![npm version](https://badge.fury.io/js/%40moebius%2Fjoda-helpers.svg)](https://badge.fury.io/js/%40moebius%2Fjoda-helpers)


This package provides a small collection of useful helpers for [js-joda][js-joda].

## Features

- Various dates comparison with configurable tolerance
- Written in TypeScript and provides type declarations
- Distributed in both CommonJS and ESM formats


## Installation

Install package with npm:

`npm i -S @moebius/joda-helpers`


## API

### `isEqual(date1, date2, options: { tolerance })`

Checks if `date1` is equal to `date2` with optional tolerance.


### `isBefore(date1, date2, options: { tolerance })`

Checks if `date1` is before `date2` with optional tolerance.


### `isAfter(date1, date2, options: { tolerance })`

Checks if `date1` is after `date2` with optional tolerance.


### `isBeforeOrEqual(date1, date2, options: { tolerance })`

Checks if `date1` is before or equal to `date2` with optional tolerance.


### `isAfterOrEqual(date1, date2, options: { tolerance })`

Checks if `date1` is after or equal to `date2` with optional tolerance.


### `isBetween(options: { date, startDate, endDate, tolerance })`

Checks if `date` is between `startDate` and `endDate` with optional tolerance.


### `* tolerance: { units: ChronoUnit, value: number }`

Optional `tolerance` configuration property allows to specify date comparison
tolerance, e.g.: `{ units: ChronoUnit.MINUTES, value: 15 }`. If passed to e.g.
`isEqual()` function, it will compare two dates in range of `+/- 15 minutes`.


## Support

If you like this library please add a star on this [GitHub repository][repo-gh].

Commercial support and consulting is available, [contact me](mailto:slava@fomin.io).

Thank you!


## License

The MIT License (MIT)

Copyright ⓒ 2017—2020 Slava Fomin II, MOEBIUS FOUNDATION.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.


  [repo-gh]: https://github.com/moebiusmlm/joda-helpers
  [js-joda]: https://github.com/js-joda/js-joda
