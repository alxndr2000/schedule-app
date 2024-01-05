import React, { useState, useEffect } from 'react';

const BoxComponent = ({ boxId, allBoxData }) => {
  const [boxData, setBoxData] = useState(null);

  useEffect(() => {
    // Set boxData based on the provided allBoxData
    setBoxData(allBoxData[`box${boxId + 1}`]); // Assuming boxId starts from 0
  }, [boxId, allBoxData]);

  return <div className="box">
        <div className="top-left-number">{boxId+1}</div>
        <div className="centered-data">{boxData}</div>
    </div>;
};

export default BoxComponent;