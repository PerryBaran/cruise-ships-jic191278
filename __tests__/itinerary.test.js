const Itinerary = require('../src/itinerary');

let itinerary;
let ports;

describe('PORT', () => {
  describe('Constructor', () => {
    beforeEach(() => {
      ports = ['Dover', 'Calais'];
      itinerary = new Itinerary(ports);
    });

    test('can be instantiated', () => {
      expect(itinerary).toBeInstanceOf(Object);
    });

    test('has properties', () => {
      expect(itinerary).toHaveProperty('ports');
      expect(itinerary.ports).toEqual(['Dover', 'Calais']);
    });
  });
});
