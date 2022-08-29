import { useState } from 'react';
import './App.css';
import calc_img from './images/calculator.png'; 

function App() {
  const [calc, setCalc] = useState("");
  const [result, setResult] = useState("");

  const oper = ['/' , '*', '+', '-', '.'];

  const updateCalc = value => {
    if(
     ( oper.includes(value) && calc === '' ) ||
     ( oper.includes(value) && oper.includes(calc.slice(-1)))
    )
      return;

    setCalc(calc + value)  

    if(!oper.includes(value)){
      setResult(eval(calc + value).toString())
    }
  }
  

  const calculate = () => {
    setCalc(eval(calc).toString());
  }

  const delThis = () => {
    if (calc !== '')
    { 
      const value = calc.slice(0,-1); //Son elemanı çıkardı..
      setCalc(value);
    }
  }

  const clearAll = () => {
    setResult("");
    setCalc("")
  }

  const createDigits = () => {
    const digits = [];
    for (let i = 1; i < 10; i++) {
       digits.push(
         <button
            onClick={() => updateCalc(i.toString())} 
            key={i}>
              {i}
         </button>
       )
    } 
    return digits;
  }

  return (
    <div className="App">
      <div className="calculator">
        <div className="calculator_img">
          <img src={calc_img} alt="Calculator"/>
        </div>
        <div className="display">
          {result ? <span>({result})</span> : ''} 
          {calc || "0"}
        </div>

        <div className="operators">
          <button onClick={() => updateCalc('/')}>/
          </button>
          <button onClick={() => updateCalc('*')}>*
          </button>
          <button onClick={() => updateCalc('+')}>+
          </button>
          <button onClick={() => updateCalc('-')}>-
          </button>
          
          <button onClick={delThis}>DEL</button>
          <button onClick={clearAll}>AC</button>
        </div>

        <div className="digits">
            {createDigits()}
            <button onClick={() => updateCalc('0')}>0</button>
            <button onClick={() => updateCalc('.')}>.</button>

            <button onClick={calculate}>=</button>
        </div>
      </div>
    </div>
  );
}

export default App;
