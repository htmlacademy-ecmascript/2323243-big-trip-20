import EventInfoPresenter from './presenter/event-info-presenter.js';
import FilterPresenter from './presenter/filter-presenter.js';
import EventListPresenter from './presenter/event-list-presenter.js';

const eventInfoElement = document.querySelector('.trip-main');
const filterElement = document.querySelector('.trip-controls__filters');
const filters = [/* массив фильтров */];
const eventListElement = document.querySelector('.trip-events');

const eventInfoPresenter = new EventInfoPresenter(
  {container: eventInfoElement}
);

const filterPresenter = new FilterPresenter({
  container: filterElement,
  filters: filters
});

const eventListPresenter = new EventListPresenter(
  {container: eventListElement}
);

eventInfoPresenter.init();
filterPresenter.init();
eventListPresenter.init();
