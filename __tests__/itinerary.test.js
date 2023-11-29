/* globals */

const Itinerary = require('../src/itinerary');
const Port = require('../src/port');

let itinerary;
let ports;

describe('Port Constructor', () => {
  beforeEach(() => {
    ports = [];
    itinerary = new Itinerary(ports);
  });

  test('can be instantiated', () => {
    expect(itinerary).toBeInstanceOf(Object);
  });

  test('has a ports property', () => {
    expect(itinerary.ports).toEqual([]);
  });
});
