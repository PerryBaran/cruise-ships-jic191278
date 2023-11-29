class Ship {
  constructor(itinerary) {
    this.itinerary = itinerary;
    this.currentPort = itinerary.ports[0];
    this.previousPort = null;
  }

  setSail() {
    this.previousPort = this.currentPort;
    this.currentPort = null;
  }

  dock() {
    const currentPortIndex = itinerary.ports.indexOf(this.currentPort);
    this.currentPort = itinerary.ports[currentPortIndex + 1];
  }
}

module.exports = Ship;
