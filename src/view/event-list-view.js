import AbstractView from '../framework/view/abstract-view.js';
import { createElement } from '../framework/render.js';


const createEventListTemlpate = () => '<ul class="trip-events__list">';

export default class EventListView extends AbstractView {
  get template() {
    return createEventListTemlpate();
  }

  getElement() {
    if(!this.element) {
      this.element = createElement(this.template);
    }
    return this.element;
  }
}
