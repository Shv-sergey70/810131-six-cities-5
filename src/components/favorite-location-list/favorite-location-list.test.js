import React from 'react';
import renderer from 'react-test-renderer';
import FavoriteLocationList from './favorite-location-list';

const offers = [
  {
    accommodation: {
      bedroomsCount: 1,
      features: [`Dishwasher`, `Towels`, `Washer`, `Fridge`, `Breakfast`, `Laptop friendly workspace`, `Baby seat`, `Air conditioning`],
      guestsLimit: 2,
      isPremium: true,
      price: 241,
      rating: 4.4,
      title: `The Joshua Tree House`,
      type: `room`,
    },
    cityLocation: {latitude: 51.225402, longitude: 6.776314, zoom: 13},
    coordinates: [51.237402, 6.797314],
    description: `This is a place for dreamers to reset, reflect, and create. Designed with a 'slow' pace in mind, our hope is that you enjoy `,
    host: {
      avatar: `img/avatar-angelina.jpg`,
      isPro: true,
      name: `Angelina`,
    },
    id: 1,
    images: [`https://assets.htmlacademy.ru/intensives/javascript-3/hotel/12.jpg`, `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/1.jpg`, `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/10.jpg`],
    isFavorite: false,
    previewImage: `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/6.jpg`,
  },
  {
    accommodation: {
      bedroomsCount: 2,
      features: [`Laptop friendly workspace`, `Baby seat`, `Air conditioning`],
      guestsLimit: 4,
      isPremium: false,
      price: 300,
      rating: 4.5,
      title: `The Joshua Tree House`,
      type: `hotel`,
    },
    cityLocation: {latitude: 51.225402, longitude: 6.776314, zoom: 13},
    coordinates: [51.247402, 6.777314],
    description: `This is a place for dreamers to reset, reflect, and create. Designed with a 'slow' pace in mind, our hope is that you `,
    host: {
      avatar: `img/avatar-angelina.jpg`,
      isPro: true,
      name: `Angelina`,
    },
    id: 2,
    images: [`https://assets.htmlacademy.ru/intensives/javascript-3/hotel/12.jpg`, `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/1.jpg`, `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/10.jpg`, `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/15.jpg`, `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/2.jpg`, `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/5.jpg`],
    isFavorite: true,
    previewImage: `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/6.jpg`,
  },
];

jest.mock(`../favorite-place-card/favorite-place-card`, () => `FavoritePlaceCard`);

it(`FavoriteLocationList render correctly`, () => {
  const tree = renderer.create(<FavoriteLocationList
    city={`Paris`}
    cityFavoriteOffers={offers}
  />).toJSON();
  expect(tree).toMatchSnapshot();
});
