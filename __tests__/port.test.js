const Port = require('../src/port');

let port;
let ship1;
let ship2;

describe('PORT', () => {
  describe('Constructor', () => {
    beforeEach(() => {
      port = new Port('Dover');
    });

    test('can be instantiated', () => {
      expect(port).toBeInstanceOf(Object);
    });

    test('has properties', () => {
      expect(port).toHaveProperty('name');
      expect(port.name).toBe('Dover');

      expect(port).toHaveProperty('ships');
      expect(port.ships).toEqual([]);
    });
  });

  describe('Methods', () => {
    beforeEach(() => {
      port = new Port('Dover');
      ship1 = 'Ship One';
      ship2 = 'Ship Two';
    });

    test('can add ship', () => {
      port.addShip(ship1);

      expect(port.ships).toEqual([ship1]);
    });

    test('can remove ship', () => {
      port.addShip(ship1);
      port.addShip(ship2);

      port.removeShip(ship1);

      expect(port.ships).toEqual([ship2]);
      expect(port.ships).not.toContain(ship1);
    });
  });
});
