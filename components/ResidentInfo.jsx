import React from 'react';
import useFetch from '../hooks/useFetch';
import ResidentItem from './ResidentItem';

const ResidentInfo = (url) => {

  const [location] = useFetch(url);

  return (
    <ul className='resident-container'>
      {location.residents?.map((resident) => (
        <ResidentItem url={resident} key={resident}/>
      ))}
    </ul>
  );
};

export default ResidentInfo;