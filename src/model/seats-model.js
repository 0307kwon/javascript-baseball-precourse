import Seat from "./object/Seat.js";

export default class SeatsModel {
  constructor(number) {
    this.seats = new Array(number).fill(0).map((seat, index) => {
      return new Seat(index);
    });
  }
  getSeats() {
    return this.seats;
  }
}
