import React from 'react';
import useFetch from '../hooks/useFetch';

const LocationInfo = (url) => {

  const [location] = useFetch(url); 

  return (
    <div className="location-info-container">
      <h1>{location.name}</h1>
      <br />
      <ul className="location-info">
        <li>
          {'Type: ' + location.type}
        </li>

        <li>
          {'Dimension: ' + location.dimension}
        </li>

        <li>
          {'Population: ' + location.residents?.length}
        </li>

      </ul>
    </div>
  );
};

export default LocationInfo;