const Itinerary = require('../src/itinerary');

describe('PORT', () => {
  let itinerary;
  let ports;

  beforeEach(() => {
    ports = ['Dover', 'Calais'];
    itinerary = new Itinerary(ports);
  });

  describe('Constructor', () => {
    test('can be instantiated', () => {
      expect(itinerary).toBeInstanceOf(Object);
    });

    test('has properties', () => {
      expect(itinerary).toHaveProperty('ports');
      expect(itinerary.ports).toEqual(['Dover', 'Calais']);
    });
  });
});
