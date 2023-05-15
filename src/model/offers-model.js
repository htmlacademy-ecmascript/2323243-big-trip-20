import { getOffersList } from '../mock/offers-data.js';
import RoutePoint from '../model/routePoint.js';
export default class OffersModel {
  getOffersList() {
    const offers = getOffersList();
    return offers.map((offer) => {
      const { id, title, price, type, offers: subOffers } = offer;
      return new RoutePoint(
        id,
        price,
        null,
        null,
        null,
        false,
        subOffers,
        type
      );
    });
  }
}

