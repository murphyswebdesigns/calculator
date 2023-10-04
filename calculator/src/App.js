import './App.css';
import { useState } from 'react';

function App() {
  const [display, setDisplay] = useState('0');

  const handleNumber = (event) => {
     const number = event.target.textContent;

     if(display === '0') {
      setDisplay(number);
     } else {
      setDisplay(display + number);
     } 
  };

  const handleOperator = (event) => {
    const operator = event.target.textContent;
    setDisplay(display + ' ' + operator + ' ');
  };

  const handleEqual = () => {
    setDisplay(eval(display));
  };

  const handleDecimal = () => {
      const array = display.split(' ');
      const lastElement = array[array.length - 1];

      if(!lastElement.includes('.')) {
        setDisplay(display + '.');
      }
  };

  const handleClear = () => {
    setDisplay('0');
  }

  return (
    <div className="App">
      <div id='display'>{display}</div>
          <button id='clear' onClick={handleClear}>AC</button>
          <button id='divide' onClick={handleOperator}>/</button>
          <button id='multiply' onClick={handleOperator}>*</button> <br />
        
          <button id='seven' onClick={handleNumber}>7</button>
          <button id='eight' onClick={handleNumber}>8</button>
          <button id='nine' onClick={handleNumber}>9</button>
          <button id='subtract' onClick={handleOperator}>-</button> 
        
        
          <button id='four' onClick={handleNumber}>4</button>
          <button id='five' onClick={handleNumber}>5</button>
          <button id='six' onClick={handleNumber}>6</button>
          <button id='add' onClick={handleOperator}>+</button>
        
        <div id='second-bottom-row'>
          <button id='one' onClick={handleNumber}>1</button>
          <button id='two' onClick={handleNumber}>2</button>
          <button id='three' onClick={handleNumber}>3</button> 
        </div>
        <div id="bottom-row">
          <button id='zero' onClick={handleNumber}>0</button>
          <button id='decimal' onClick={handleDecimal}>.</button>
          <button id='equals' onClick={handleEqual}>=</button>
        </div>
        hello
    </div>
    
  );
}

export default App;
