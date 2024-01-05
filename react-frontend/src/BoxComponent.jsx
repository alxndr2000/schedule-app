import React, { useState, useEffect } from 'react';



const BoxComponent = ({ boxId, allBoxData }) => {
  const [boxData, setBoxData] = useState(null);

  function nameDataFormatter(usersArray, selectedIds, maxLength) {
    // Check if the necessary data is available
    if (!usersArray || !selectedIds) {
      return "Data not available";
    }
  
    const selectedNames = usersArray
      .filter(user => selectedIds.includes(user.ID))
      .map(user => user.name);
  
    const totalCharacters = selectedNames.reduce((sum, name) => sum + name.length, 0);
  
    if (totalCharacters <= maxLength) {
      return selectedNames.join(', ');
    } else {
      let currentLength = 0;
      let truncatedNames = [];
  
      for (const name of selectedNames) {
        if (currentLength + name.length <= maxLength) {
          truncatedNames.push(name);
          currentLength += name.length + 2; // Adding 2 for comma and space
        } else {
          break;
        }
      }
  
      const remainingCount = selectedNames.length - truncatedNames.length;
      return `${truncatedNames.join(', ')} +${remainingCount} more`;
    }
  }


  useEffect(() => {
    // Set boxData based on the provided allBoxData
    
      // Ensure allBoxData is defined and has the expected structure
    if (allBoxData && allBoxData.data) {
      // Set boxData based on the provided allBoxData
      setBoxData({'users': allBoxData.users, 'data': allBoxData.data[`box${boxId}`]});
    }
  }, [boxId, allBoxData]);



  return <div className="box">
        <div className="top-left-number">{boxId+1}</div>
        <div className="box-data">
        <p className='amount-data'>{boxData ? `${boxData.data.length} Available` : 'Loading...'}</p>
        <p className='name-data'>{boxData ? nameDataFormatter(boxData.users, boxData.data, 16) : 'Loading...'}</p>
        
        </div>
    </div>;
};

export default BoxComponent;