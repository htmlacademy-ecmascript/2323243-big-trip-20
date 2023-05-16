export class TripModel {   
  constructor(data) {
    this.type = data.type;
    this.offers = [];

    for (let i = 0; i < data.offers.length; i++) {
      const offer = data.offers[i];
      this.offers.push(new OfferModel(offer));
    }
  }
}