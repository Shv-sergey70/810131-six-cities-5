export const getRating = (rating) => {
  const roundRating = Math.round(rating);
  return roundRating > 0 && roundRating <= 5 ? `${roundRating * 20}%` : false;
};

export const adaptToClient = (offer) => {
  return Object.assign({}, offer, {
    city: offer.city.name,
    cityLocation: offer.city.location,
    accommodation: {
      isPremium: offer.is_premium,
      rating: offer.rating,
      title: offer.title,
      type: offer.type,
      bedroomsCount: offer.bedrooms,
      guestsLimit: offer.max_adults,
      price: offer.price,
      features: offer.goods,
    },
    previewImage: offer.preview_image,
    host: Object.assign({}, offer.host, {
      avatar: offer.host.avatar_url,
      isPro: offer.host.is_pro,
    }),
    isFavorite: offer.is_favorite,
    coordinates: [offer.location.latitude, offer.location.longitude],
  });
};

export const adaptToClientUserData = (user) => {
  return Object.assign({}, user, {
    avatarUrl: user.avatar_url,
    isPro: user.is_pro,
  });
};

export const adaptToClientComments = ((comment) => {
  return Object.assign({}, comment, {
    avatar: comment.user.avatar_url,
    date: new Date(comment.date),
    name: comment.user.name,
    isPro: comment.user.is_pro,
    commentText: comment.comment
  });
});
