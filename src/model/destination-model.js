// import RoutePoint from './routePoint';
// import { getDestinationList } from '../mock/destination-data.js';

// export default class DestinationsModel {
//   getDestinationsList() {
//     const destinations = getDestinationList();
//     return destinations.map((destination) => {
//       const { id, name, description, pictures } = destination;
//       const routePoint = new RoutePoint(
//         id,
//         null,
//         null,
//         null,
//         {
//           name,
//           description,
//           pictures,
//         },
//         false,
//         null,
//         null
//       );
//       return routePoint;
//     });
//   }
// }

export class DestinationModel {
  constructor(data) {
    this.id = data.id;
    this.description = data.description;
    this.name = data.name;
    this.pictures = [];

    for (let i = 0; i < data.pictures.length; i++) {
      const picture = data.pictures[i];
      this.pictures.push({
        src: picture.src,
        description: picture.description,
      });
    }
  }

  static fromJSON(json) {
    return new DestinationModel(JSON.parse(json));
  }
}
