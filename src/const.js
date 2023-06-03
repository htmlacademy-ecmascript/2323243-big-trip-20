const POINT_EMPTY = {
  basePrice: 0,
  dateFrom: null,
  dateTo: null,
  destination: null,
  isFavorite: false,
  offers: [],
  type: 'flight'
};

const DESCRIPTIONS = [
  'Moscow - the capital of Russia with a rich history and impressive architecture.',
  'Amsterdam - the city of canals, bicycles, and impressive museums.',
  'Chamonix - a picturesque ski resort surrounded by majestic Alps.',
  'Geneva - an international center of diplomacy with a beautiful lake and impressive fountains.',
  'Buenos Aires - the capital of Argentina, known for its tango, historic architecture, and rich culture.',
  'Paris - the city of love, famous for its iconic Eiffel Tower and beautiful boulevards.',
  'Dublin - the historical and cultural center of Ireland, where you can enjoy music and beer in cozy pubs.',
  'Wellington - the capital of New Zealand, nestled among scenic hills and washed by the ocean.',
  'Barcelona - the city of Gaudi, sun, and magnificent beaches, where Mediterranean culture and history blend.',
  'Los Angeles - the city of angels, the entertainment industry, and diversity, where you can encounter celebrities and enjoy beach relaxation.',
  'Bordeaux - the capital of wine, where you can taste exquisite French wines and admire beautiful architecture.'
];

const CITIES = [
  'Moscow',
  'Amsterdam',
  'Chamonix',
  'Geneva',
  'Buenos Aires',
  'Paris',
  'Dublin',
  'Wellington',
  'Barcelona',
  'Los Angeles',
  'Bordeaux'
];

const Duration = {
  HOUR: 2,
  DAY: 3,
  MIN: 45
};

const TYPES = [
  'taxi',
  'bus',
  'train',
  'ship',
  'drive',
  'flight',
  'check-in',
  'sightseeing',
  'restaurant'
];

const DEFAULT_TYPE = 'flight';

const FilterType = {
  EVERYTHING: 'everything',
  FUTURE: 'future',
  PRESENT: 'present',
  PAST: 'past'
};


export {
  POINT_EMPTY,
  DESCRIPTIONS,
  CITIES,
  Duration,
  TYPES,
  DEFAULT_TYPE,
  FilterType
};
