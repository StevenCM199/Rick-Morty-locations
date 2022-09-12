import React from 'react';
import useFetch from '../hooks/useFetch';

const ResidentItem = (url) => {

  const [resident] = useFetch(url);

  return (
    <li className="resident-item">
      <div className="resident-card">
        <h2 className='resident-status'><div className='status'></div>{resident.status}</h2>
        <img src={resident.image} alt="" />
        <h2 className='resident-name'>{resident.name}</h2>
        <div className="details-container">
          <h2 className='resident-details'> {'Species: '} </h2> <p> {resident.species} </p>
        </div>
        <div className="details-container">
          <h2 className='resident-details'> {'N° of episodes: '} </h2> <p>{resident.episode?.length}</p> 
        </div>
        
      </div>
    </li>
  );
};

export default ResidentItem;