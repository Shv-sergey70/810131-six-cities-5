export const ActionType = {
  CHANGE_CITY: `CHANGE_CITY`,
  UPDATE_SORTING_TYPE: `UPDATE_SORTING_TYPE`,
  UPDATE_ID_ACTIVE_CARD_FOR_MAP: `UPDATE_ID_ACTIVE_CARD_FOR_MAP`,
  LOAD_OFFERS: `LOAD_OFFERS`,
  REQUIRED_AUTHORIZATION: `REQUIRED_AUTHORIZATION`,
  UPDATE_USER: `UPDATE_USER`,
  UPDATE_ACTIVE_OFFER: `UPDATE_ACTIVE_OFFER`,
  UPDATE_NEARBY_OFFERS: `UPDATE_NEARBY_OFFERS`
};

export const ActionCreator = {
  changeCity: (city) => ({
    type: ActionType.CHANGE_CITY,
    payload: city
  }),
  updateSortingType: (sortingType) => ({
    type: ActionType.UPDATE_SORTING_TYPE,
    payload: sortingType
  }),
  updateIdActiveCardForMap: (id) => ({
    type: ActionType.UPDATE_ID_ACTIVE_CARD_FOR_MAP,
    payload: id
  }),
  loadOffers: (offers) => ({
    type: ActionType.LOAD_OFFERS,
    payload: offers,
  }),
  requireAuthorization: (status) => ({
    type: ActionType.REQUIRED_AUTHORIZATION,
    payload: status
  }),
  updateUser: (userInformation) => ({
    type: ActionType.UPDATE_USER,
    payload: userInformation
  }),
  updateActiveOffer: (activeOffer) => ({
    type: ActionType.UPDATE_ACTIVE_OFFER,
    payload: activeOffer
  }),
  updateNearbyOffers: (nearbyOffers) => ({
    type: ActionType.UPDATE_NEARBY_OFFERS,
    payload: nearbyOffers
  }),
};
