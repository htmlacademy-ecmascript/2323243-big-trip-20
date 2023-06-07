import { generateFilters } from '../mock/filter.js';
import { render } from '../framework/render.js';
import FilterView from '../view/fillters-view.js';

export default class FilterPresenter {

  #filterContainer = null;
  #filters = [];

  constructor({ filterContainer, pointsModel }) {
    this.#filterContainer = filterContainer;
    this.#filters = generateFilters(pointsModel.points);
  }

  init() {
    render(new FilterView(this.#filters), this.#filterContainer);
  }
}
