import { useState } from 'react';
import './App.css';
import AddNumberRoot from "./components/AddNumberRoot";
import DisplayNumberRoot from "./components/DisplayNumberRoot";

function App() {
  const [number, setNumber] = useState(0);

  const onClickButton = (size) => {
    setNumber(number + size);
  };

  return (
    <div className="App">
      <h1>Root</h1>
      <AddNumberRoot onClickButton={onClickButton} />
      <DisplayNumberRoot number={number} />
    </div>
  );
}

export default App;
