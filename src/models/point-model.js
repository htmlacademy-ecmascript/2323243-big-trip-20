import {generateDestination} from "../mock/generateMockData.js"
import {DestinationModel} from "./destination-model.js"

export class PointmModel {
  // В конструкторе указываем поля, которые будут в точке маршрута
  // Обрати внимание, что при редактировании формы содания, у тебя поля id будет null
  constructor(data) {
    this.id = data.id
    this.basePrice = data.base_price;
    this.dateFrom = new Date(data.date_from);
    this.dateTo = new Date(data.date_to);
    this.destination = data.destination;
    this.isFavorite = data.is_favorite;
    this.offers = data.offers;
    this.type = data.type;
  }

  // Здесь указываем геттеры для вьюшек
  get day() {
    return `
      ${this.dateFrom.toLocaleString('default', { month: 'long' }).substring(0, 3)} ${this.dateFrom.getDate()}
    `;
  }

  get pointTitle() {
    const dest = DestinationModel.fromJSON(generateDestination());
    return `${this.type} ${dest.name}`
  }

  get timeFrom() {
    const hours = this.dateFrom.getHours().toString().padStart(2, '0');
    const minutes = this.dateFrom.getMinutes().toString().padStart(2, '0');
    return `${hours}:${minutes}`;
  }

  get timeTo() {
    const hours = this.dateTo.getHours().toString().padStart(2, '0');
    const minutes = this.dateTo.getMinutes().toString().padStart(2, '0');
    return `${hours}:${minutes}`;
  }

  get pointDuration() {
    const duration = this.dateTo.getTime() - this.dateFrom.getTime();
    const minutes = Math.floor(duration / (1000 * 60) % 60).toString().padStart(2, '0');
    const hours = Math.floor(duration / (1000 * 60 * 60)).toString();
    return `${hours}H ${minutes}M`;
  }

  // Это нужно, чтобы распарсить ответ, в нашем случае - моковый json
  static fromJSON(json) {
    return new PointmModel(JSON.parse(json))
  }
}