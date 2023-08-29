import { FilterType } from '../const';
import { isPointFuture, isPointPresent, isPointPast} from './point.js';

const filter = {
  [FilterType.EVERYTHING]: (points) => [...points], // Возвращает все точки без изменений

  [FilterType.FUTURE]: (points) => points.filter((point) => isPointFuture(point)), // Возвращает только будущие точки:
  // [
  //   {
  //     id: 'point2',
  //     type: 'hotel',
  //     destination: 'destination2',
  //     basePrice: 800,
  //     dateFrom: '2023-06-27',
  //     dateTo: '2023-06-30',
  //     isFavorite: false,
  //     offers: []
  //   }
  // ]
  [FilterType.PRESENT]: (points) => points.filter((point) => isPointPresent(point)),
  [FilterType.PAST]: (points) => points.filter((point) => isPointPast(point))
};

export { filter };

