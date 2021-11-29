import {useReducer} from 'react';
import logo from './logo.svg';
import './App.css';

import DigitButton from './components/digitButton.jsx';
import DigitOperator from './components/digitOperator.jsx';

export const ACTIONS = {
  ADD_DIGIT:'add digit'
}

const reducer = (state, {type, payload}) =>{
  switch(type){
    case ACTIONS.ADD_DIGIT : {
      return{
        ...state,
        firstNumber: `${state.firstNumber || ''}${payload.digit}`
      }
    }
  }
}

function App() {
  const [{firstNumber, operator, secondNumber}, dispatch] = useReducer(reducer, {})
  
  return (
    <div className="App">
      <div className="operations-visor">
          <h1>{firstNumber ? firstNumber : '0'}</h1>
          <h1></h1>
      </div>
      <div className="calculator-container">
        <DigitOperator operator="AC"/>
        <DigitOperator operator="DEL"/>
        <DigitOperator operator="+"/>
        <DigitOperator operator="-"/>
        
        <DigitButton dispatch={dispatch} digit="1"></DigitButton>
        <DigitButton dispatch={dispatch} digit="2"></DigitButton>
        <DigitButton dispatch={dispatch} digit="3"></DigitButton>

        <DigitOperator operator="x"/>

        <DigitButton dispatch={dispatch} digit="4"></DigitButton>
        <DigitButton dispatch={dispatch} digit="5"></DigitButton>
        <DigitButton dispatch={dispatch} digit="6"></DigitButton>

        <DigitOperator operator="%"/>

        <DigitButton dispatch={dispatch} digit="7"></DigitButton>
        <DigitButton dispatch={dispatch} digit="8"></DigitButton>
        <DigitButton dispatch={dispatch} digit="9"></DigitButton>

        <DigitOperator operator="="/>
      </div>
    </div>
  );
}

export default App;
