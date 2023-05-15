import { getTripPoints } from '../mock/point-data.js';
import RoutePoint from '../model/routePoint.js';

export default class TripPointsModel {
  getPoints() {
    const tripPoints = getTripPoints();
    const result = tripPoints.map((tripPoint) => new RoutePoint(tripPoint.id, tripPoint.basePrice, tripPoint.dateFrom, tripPoint.dateTo, tripPoint.destination, tripPoint.isFavorite, tripPoint.offers, tripPoint.type));
    return result;
  }
}

