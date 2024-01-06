import React, { useState, useEffect } from 'react';
import BoxComponent from './BoxComponent';

// GridComponent functional component
const GridComponent = (props) => {
  // Total number of boxes in the grid
  const boxCount = 31;

  // State to store data for all boxes
  const [allBoxData, setAllBoxData] = useState({});

  // useEffect to fetch data from the API based on the room code
  useEffect(() => {
    // Function to fetch data asynchronously
    const fetchData = async () => {
      try {
        // Fetch data from the API using the provided roomCode
        const response = await fetch('/api/old/' + props.roomCode);
        const data = await response.json();

        // Set the fetched data to the state
        setAllBoxData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    // Call the fetchData function when the roomCode prop changes
    fetchData();

  }, [props.roomCode]); // Dependency array to watch for changes in roomCode prop

  // Return JSX for rendering the grid container and BoxComponent for each box
  return (
    <div className="grid-container">
      {[...Array(boxCount)].map((_, index) => (
        <BoxComponent key={index} boxId={index} allBoxData={allBoxData} />
      ))}
    </div>
  );
};

// Export the GridComponent
export default GridComponent;
