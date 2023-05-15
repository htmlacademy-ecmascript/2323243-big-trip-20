import { getRandomPeriod, util } from '../util.js';
import { CONST_DATA } from './const-data.js';
import { getOffersList, getOffersId } from './offers-data.js';
import { destinationList, getDestinationId } from './destination-data.js';
import RoutePoint from '../model/routePoint.js';

const getNewTripPoint = () => {
  const randomPeriod = getRandomPeriod();
  const typePoint = util.getRandomArrayElement(getOffersList()).type;
  const city = util.getRandomArrayElement(destinationList).name;
  const tripPoint = {
    id: util.getUniqId(),
    basePrice: util.getRandomPrice(),
    dateFrom: randomPeriod[0],
    dateTo: randomPeriod[1],
    destination: getDestinationId(city),
    isFavorite: util.getRandomBooleanValue(),
    offers: [
      getOffersId(typePoint)
    ],
    type: typePoint
  };
  const routePoint = new RoutePoint(tripPoint);
  return routePoint;
};

const getTripPoints = () => {
  const tripPoints = [];
  for (let i = 0; i < util.getRandomCount(CONST_DATA.countLimit); i++) {
    tripPoints.push(getNewTripPoint());
  }
  return tripPoints;
};

export { getTripPoints, getNewTripPoint };

