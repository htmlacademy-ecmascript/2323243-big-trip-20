import AbstractView from '../framework/view/abstract-view.js';


const createEventListTemlpate = () => '<ul class="trip-events__list">';

export default class EventListView extends AbstractView {
  get template() {
    return createEventListTemlpate();
  }

  getElement() {
    const element = document.createElement('div');
    element.innerHTML = this.template;
    return element.firstChild;

  }
}
