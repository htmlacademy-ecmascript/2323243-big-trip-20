// import { util } from '../util.js';
// import { CONST_DATA } from './const-data.js';
// import RoutePoint from '../model/routePoint.js';

// const getOffer = (offerTitle) => {
//   const newOffer = {
//     id: util.getUniqId(),
//     title: offerTitle,
//     price: util.getRandomPrice()
//   };
//   return new RoutePoint(
//     newOffer.id,
//     newOffer.price,
//     null,
//     null,
//     {
//       name: newOffer.title,
//       description: '',
//       pictures: []
//     },
//     false,
//     null,
//     null
//   );
// };

// const getOffers = () => {
//   const newOffers = [];
//   for (let i = 0; i < util.getRandomCount(CONST_DATA.offers.length); i++) {
//     newOffers[i] = getOffer(CONST_DATA.offers[i]);
//   }
//   return newOffers;
// };


// const getAllOffers = () => {
//   const allOffers = [];
//   for (let i = 0; i < util.getRandomCount(CONST_DATA.countLimit); i++) {
//     allOffers[i] = {
//       type: util.getRandomArrayElement(CONST_DATA.typeOffers),
//       offers: getOffers()
//     };
//   }

//   return allOffers.map((offer) => {
//     const { type, offers: subOffers } = offer;
//     return new RoutePoint(
//       util.getUniqId(),
//       null,
//       null,
//       null,
//       {
//         name: '',
//         description: '',
//         pictures: []
//       },
//       false,
//       subOffers,
//       type
//     );
//   });
// };


// const offers = getAllOffers();
// const getOffersId = (type) => {
//   const id = [];
//   offers.forEach((offer) => {
//     if (offer.type === type) {
//       offer.offers.forEach((element) => id.push(element.id));
//     }
//   });
//   return id;
// };

// const getOffersList = () => offers;

// export { getOffersId , getOffersList };
