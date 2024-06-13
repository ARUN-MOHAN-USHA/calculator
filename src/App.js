import React, { useState } from 'react';
import './App.css';

function App() {
  const [display, setDisplay] = useState('0');
  const [operand, setOperand] = useState(null);
  const [operator, setOperator] = useState(null);
  const [waitingForInput, setWaitingForInput] = useState(false);

  const handleNumberClick = (number) => {
    if (waitingForInput) {
      setDisplay(String(number));
      setWaitingForInput(false);
    } else {
      setDisplay(display === '0' ? String(number) : display + number);
    }
  };

  const handleOperatorClick = (op) => {
    if (operand !== null && operator) {
      calculateResult();
    } else {
      setOperand(parseFloat(display));
    }
    setOperator(op);
    setWaitingForInput(true);
  };

  const calculateResult = () => {
    if (operand !== null && operator !== null) {
      const currentOperand = parseFloat(display);
      let result = 0;
      switch (operator) {
        case '+':
          result = operand + currentOperand;
          break;
        case '-':
          result = operand - currentOperand;
          break;
        case '*':
          result = operand * currentOperand;
          break;
        case '/':
          result = operand / currentOperand;
          break;
        default:
          break;
      }
      setDisplay(result.toString());
      setOperand(result);
      setWaitingForInput(true);
    }
  };

  const handleClearClick = () => {
    setDisplay('0');
    setOperand(null);
    setOperator(null);
    setWaitingForInput(false);
  };

  const handleEqualsClick = () => {
    calculateResult();
    setOperator(null);
    setWaitingForInput(true);
  };

  return (
    <div className="App">
      <input type="text" className="display" value={display} readOnly />
      <div className="buttons">
        <div className="row">
          <button onClick={handleNumberClick.bind(null, 7)}>7</button>
          <button onClick={handleNumberClick.bind(null, 8)}>8</button>
          <button onClick={handleNumberClick.bind(null, 9)}>9</button>
          <button onClick={handleOperatorClick.bind(null, '+')}>+</button>
        </div>
        <div className="row">
          <button onClick={handleNumberClick.bind(null, 4)}>4</button>
          <button onClick={handleNumberClick.bind(null, 5)}>5</button>
          <button onClick={handleNumberClick.bind(null, 6)}>6</button>
          <button onClick={handleOperatorClick.bind(null, '-')}>-</button>
        </div>
        <div className="row">
          <button onClick={handleNumberClick.bind(null, 1)}>1</button>
          <button onClick={handleNumberClick.bind(null, 2)}>2</button>
          <button onClick={handleNumberClick.bind(null, 3)}>3</button>
          <button onClick={handleOperatorClick.bind(null, '*')}>*</button>
        </div>
        <div className="row">
          <button onClick={handleClearClick}>C</button>
          <button onClick={handleNumberClick.bind(null, 0)}>0</button>
          <button onClick={handleEqualsClick}>=</button>
          <button onClick={handleOperatorClick.bind(null, '/')}>/</button>
        </div>
      </div>
    </div>
  );
}

export default App;
