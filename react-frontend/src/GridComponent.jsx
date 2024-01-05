import React, { useState, useEffect } from 'react';
import BoxComponent from './BoxComponent';

const GridComponent = () => {
  const boxCount = 31;
  const [allBoxData, setAllBoxData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api');
        const data = await response.json();
        setAllBoxData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="grid-container">
      {[...Array(boxCount)].map((_, index) => (
        <BoxComponent key={index} boxId={index} allBoxData={allBoxData} />
      ))}
    </div>
  );
};

export default GridComponent;