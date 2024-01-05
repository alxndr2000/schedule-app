import React from "react";
import "./App.css";

import GridComponent from './GridComponent';

function App() {

  const [reloadGrid, setReloadGrid] = React.useState(false);

  const [inputData, setInputData] = React.useState('');

  const handleInputChange = (event) => {
    setInputData(event.target.value);
    setReloadGrid(!reloadGrid);
  };

  return (
    <div className="App">
      <header className="App-header">
        <p>Room Code:</p>
        <input
        type="text"
        value={inputData}
        onChange={handleInputChange}
        placeholder="Enter Room Code"/>
        
        <br></br>
        <GridComponent key={reloadGrid} roomCode={inputData}/>
      </header>
      
    </div>
  );
}

export default App;