// Все, что тут взял из openAPI
export function generatePoint() {
  return `{
    "id": "f4b62099-293f-4c3d-a702-94eec4a2808c",
    "base_price": 1100,
    "date_from": "2019-07-10T22:55:56.845Z",
    "date_to": "2019-07-11T11:22:13.375Z",
    "destination": "bfa5cb75-a1fe-4b77-a83c-0e528e910e04",
    "is_favorite": false,
    "offers": [
    "b4c3e4e6-9053-42ce-b747-e281314baa31"
    ],
    "type": "taxi"
    }`
}

export function generateDestination() {
  return `{
    "id": "cfe416cq-10xa-ye10-8077-2fs9a01edcab",
    "description": "Chamonix, is a beautiful city, a true asian pearl, with crowded streets.",
    "name": "Chamonix",
    "pictures": [
    {
    "src": "http://picsum.photos/300/200?r=0.0762563005163317",
    "description": "Chamonix parliament building"
    }]}`
}

export function generateOffer() {
  return {
    "type": "taxi",
    "offers": [
    {
    "id": "b4c3e4e6-9053-42ce-b747-e281314baa31",
    "title": "Upgrade to a business class",
    "price": 120
    }]}
}

export function generateTrip() {
  return {"type":"taxi","offers":[{"id":"b4c3e4e6-9053-42ce-b747-e281314baa31","title":"Upgrade to a business class","price":120},{"id":"c7d2f5d7-1f3a-4edc-88c3-193c1d7c9e84","title":"Secure your baggage","price":80}]}
}