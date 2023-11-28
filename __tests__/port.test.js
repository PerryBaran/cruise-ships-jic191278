const Port = require('../src/port');

let port;

describe('Port Constructor', () => {
  beforeEach(() => {
    port = new Port('Dover');
  });

  test('can be instantiated', () => {
    expect(port).toBeInstanceOf(Object);
  });

  test('has a name', () => {
    expect(port).toHaveProperty('name');
    expect(port.name).toBe('Dover');
  });
});
