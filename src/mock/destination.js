import { getRandomArrayElement, getRandomInteger } from '../utils/common.js';
import { DESCRIPTIONS, CITIES } from '../const.js';

const PICTURES_COUNT = 5;


function generateDestinationPics() {
  return {
    src: `https://loremflickr.com/248/152?random=${getRandomInteger(1, 100)}.jpg`,
    description: getRandomArrayElement(DESCRIPTIONS)
  };
}
/* {
  src: 'https://loremflickr.com/248/152?random=42.jpg',
  description: 'Moscow - the capital of Russia with a rich history and impressive architecture.'
} */

function generateDestination() {
  return {
    id: crypto.randomUUID(),
    description: getRandomArrayElement(DESCRIPTIONS),
    name: getRandomArrayElement(CITIES),
    pictures: Array.from({ length: PICTURES_COUNT }, generateDestinationPics)
  };

}

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

export { generateDestination };
