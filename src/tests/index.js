import expect from 'random-weighted-item/tests/expect';
import getRandomItem from 'random-weighted-item';

describe('index', () => {
  it('returns getRandomItem as default', () => {
    expect(getRandomItem).to.be.a('function');
  });
});

