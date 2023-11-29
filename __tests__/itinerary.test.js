/* globals */

const Itinerary = require('../src/itinerary');
const Port = require('../src/port');

let itinerary;
let dover;
let calais;
let ports;

describe('Port Constructor', () => {
  beforeEach(() => {
    dover = new Port('Dover');
    calais = new Port('Calais');
    ports = [dover, calais];
    itinerary = new Itinerary(ports);
  });

  test('can be instantiated', () => {
    expect(itinerary).toBeInstanceOf(Object);
  });

  test('has a ports property', () => {
    expect(itinerary.ports).toEqual([dover, calais]);
  });
});
