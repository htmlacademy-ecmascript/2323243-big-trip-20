import { generateDestination } from '../mock/destination.js';
import { generatePoint } from '../mock/point.js';
import { generateOffer } from '../mock/offers.js';

import { getRandomInteger, getRandomArrayElement } from '../utils/common.js';
import { TYPES } from '../const.js';

export default class MockService {
  #destinations = [];
  #offers = [];
  #points = [];

  constructor() {
    this.#destinations = this.#generateDestinations();
    this.#offers = this.#generateOffers();
    this.#points = this.#generatePoints();
  }

  get destinations() {
    return this.#destinations;
  }

  get offers() {
    return this.#offers;
  }

  get points() {
    return this.#points;
  }

  #generateDestinations() {
    return Array.from({ length: 25 },
      () => generateDestination()
    );
  }
  /* [
    {
      id: '5df902c7-72af-4e3c-ba3e-7a9c9e4351b9',
      description: 'Moscow - the capital of Russia with a rich history and impressive architecture.',
      name: 'Moscow',
      pictures: [
        {
          src: 'https://loremflickr.com/248/152?random=42.jpg',
          description: 'Moscow - the capital of Russia with a rich history and impressive architecture.'
        },
        {
          src: 'https://loremflickr.com/248/152?random=87.jpg',
          description: 'Moscow - the capital of Russia with a rich history and impressive architecture.'
        },
        // Дополнительные изображения...
      ]
    },
    {
      id: '7b7dce15-4c11-4318-a59b-5df2de6e7aaf',
      description: 'Amsterdam - the city of canals, bicycles, and impressive museums.',
      name: 'Amsterdam',
      pictures: [
        {
          src: 'https://loremflickr.com/248/152?random=19.jpg',
          description: 'Amsterdam - the city of canals, bicycles, and impressive museums.'
        },
        {
          src: 'https://loremflickr.com/248/152?random=76.jpg',
          description: 'Amsterdam - the city of canals, bicycles, and impressive museums.'
        },
        // Дополнительные изображения...
      ]
    },
    // Дополнительные элементы...
  ]
 */

  #generateOffers() {
    return TYPES.map((type) => ({
      type,
      offers: Array.from({ length: getRandomInteger(0, 5) }, () => generateOffer(type))
    }));
  }
  /*   [
    { type: 'taxi', offers: [
      { id: 'offer1', title: 'Offer taxi1', price: 100 },
      { id: 'offer2', title: 'Offer taxi2', price: 75 },
      { id: 'offer3', title: 'Offer taxi3', price: 120 }
    ] },
    { type: 'bus', offers: [
      { id: 'offer4', title: 'Offer bus1', price: 80 },
      { id: 'offer5', title: 'Offer bus2', price: 90 }
    ] },
    { type: 'train', offers: [] },
    { type: 'ship', offers: [
      { id: 'offer6', title: 'Offer ship1', price: 110 },
      { id: 'offer7', title: 'Offer ship2', price: 65 },
      { id: 'offer8', title: 'Offer ship3', price: 140 }
    ] },
    { type: 'drive', offers: [] },
    { type: 'flight', offers: [
      { id: 'offer9', title: 'Offer flight1', price: 60 }
    ] },
    { type: 'check-in', offers: [
      { id: 'offer10', title: 'Offer check-in1', price: 95 },
      { id: 'offer11', title: 'Offer check-in2', price: 105 },
      { id: 'offer12', title: 'Offer check-in3', price: 130 }
    ] },
    { type: 'sightseeing', offers: [] },
    { type: 'restaurant', offers: [
      { id: 'offer13', title: 'Offer restaurant1', price: 70 },
      { id: 'offer14', title: 'Offer restaurant2', price: 85 }
    ] }
  ] */


  #generatePoints() {
    return Array.from({ length: 5 }, () => {
      const type = getRandomArrayElement(TYPES); // flight
      const destination = getRandomArrayElement(this.#destinations);
      /* {
        id: '5df902c7-72af-4e3c-ba3e-7a9c9e4351b9',
        description: 'Moscow - the capital of Russia with a rich history and impressive architecture.',
        name: 'Moscow',
        pictures: [
          {
            src: 'https://loremflickr.com/248/152?random=42.jpg',
            description: 'Moscow - the capital of Russia with a rich history and impressive architecture.'
          },
          {
            src: 'https://loremflickr.com/248/152?random=87.jpg',
            description: 'Moscow - the capital of Russia with a rich history and impressive architecture.'
          },
          // Дополнительные изображения...
        ]
      } */
      const hasOffers = getRandomInteger(0, 1);

      const offersByType = this.#offers
        .find((offerByType) => offerByType.type === type); // { type: 'check-in', offers: [{ id: 'offer1' }, { id: 'offer2' }, { id: 'offer3' }] };

      const offerIds = (hasOffers) ? offersByType.offers
        .map((offer) => offer.id)
        : []; //['offer1', 'offer2', 'offer3']
      return generatePoint(type, destination.id, offerIds);
    });
  }
  /* [
  {
    id: '48d0d5f8-8c4c-4fd7-a9ad-20e0df5b697b',
    type: 'flight',
    destination: '5df902c7-72af-4e3c-ba3e-7a9c9e4351b9',
    basePrice: 1200,
    dateFrom: '2023-06-25',
    dateTo: '2023-06-30',
    isFavorite: true,
    offers: ['offer1']
  },
  {
    id: 'f35fe3c4-76c0-4b0e-aa7d-974af5d828ad',
    type: 'check-in',
    destination: '7b7dce15-4c11-4318-a59b-5df2de6e7aaf',
    basePrice: 800,
    dateFrom: '2023-07-05',
    dateTo: '2023-07-10',
    isFavorite: false,
    offers: ['offer2', 'offer3']
  },
  // Дополнительные точки назначения...
] */

}

