const Itinerary = require('../src/itinerary');

describe('ITINERARY', () => {
  let itinerary;
  let ports;

  beforeEach(() => {
    ports = jest.fn();
    itinerary = new Itinerary(ports);
  });

  describe('Constructor', () => {
    test('can be instantiated', () => {
      expect(itinerary).toBeInstanceOf(Object);
    });

    test('has properties', () => {
      expect(itinerary).toHaveProperty('ports');
      expect(itinerary.ports).toBe(ports);
    });
  });
});
