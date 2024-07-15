interface amazonItem {
  name: string;
  author?: string;
  typeOfObject: string;
  price: string;
}

interface Order {
  orderDate: string;
  total: string;
  orderNumber: string;
  deliveryDate: string;
  objectsOrdered: amazonItem[];
  authorOfBook?: string;
}

const orderHistory: Order[] = [
  {
    orderDate: 'August 4, 2020',
    total: '$34',
    orderNumber: '114-3941689-8772232',
    deliveryDate: 'August 8, 2020',
    objectsOrdered: [
      {
        name: 'Javascript for impatient programmers',
        author: 'Dr. Axel Rauschmayer',
        typeOfObject: 'book',
        price: '$31.55',
      },
    ],
  },
  {
    orderDate: 'July 19, 2020',
    total: '$44.53',
    orderNumber: '113-9984268-1280257',
    deliveryDate: 'July 20, 2020',
    objectsOrdered: [
      {
        name: 'The Timeless Way of Building',
        author: 'Christopher Alexander',
        typeOfObject: 'book',
        price: '$41.33',
      },
    ],
  },
  {
    orderDate: 'July 4, 2020',
    total: '$17.22',
    orderNumber: '114-2875557-9059409',
    deliveryDate: 'July 7, 2020',
    objectsOrdered: [
      {
        name: 'Gamecube Controller Adapter. Super Smash Bros Switch Gamecube Adapter for Wii U, PC. Support Turbo and Vibration Features. No Driver and No Lag-Gamecube Adapter',
        typeOfObject: 'Gamecube Controller Adapter',
        price: '$15.98',
      },
    ],
  },
  {
    orderDate: 'July 3, 2020',
    total: '$138.93',
    orderNumber: '113-2883177-2648248',
    deliveryDate: 'July 5, 2020',
    objectsOrdered: [
      {
        name: 'GameCube Controller - Super Smash Bros. Edition (Nintendo Switch)',
        typeOfObject: 'Gamecube Controller',
        price: '$94.95',
      },
      {
        name: 'The Art of Sql',
        author: 'Stephanie Faroult',
        typeOfObject: 'book',
        price: '$33.99',
      },
    ],
  },
];
