const Ship = require('../src/ship');
const Port = require('../src/port');

let port1;
let port2;
let itinerary;
let ship;

describe('SHIP', () => {
  describe('Constructor', () => {
    beforeEach(() => {
      port1 = new Port('port1');
      port2 = new Port('port2');
      itinerary = { ports: [port1, port2] };
      ship = new Ship(itinerary);
    });

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
      expect(port1.ships).toContain(ship);
    });
  });

  describe('Methods', () => {
    beforeEach(() => {
      port1 = new Port('port1');
      port2 = new Port('port2');
      itinerary = { ports: [port1, port2] };
      ship = new Ship(itinerary);
    });

    test('can set sail', () => {
      ship.setSail();

      expect(ship.currentPort).toBeFalsy();
      expect(ship.previousPort).toBe(port1);

      expect(port1.ships).not.toContain(ship);
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

      expect(port2.ships).toContain(ship);
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
