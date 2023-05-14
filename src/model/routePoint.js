export default class RoutePoint {
  constructor(id, basePrice, dateFrom, dateTo, destination, isFavorite, offers, type) {
    this.id = id;
    this.basePrice = basePrice;
    this.dateFrom = dateFrom;
    this.dateTo = dateTo;
    this.destination = destination;
    this.isFavorite = isFavorite;
    this.offers = offers;
    this.type = type;
  }
}
