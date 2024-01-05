import React, { useState, useEffect } from 'react';



const BoxComponent = ({ boxId, allBoxData }) => {
  const [boxData, setBoxData] = useState(null);

  function nameDataFormatter(namesArray, maxLength) {
    if (boxData!=null) {
      const totalCharacters = namesArray.reduce((sum, name) => sum + name.length, 0);

      if (totalCharacters <= maxLength) {
        return namesArray.join(', ');
      } else {
        let currentLength = 0;
        let truncatedNames = [];

        for (const name of namesArray) {
          if (currentLength + name.length <= maxLength) {
            truncatedNames.push(name);
            currentLength += name.length + 2; // Adding 2 for comma and space
          } else {
            break;
          }
        }

        const remainingCount = namesArray.length - truncatedNames.length;
        return `${truncatedNames.join(', ')} +${remainingCount} more`;
      }
    }

  }
  function lengthCalculator(boxData) {

    if (boxData!=null) {
      return boxData.length;
    }
    else {
      return 0
    }
  }


  useEffect(() => {
    // Set boxData based on the provided allBoxData
    setBoxData(allBoxData[`box${boxId}`]); // Assuming boxId starts from 0
  }, [boxId, allBoxData]);



  return <div className="box">
        <div className="top-left-number">{boxId+1}</div>
        <div className="box-data">
        <p className='amount-data'>{lengthCalculator(boxData)} Available </p>
        <p className='name-data'>{nameDataFormatter(boxData, 16)}</p>
        </div>
    </div>;
};

export default BoxComponent;