import offers from '../mocks/offers';
import {City} from '../utils/const';
import {ActionType} from './action';

const defaultOffers = offers.filter((offer) => offer.city === City.AMSTERDAM);

const initialState = {
  city: City.AMSTERDAM,
  offers: defaultOffers,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY:
      return Object.assign({}, state, {city: action.payload});
    case ActionType.GET_OFFERS:
      return Object.assign({}, state, {offers: offers.filter((offer) => offer.city === state.city)});
  }
  return state;
};

export {reducer};
