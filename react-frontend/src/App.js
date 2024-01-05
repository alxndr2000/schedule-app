import React from "react";
import "./App.css";
import GridComponent from './GridComponent';

// App functional component
function App() {
  // State to trigger grid reload
  const [reloadGrid, setReloadGrid] = React.useState(false);

  // State to store input data
  const [inputData, setInputData] = React.useState('');

  // Function to handle input change and trigger grid reload
  const handleInputChange = (event) => {
    setInputData(event.target.value);
    setReloadGrid(!reloadGrid);
  };

  // Return JSX for rendering the App component
  return (
    <div className="App">
      <header className="App-header">
        <p>Room Code:</p>
        {/* Input field for entering room code */}
        <input
          type="text"
          value={inputData}
          onChange={handleInputChange}
          placeholder="Enter Room Code"
        />
        <br></br>
        {/* Render the GridComponent with key to trigger reload and pass roomCode */}
        <GridComponent key={reloadGrid} roomCode={inputData} />
      </header>
    </div>
  );
}

// Export the App component
export default App;