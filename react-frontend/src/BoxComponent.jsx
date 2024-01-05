import React, { useState, useEffect } from 'react';

// BoxComponent functional component
const BoxComponent = ({ boxId, allBoxData }) => {
  // State to store boxData
  const [boxData, setBoxData] = useState(null);

  // Function to format names based on selected IDs and maximum length
  function nameDataFormatter(usersArray, selectedIds, maxLength) {
    // Check if the necessary data is available
    if (!usersArray || !selectedIds) {
      return "Data not available";
    }
  
    // Filter and map user names based on selected IDs
    const selectedNames = usersArray
      .filter(user => selectedIds.includes(user.ID))
      .map(user => user.name);
  
    // Calculate the total characters of selected names
    const totalCharacters = selectedNames.reduce((sum, name) => sum + name.length, 0);
  
    // Return formatted names based on total characters and maxLength
    if (totalCharacters <= maxLength) {
      return selectedNames.join(', ');
    } else {
      let currentLength = 0;
      let truncatedNames = [];
  
      // Truncate names to fit within maxLength
      for (const name of selectedNames) {
        if (currentLength + name.length <= maxLength) {
          truncatedNames.push(name);
          currentLength += name.length + 2; // Adding 2 for comma and space
        } else {
          break;
        }
      }
  
      // Calculate remaining names count
      const remainingCount = selectedNames.length - truncatedNames.length;
      return `${truncatedNames.join(', ')} +${remainingCount} more`;
    }
  }

  // useEffect to set boxData based on the provided allBoxData
  useEffect(() => {
    // Ensure allBoxData is defined and has the expected structure
    if (allBoxData && allBoxData.data) {
      // Set boxData based on the provided allBoxData
      setBoxData({'users': allBoxData.users, 'data': allBoxData.data[`box${boxId}`]});
    }
  }, [boxId, allBoxData]);

  // Return JSX for rendering the box
  return (
    <div className="box">
      <div className="top-left-number">{boxId + 1}</div>
      <div className="box-data">
        <p className='amount-data'>
          {boxData ? `${boxData.data.length} Available` : 'Loading...'}
        </p>
        <p className='name-data'>
          {boxData ? nameDataFormatter(boxData.users, boxData.data, 16) : 'Loading...'}
        </p>
      </div>
    </div>
  );
};

// Export the BoxComponent
export default BoxComponent;