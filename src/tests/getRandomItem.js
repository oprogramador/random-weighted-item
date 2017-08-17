import expect from 'random-weighted-item/tests/expect';
import getRandomItem from 'random-weighted-item/getRandomItem';

const realMathRandom = Math.random;

describe('getRandomItem', () => {
  afterEach('revert Math.random', () => {
    Math.random = realMathRandom;
  });

  it('returns random weighted item by index', () => {
    const array = ['a', 'b', 'c', 'd'];
    const getWeight = (value, index) => index;

    Math.random = () => 0.01;
    expect(getRandomItem(array, getWeight)).to.equal('a');

    Math.random = () => 0.1;
    expect(getRandomItem(array, getWeight)).to.equal('b');

    Math.random = () => 0.2;
    expect(getRandomItem(array, getWeight)).to.equal('c');

    Math.random = () => 0.3;
    expect(getRandomItem(array, getWeight)).to.equal('c');

    Math.random = () => 0.4;
    expect(getRandomItem(array, getWeight)).to.equal('d');

    Math.random = () => 0.4;
    expect(getRandomItem(array, getWeight)).to.equal('d');

    Math.random = () => 0.5;
    expect(getRandomItem(array, getWeight)).to.equal('d');

    Math.random = () => 0.6;
    expect(getRandomItem(array, getWeight)).to.equal('d');

    Math.random = () => 0.7;
    expect(getRandomItem(array, getWeight)).to.equal('d');

    Math.random = () => 0.8;
    expect(getRandomItem(array, getWeight)).to.equal('d');

    Math.random = () => 0.9;
    expect(getRandomItem(array, getWeight)).to.equal('d');
  });

  it('returns random weighted item by value', () => {
    const array = [3, 7, 1, 4, 2];
    const getWeight = value => value;

    Math.random = () => 0.01;
    expect(getRandomItem(array, getWeight)).to.equal(3);

    Math.random = () => 0.1;
    expect(getRandomItem(array, getWeight)).to.equal(7);

    Math.random = () => 0.2;
    expect(getRandomItem(array, getWeight)).to.equal(7);

    Math.random = () => 0.3;
    expect(getRandomItem(array, getWeight)).to.equal(7);

    Math.random = () => 0.4;
    expect(getRandomItem(array, getWeight)).to.equal(7);

    Math.random = () => 0.5;
    expect(getRandomItem(array, getWeight)).to.equal(7);

    Math.random = () => 0.6;
    expect(getRandomItem(array, getWeight)).to.equal(7);

    Math.random = () => 0.7;
    expect(getRandomItem(array, getWeight)).to.equal(7);

    Math.random = () => 0.8;
    expect(getRandomItem(array, getWeight)).to.equal(7);

    Math.random = () => 0.9;
    expect(getRandomItem(array, getWeight)).to.equal(7);

    Math.random = () => 0.946;
    expect(getRandomItem(array, getWeight)).to.equal(1);

    Math.random = () => 0.95;
    expect(getRandomItem(array, getWeight)).to.equal(4);

    Math.random = () => 0.995;
    expect(getRandomItem(array, getWeight)).to.equal(2);
  });
});
