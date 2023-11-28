const Ship = require('../src/ship');
const Port = require('../src/port');

let ship;
let dover;
let calais;

describe('Ship Constructor', () => {
  beforeEach(() => {
    dover = new Port('Dover');
    calais = new Port('Calais');
    ship = new Ship(dover);
  });

  test('can be instantiated', () => {
    expect(ship).toBeInstanceOf(Object);
  });

  test('has a starting port', () => {
    expect(ship).toHaveProperty('currentPort');
    expect(ship.currentPort).toBeInstanceOf(Port);
    expect(ship.currentPort.name).toBe('Dover');
  });

  test('can set sail', () => {
    ship.setSail();

    expect(ship.currentPort).toBeFalsy();
  });

  test('can dock at a different port', () => {
    ship.dock(calais);

    expect(ship.currentPort).toBeInstanceOf(Port);
    expect(ship.currentPort.name).toBe('Calais');
  });
});
