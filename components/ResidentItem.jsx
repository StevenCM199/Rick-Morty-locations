import React from 'react';
import useFetch from '../hooks/useFetch';

const ResidentItem = (url) => {

  const [resident] = useFetch(url);

  return (
    <li className="resident-item">
      <div className="resident-card">
        {resident.name}
        <br />
        <img src={resident.image} alt="" />
      </div>
    </li>
  );
};

export default ResidentItem;