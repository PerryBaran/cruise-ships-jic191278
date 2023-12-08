const Ship = require('../src/ship');

describe('SHIP', () => {
  let port1;
  let port2;
  let itinerary;
  let ship;

  beforeEach(() => {
    port1 = {
      name: 'port1',
      ships: [],
      addShip: jest.fn(),
      removeShip: jest.fn(),
    };
    port2 = {
      name: 'port2',
      ships: [],
      addShip: jest.fn(),
      removeShip: jest.fn(),
    };
    itinerary = { ports: [port1, port2] };
    ship = new Ship(itinerary);
  });

  describe('Constructor', () => {
    test('can be instantiated', () => {
      expect(ship).toBeInstanceOf(Object);
    });

    test('has properties', () => {
      expect(ship).toHaveProperty('itinerary');
      expect(ship.itinerary).toBe(itinerary);

      expect(ship).toHaveProperty('currentPort');
      expect(ship.currentPort).toBe(port1);

      expect(ship).toHaveProperty('previousPort');
      expect(ship.previousPort).toBe(null);
    });

    test('gets added to port on instantiation', () => {
      expect(port1.addShip).toHaveBeenCalledWith(ship);
    });
  });

  describe('Methods', () => {
    test('can set sail', () => {
      ship.setSail();

      expect(ship.currentPort).toBeFalsy();
      expect(ship.previousPort).toBe(port1);

      expect(port1.ships).not.toContain(ship);

      expect(port1.removeShip).toHaveBeenCalledWith(ship);
    });

    test('cannot set sail if already sailing', () => {
      ship.setSail();

      expect(() => {
        ship.setSail();
      }).toThrow('Already sailing');
    });

    test('can dock', () => {
      ship.setSail();
      ship.dock();

      expect(ship.currentPort).toBe(port2);
      expect(ship.previousPort).toBe(port1);

      expect(port2.addShip).toHaveBeenCalledWith(ship);
    });

    test('cannot dock if already docked', () => {
      expect(() => {
        ship.dock();
      }).toThrow('Already docked');
    });

    test('cannot sail past end of itinerary', () => {
      ship.setSail();
      ship.dock();

      expect(() => {
        ship.setSail();
      }).toThrow('End of itinerary reached');
    });
  });
});
