# random-weighted-item

[![MIT License](https://img.shields.io/badge/license-mit-green.svg?style=flat-square)](https://opensource.org/licenses/MIT)
[![Build Status](https://travis-ci.com/oprogramador/random-weighted-item.svg?branch=master)](https://travis-ci.com/oprogramador/random-weighted-item
)

[![NPM status](https://nodei.co/npm/random-weighted-item.png?downloads=true&stars=true)](https://npmjs.org/package/random-weighted-item
)

JavaScript library to get random item from an array by probability function. The probability function takes the current value and the current index respectively as arguments. The real probability to obtain a particular item is `Math.exp(probabilityFunctionReturnedValue)`.

## install
`npm install --save random-weighted-item`

## usage
```js
const getRandomItem = require('random-weighted-item').default;

const array = [3, 7, 1, 4, 2];
const getWeight = value => value;
getRandomItem(array, getWeight);
```
for other examples see https://github.com/oprogramador/random-weighted-item/blob/master/src/tests/getRandomItem.js
