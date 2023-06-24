import { filter } from '../utils/filter.js';

function generateFilters(points) {
  return Object.entries(filter) /* [
    [FilterType.EVERYTHING, (points) => [...points]],
    [FilterType.FUTURE, (points) => points.filter((point) => isPointFuture(point))],
    [FilterType.PRESENT, (points) => points.filter((point) => isPointPresent(point))],
    [FilterType.PAST, (points) => points.filter((point) => isPointPast(point))]
  ]
   */
    .map(([filterType, filterPoints]) => ({ //значения извлекаются из filter
      type: filterType,
      hasPoints: filterPoints(points).length > 0,
    }),
    );
}
/* [
  { type: 'everything', hasPoints: true },
  { type: 'future', hasPoints: true },
  { type: 'present', hasPoints: true },
  { type: 'past', hasPoints: false }
] */

export { generateFilters };


