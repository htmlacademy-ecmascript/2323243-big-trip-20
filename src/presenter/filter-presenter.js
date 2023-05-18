import FilterView from '../view/filter-view.js';
import {render} from '../framework/render.js';
export default class FilterPresenter {
  constructor({ container, filters }) {
    this.container = container;
    this.filters = filters;
  }

  init() {
    render(new FilterView(this.filters), this.container);
  }
}
