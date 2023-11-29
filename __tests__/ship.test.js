const Ship = require('../src/ship');
const Port = require('../src/port');
const Itinerary = require('../src/itinerary');

let ship;
let dover;
let calais;
let itinerary;

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
    expect(ship.currentPort).toBe(dover);
  });

  test('has a previous port', () => {
    expect(ship.previousPort).toBe(null);
  });

  test('can set sail', () => {
    ship.setSail();

    expect(ship.currentPort).toBeFalsy();
    expect(ship.previousPort).toBe(dover);
  });

  test('cannot sail past end of itinerary', () => {
    ship.setSail();
    ship.dock();

    expect(() => {
      ship.setSail();
    }).toThrowError('End of itinerary reached');
  });

  test('can dock at a different port', () => {
    ship.setSail();
    ship.dock();

    expect(ship.currentPort).toBe(calais);
  });
});
