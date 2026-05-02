import { useState } from 'react'
import './App.css'

function App() {
  const [textValue, setTextValue] = useState('');
  const [counter, setCounter] = useState(0);

  const handleInputChange = (event) => {
    setTextValue(event.target.value);
  };

  function calculateSum(num) {
    const n = parseInt(num) || 0;
    return n * (n + 1) / 2;
  }

  return <div>
    <input
      type="text"
      value={textValue}
      onChange={handleInputChange}
      placeholder="Type a number..."
    />

    <p>Sum is: {calculateSum(textValue)}</p>

    <button onClick={() => {
      setCounter(counter + 1);
    }}>Counter ({counter})</button>
  </div>

}

export default App
