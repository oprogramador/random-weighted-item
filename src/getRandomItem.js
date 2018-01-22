const _ = require('lodash');

function getRandomItem(array, getWeight) {
  const weights = array.map((value, index) => Math.exp(getWeight(value, index)));
  const sum = _.sum(weights);
  const alignedWeights = weights.map(weight => weight / sum);
  const probabilities = alignedWeights.reduce(
    (accumulator, value) => [...accumulator, (_.last(accumulator) || 0) + value],
    []
  );
  const random = Math.random();

  return array[_.findIndex(probabilities, probability => random < probability)];
}

export default getRandomItem;
