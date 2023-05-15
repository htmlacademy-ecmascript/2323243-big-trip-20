import RoutePoint from './routePoint';
import { getDestinationList } from '../mock/destination-data.js';

export default class DestinationsModel {
  getDestinationsList() {
    const destinations = getDestinationList();
    return destinations.map((destination) => {
      const { id, name, description, pictures } = destination;
      const routePoint = new RoutePoint(
        id,
        null,
        null,
        null,
        {
          name,
          description,
          pictures,
        },
        false,
        null,
        null
      );
      return routePoint;
    });
  }
}
