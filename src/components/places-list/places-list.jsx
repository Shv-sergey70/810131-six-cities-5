import React, {PureComponent} from 'react';
import PlaceCard from '../place-card/place-card';
import PropTypes from 'prop-types';

export default class PlacesList extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {offers} = this.props;

    const placeCards = offers.map((offer) => {
      return (
        <article key={offer.id} className="cities__place-card place-card" onMouseEnter={() => console.log(offer.id)}>
          <PlaceCard offer={offer} />
        </article>
      );
    });

    return (
      <div className="cities__places-list places__list tabs__content">
        {placeCards}
      </div>
    );
  }
}

PlacesList.propTypes = {
  offers: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    images: PropTypes.array.isRequired,
    accommodation: PropTypes.shape({
      isPremium: PropTypes.bool.isRequired,
      rating: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      bedroomsCount: PropTypes.string.isRequired,
      guestsLimit: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
      features: PropTypes.array.isRequired,
    }).isRequired,
    host: PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }).isRequired,
    description: PropTypes.string.isRequired,
  })).isRequired,
};
