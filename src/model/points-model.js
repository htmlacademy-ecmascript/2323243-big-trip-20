export default class PointsModel {

  #points = null;

  constructor(service) {
    this.#points = service.points;
  }

  get points() {
    return this.#points;
  }
}
