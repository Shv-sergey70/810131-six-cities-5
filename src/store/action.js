export const ActionType = {
  CHANGE_CITY: `CHANGE_CITY`,
  UPDATE_SORTING_TYPE: `UPDATE_SORTING_TYPE`,
  UPDATE_ID_ACTIVE_CARD_FOR_MAP: `UPDATE_ID_ACTIVE_CARD_FOR_MAP`,
  LOAD_OFFERS: `LOAD_OFFERS`,
  REQUIRED_AUTHORIZATION: `REQUIRED_AUTHORIZATION`,
  UPDATE_USER: `UPDATE_USER`,
  UPDATE_ACTIVE_OFFER: `UPDATE_ACTIVE_OFFER`,
  UPDATE_NEARBY_OFFERS: `UPDATE_NEARBY_OFFERS`,
  UPDATE_ACTIVE_OFFER_COMMENTS: `UPDATE_ACTIVE_OFFER_COMMENTS`,
  UPDATE_FAVORITE_OFFERS: `UPDATE_FAVORITE_OFFERS`,
  CHANGE_FAVORITE_STATUS_IN_ALL_OFFERS: `CHANGE_FAVORITE_STATUS_IN_ALL_OFFERS`,
  CHANGE_FAVORITE_STATUS_IN_NEARBY_OFFERS: `CHANGE_FAVORITE_STATUS_IN_NEARBY_OFFERS`,
  CHANGE_FAVORITE_STATUS_IN_ACTIVE_OFFER: `CHANGE_FAVORITE_STATUS_IN_ACTIVE_OFFER`,
  REMOVE_NO_FAVORITE_OFFER: `REMOVE_NO_FAVORITE_OFFER`
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
  updateActiveOfferComments: (comments) => ({
    type: ActionType.UPDATE_ACTIVE_OFFER_COMMENTS,
    payload: comments,
  }),
  updateFavoriteOffers: (favoriteOffers) => ({
    type: ActionType.UPDATE_FAVORITE_OFFERS,
    payload: favoriteOffers
  }),
  changeFavoriteStatusInAllOffers: (favoriteOffer) => ({
    type: ActionType.CHANGE_FAVORITE_STATUS_IN_ALL_OFFERS,
    payload: favoriteOffer
  }),
  changeFavoriteStatusNearbyOffers: (favoriteOffer) => ({
    type: ActionType.CHANGE_FAVORITE_STATUS_IN_NEARBY_OFFERS,
    payload: favoriteOffer
  }),
  changeFavoriteStatusActiveOffer: (favoriteOffer) => ({
    type: ActionType.CHANGE_FAVORITE_STATUS_IN_ACTIVE_OFFER,
    payload: favoriteOffer
  }),
  removeNoFavoriteOffer: (offer) => ({
    type: ActionType.REMOVE_NO_FAVORITE_OFFER,
    payload: offer
  })
};
