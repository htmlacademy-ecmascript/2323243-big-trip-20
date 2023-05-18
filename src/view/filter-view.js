import AbstractView from '../framework/view/abstract-view.js';

const createFilterTemlpate = (filters) =>
  `<form class="trip-filters" action="#" method="get">
    ${filters.map((filter) => `
      <div class="trip-filters__filter">
        <input id="filter-${filter.value}" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="${filter.value}" ${filter.checked ? 'checked' : ''}>
        <label class="trip-filters__filter-label" for="filter-${filter.value}">${filter.label}</label>
      </div>
    `).join('')}
    <button class="visually-hidden" type="submit">Accept filter</button>
  </form>`;

export default class FilterView extends AbstractView {
  constructor(filters) {
    super();
    this.filters = filters;
  }

  get template() {
    return createFilterTemlpate(this.filters);
  }
}
