import React, {PureComponent} from 'react';
import '../../../node_modules/leaflet/dist/leaflet.css';
import leaflet from 'leaflet';
import PropTypes from 'prop-types';
import {OfferPropTypes} from '../../utils/property-type';

const ICON_PATH = `img/pin.svg`;
const AMSTERDAM_COORDINATES = [52.38333, 4.9];
const ID_MAP_CONTAINER = `map`;

export default class Map extends PureComponent {

  componentDidMount() {
    const {offers} = this.props;
    const offerCoordinates = offers.map((offer) => offer.coordinates);

    // настройки leaflet
    const icon = leaflet.icon({
      iconUrl: ICON_PATH,
      iconSize: [27, 39]
    });

    const zoom = 12;
    const map = leaflet.map(ID_MAP_CONTAINER, {
      center: AMSTERDAM_COORDINATES,
      zoom,
      zoomControl: false,
      marker: true
    });
    map.setView(AMSTERDAM_COORDINATES, zoom);

    leaflet
      .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
        attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
      })
      .addTo(map);

    // добавляет координаты на карту leaflet
    offerCoordinates.forEach((coordinates) => {
      leaflet
        .marker(coordinates, {icon})
        .addTo(map);
    });
  }

  render() {
    const {classMap} = this.props;
    return <section id="map" className={`${classMap} map`}></section>;
  }

}

Map.propTypes = {
  offers: PropTypes.arrayOf(OfferPropTypes).isRequired,
  classMap: PropTypes.string.isRequired
};