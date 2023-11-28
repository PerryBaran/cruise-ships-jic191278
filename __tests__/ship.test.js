/* globals describe test expect */

const Ship = require('../src/ship');

let ship;

describe('Ship Constructor', () => {
  beforeAll(() => {
    ship = new Ship('Dover');
  });

  test('can be instantiated', () => {
    expect(ship).toBeInstanceOf(Object);
  });

  test('has a starting port', () => {
    expect(ship).toHaveProperty('currentPort');
    expect(ship.currentPort).toBe('Dover');
  });
});
