import AbstractStatefulView from '../framework/view/abstract-stateful-view.js';
import { createPointEditTemplate } from '../template/point-edit-template.js';
import { POINT_EMPTY } from '../const.js';
import dayjs from 'dayjs';

export default class PointEditView extends AbstractStatefulView {

  #pointDestinations = null;
  #pointOffers = null;
  #onSubmitClick = null;
  #onResetClick = null;

  constructor({ point = POINT_EMPTY, pointDestinations, pointOffers, onFormSubmit, onResetClick }) {
    super();

    this.#pointDestinations = pointDestinations;
    this.#pointOffers = pointOffers;

    this._setState(PointEditView.parsePointToState({ point }));

    this.#onSubmitClick = onFormSubmit;
    this.#onResetClick = onResetClick;

    this._restoreHandlers();
  }

  reset = (point) => this.updateElement({ point });

  _restoreHandlers() {
    this.element.querySelector('form')
      .addEventListener('submit', this.#formSubmitHandler);

    this.element.querySelector('.event__rollup-btn')
      .addEventListener('click', this.#resetButtonClickHandler);

    this.element.querySelector('.event__type-group')
      .addEventListener('change', this.#typeInputClick);

    this.element.querySelector('.event__input--destination')
      .addEventListener('change', this.#distinationInputChange);

    const offerBlock = this.element.querySelector('.event__available-offers');

    if (offerBlock) {
      offerBlock.addEventListener('change', this.#offerClickHandler);
    }

    this.element.querySelector('.event__input--price')
      .addEventListener('change', this.#priceInputChange);

     // Обработчик изменения времени начала
    this.element.querySelector('#event-start-time-1')
      .addEventListener('change', this.#startTimeInputChange);

    // Обработчик изменения времени окончания
    this.element.querySelector('#event-end-time-1')
      .addEventListener('change', this.#endTimeInputChange);
  }

  get template() {
    return createPointEditTemplate({
      state: this._state,
      pointDestination: this.#pointDestinations,
      pointOffers: this.#pointOffers
    });
  }

  #formSubmitHandler = (evt) => {
    evt.preventDefault();
    this.#onSubmitClick(PointEditView.parseStateToPoint(this._state));
  };

  #resetButtonClickHandler = (evt) => {
    evt.preventDefault();
    this.#onResetClick();
  };

  #typeInputClick = (evt) => {
    evt.preventDefault();

    this.updateElement({
      point: {
        ...this._state.point,
        type: evt.target.value,
        offers: []
      }
    });
  };

  #distinationInputChange = (evt) => {
    evt.preventDefault();

    const selectedDestination = this.#pointDestinations
      .find((pointDestination) => pointDestination.name === evt.target.value);

    const selectedDestinationId = (selectedDestination)
      ? selectedDestination.id
      : null;

    this.updateElement({
      point: {
        ...this._state.point,
        destination: selectedDestinationId
      }
    });
  };

  #offerClickHandler = (evt) => {
    evt.preventDefault();

    const checkedBoxes = Array.from(this.element.querySelectorAll('.event__offer-checkbox:checked'));

    this._setState({
      point: {
        ...this._state.point,
        offers: checkedBoxes.map((element) => element.dataset.offerId)
      }
    });
  };

  #priceInputChange = (evt) => {
    evt.preventDefault();

    this._setState({
      point: {
        ...this._state.point,
        basePrice: evt.target.value
      }
    });
  };

  #startTimeInputChange = (evt) => {
    evt.preventDefault();
    const startTimeValue = evt.target.value;
    console.log('Start time:', startTimeValue); // Отладочный вывод времени начала
    const endTimeValue = this._state.point.dateTo; // Получите текущее значение времени окончания
    console.log('End time:', endTimeValue); // Отладочный вывод времени окончания

    this._setState({
      point: {
        ...this._state.point,
        dateFrom: dayjs(startTimeValue, 'DD/MM/YY HH:mm').toDate(),
        // Добавьте проверку, чтобы предотвратить установку времени окончания раньше времени начала
        dateTo: dayjs(endTimeValue, 'DD/MM/YY HH:mm').isBefore(startTimeValue)
          ? dayjs(startTimeValue, 'DD/MM/YY HH:mm').toDate()
          : dayjs(endTimeValue, 'DD/MM/YY HH:mm').toDate(),
      },
    });
  };

  #endTimeInputChange = (evt) => {
    evt.preventDefault();
    const endTimeValue = evt.target.value;
    console.log('End time:', endTimeValue);
    const startTimeValue = this._state.point.dateFrom;
    console.log('Start time:', startTimeValue);

    this._setState({
      point: {
        ...this._state.point,
        dateTo: dayjs(endTimeValue, 'DD/MM/YY HH:mm').toDate(),
        dateFrom: dayjs(startTimeValue, 'DD/MM/YY HH:mm').isAfter(endTimeValue)
          ? dayjs(endTimeValue, 'DD/MM/YY HH:mm').toDate()
          : dayjs(startTimeValue, 'DD/MM/YY HH:mm').toDate(),
      },
    });
  };



  static parsePointToState = ({ point }) => ({ point });

  static parseStateToPoint = (state) => state.point;

}
