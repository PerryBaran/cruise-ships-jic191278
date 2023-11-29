const Ship = require('../src/ship');
const Port = require('../src/port');
const Itinerary = require('../src/itinerary');

let ship;
let dover;
let calais;
let intinerary;

describe('Ship Constructor', () => {
  beforeEach(() => {
    dover = new Port('Dover');
    calais = new Port('Calais');
    itinerary = new Itinerary([dover, calais]);
    ship = new Ship(itinerary);
  });

  test('can be instantiated', () => {
    expect(ship).toBeInstanceOf(Object);
  });

  test('has a starting port', () => {
    expect(ship).toHaveProperty('currentPort');
    expect(ship.currentPort.name).toBe('Dover');
  });

  test('has a previous port', () => {
    expect(ship.previousPort).toBe(null);
  });

  test('can set sail', () => {
    ship.setSail();

    expect(ship.currentPort).toBeFalsy();
    expect(ship.previousPort).toBe(dover);
  });

  test('can dock at a different port', () => {
    ship.dock();

    expect(ship.currentPort).toBe(calais);
  });
});
