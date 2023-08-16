import React, { useState } from 'react';

const Calculator = () => {
  const [result, setResult] = useState('');
  const [isOpenBracket, setIsOpenBracket] = useState(false);

  const handleClick = (e) => {
    const buttonValue = e.target.name;
    if (buttonValue === '(' || buttonValue === ')') {
      setIsOpenBracket(!isOpenBracket);
      setResult(result.concat(isOpenBracket ? ')' : '('));
    } else {
      setResult(result.concat(buttonValue));
    }
  };

  const clear = () => {
    setResult('');
    setIsOpenBracket(false);
  };

  const calculate = () => {
    try {
      let expression = result.replace(/%/g, '/100').replace(/[^-()\d/*+.]/g, '');
      setResult(eval(expression).toString());
    } catch (error) {
      setResult('Error');
    }
  };

  const deleteLastChar = () => {
    setResult(result.slice(0, -1));
  };

  const togglePositiveNegative = () => {
    if (result.charAt(0) === '-') {
      setResult(result.slice(1));
    } else {
      setResult('-' + result);
    }
  };

  const formatNumber = (number) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };

  return (
    <div className="calculator">
      <h1 className="my-calculator">Minnie Calculator</h1>
      <input type="text" value={formatNumber(result)} readOnly />
      <div className="keypad">
      <button onClick={clear}>C</button>
      <button name="%" onClick={handleClick}>
          %
        </button>
        <button name="(" onClick={handleClick}>
          {isOpenBracket ? ')' : '('} 
        </button>
        <button onClick={deleteLastChar}>&lt;</button>
        <button className="highlight" name="7" onClick={handleClick}>
          7
        </button>
        <button className="highlight" name="8" onClick={handleClick}>
          8
        </button>
        <button className="highlight" name="9" onClick={handleClick}>
          9
        </button>
        <button name="+" onClick={handleClick}>
          +
        </button>
        <button className="highlight" name="4" onClick={handleClick}>
          4
        </button>
        <button className="highlight" name="5" onClick={handleClick}>
          5
        </button>
        <button className="highlight" name="6" onClick={handleClick}>
          6
        </button>
        <button name="-" onClick={handleClick}>
          -
        </button>
        <button className="highlight" name="1" onClick={handleClick}>
          1
        </button>
        <button className="highlight" name="2" onClick={handleClick}>
          2
        </button>
        <button className="highlight" name="3" onClick={handleClick}>
          3
        </button>
        <button name="*" onClick={handleClick}>
          *
        </button>
        <button name="." onClick={handleClick}>
          .
        </button>
        <button className="highlight" name="0" onClick={handleClick}>
          0
        </button>
        <button onClick={togglePositiveNegative}>+/-</button>
        <button name="/" onClick={handleClick}>
          /
        </button>
        <button className="equal-button" onClick={calculate}>=</button>
      </div>
    </div>
  );
};

export default Calculator;
