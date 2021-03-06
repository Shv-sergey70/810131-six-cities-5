import React from 'react';
import {TypeAccommodation} from '../../utils/const';
import {getRating} from '../../utils/common';
import {OfferPropTypes} from '../../utils/property-type';
import {Link} from 'react-router-dom';
import {PagePath, FavoriteStatus} from '../../utils/const';
import {connect} from 'react-redux';
import {ActionCreator} from '../../store/action';
import PropTypes from 'prop-types';
import {sendFavoriteStatus} from '../../store/api-actions';

const FavoritePlaceCard = ({favoriteOffer, city, changeCity, updateFavoriteStatus, updateIdActiveCardForMap}) => {

  const {id, images, accommodation} = favoriteOffer;
  const [firstImage] = images;
  const {price, rating, title, type} = accommodation;

  const handleFavoriteCardClick = () => {
    if (city !== favoriteOffer.city) {
      changeCity(favoriteOffer.city);
    }
    updateIdActiveCardForMap(id);
  };

  return (
    <article
      className="favorites__card place-card"
      onClick={handleFavoriteCardClick}>
      <div className="favorites__image-wrapper place-card__image-wrapper">
        <Link to={`${PagePath.OFFER}${id}`}>
          <img className="place-card__image" src={firstImage} width="150" height="110" alt="Place image" />
        </Link>
      </div>
      <div className="favorites__card-info place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}{` `}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button
            className="place-card__bookmark-button place-card__bookmark-button--active button"
            type="button"
            onClick={() => updateFavoriteStatus(id, FavoriteStatus.REMOVAL)}>
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark" />
            </svg>
            <span className="visually-hidden">In bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: getRating(rating)}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`${PagePath.OFFER}${id}`}>{title}</Link>
        </h2>
        <p className="place-card__type">{TypeAccommodation[type.toUpperCase()]}</p>
      </div>
    </article >
  );
};

FavoritePlaceCard.propTypes = {
  favoriteOffer: OfferPropTypes,
  city: PropTypes.string.isRequired,
  changeCity: PropTypes.func.isRequired,
  updateFavoriteStatus: PropTypes.func.isRequired,
  updateIdActiveCardForMap: PropTypes.func.isRequired
};

// связывает store c пропсами компонента
const mapStateToProps = (({PROCESS}) => ({
  city: PROCESS.city
}));

// связывает методы сo store
const mapDispatchToProps = ((dispatch) => ({
  changeCity(city) {
    dispatch(ActionCreator.changeCity(city));
  },
  updateFavoriteStatus(id, status) {
    dispatch(sendFavoriteStatus(id, status, ActionCreator.removeNoFavoriteOffer));
  },
  updateIdActiveCardForMap(id) {
    dispatch(ActionCreator.updateIdActiveCardForMap(id));
  },
}));

export {FavoritePlaceCard};
export default connect(mapStateToProps, mapDispatchToProps)(FavoritePlaceCard);
