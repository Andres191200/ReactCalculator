import {useReducer} from 'react';
import logo from './logo.svg';
import './App.css';

import DigitButton from './components/digitButton.jsx';
import DigitOperator from './components/digitOperator.jsx';

export const ACTIONS = {
  ADD_DIGIT:'add digit',
  ADD_OPERATOR: 'add operator'
}

const reducer = (state, {type, payload}) =>{
  switch(type){
    case ACTIONS.ADD_DIGIT : {
      if(state.operator){
        return{
          ...state,
          secondNumber: `${state.secondNumber || ''}${payload.digit}`
        }     
      }else{
        return{
          ...state,
          firstNumber: `${state.firstNumber || ''}${payload.digit}`
        }
      }
    }
    case ACTIONS.ADD_OPERATOR : {
      document.querySelector(`.visor-content`).classList.add('setted');
      return{
        ...state,
        operator: `${payload.operator}`
      }
    }
    case ACTIONS.CLEAR : {
      document.querySelector(`.visor-content`).classList.remove('setted');
      return{
        state : ''
      }
    }
  }
}

function App() {
  const [{firstNumber, operator, secondNumber}, dispatch] = useReducer(reducer, {})
  
  return (
    <div className="App">
      <div className="operations-visor">
          <h1 className="visor-content">{firstNumber ? firstNumber : '0'} {operator}</h1>
          <h1 className="second-number">{secondNumber}</h1>
      </div>
      <div className="calculator-container">
        <button onClick={() =>dispatch({type:ACTIONS.CLEAR})}>AC</button>
        <DigitOperator dispatch={dispatch} operator="DEL"/>
        <DigitOperator dispatch={dispatch} operator="+"/>
        <DigitOperator dispatch={dispatch} operator="-"/>
        
        <DigitButton dispatch={dispatch} digit="1"></DigitButton>
        <DigitButton dispatch={dispatch} digit="2"></DigitButton>
        <DigitButton dispatch={dispatch} digit="3"></DigitButton>

        <DigitOperator dispatch={dispatch} operator="x"/>

        <DigitButton dispatch={dispatch} digit="4"></DigitButton>
        <DigitButton dispatch={dispatch} digit="5"></DigitButton>
        <DigitButton dispatch={dispatch} digit="6"></DigitButton>

        <DigitOperator dispatch={dispatch} operator="%"/>

        <DigitButton dispatch={dispatch} digit="7"></DigitButton>
        <DigitButton dispatch={dispatch} digit="8"></DigitButton>
        <DigitButton dispatch={dispatch} digit="9"></DigitButton>

        <button>=</button>
      </div>
    </div>
  );
}

export default App;
