import {useReducer, useState} from 'react';
import logo from './logo.svg';
import './App.css';

import DigitButton from './components/digitButton.jsx';
import DigitOperator from './components/digitOperator.jsx';

var EVALUATED = false;

export const ACTIONS = {
  ADD_DIGIT:'add digit',
  ADD_OPERATOR: 'add operator',
  EVALUATE: 'evaluate'
}

const reducer = (state, {type, payload}) =>{
  switch(type){
    case ACTIONS.ADD_DIGIT : {
      if((payload.digit === '0' && state.firstNumber === '0')){
        return{
          firstNumber: null
        }
      }
      if(payload.digit === '.' && !state.firstNumber){
        return state;
      }
      if(state.operator){
        if(payload.digit === '.' && !state.secondNumber){
          return state;
        }
      }     

      //CHECKING IF FIRST AND SECOND NUMBER HAS "." OPERATOR
      if(payload.digit === '.' && (state.firstNumber.includes(".")) && !state.operator){ 
        return state;
      }
      if(state.secondNumber){ //ONLY IF SECOND NUMBER EXISTS, THEN IT CHECKS FOR "." CHARACTER
        if((payload.digit === '.' && state.secondNumber.includes(".")) && state.operator){
          return state;
        }
      }  

      if(EVALUATED && !state.operator){
        return state;
      }
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
      if(state.operator){
        return state;
      }
      else return{
        ...state,
        operator: `${payload.operator}`
      }
    }
    case ACTIONS.CLEAR : {
      document.querySelector(`.visor-content`).classList.remove('setted');
      EVALUATED = false;
      return{
        state : ''
      }
    }
    case ACTIONS.EVALUATE : {
      if(!state.operator || !state.secondNumber){
        return state;
      }
      EVALUATED=true;
      document.querySelector(`.visor-content`).classList.remove('setted');
      switch(state.operator){

        //NOTE: .toFixed(2) just limit decimals to 2 numbers ex: (9.6666).toFixed(2) => expected output = (9.66)
        case "x": {
          return{
            ...state,
            firstNumber: (state.firstNumber * state.secondNumber).toFixed(2),
            operator: '',
            secondNumber: ''
          }
        }
        case "+": {
          return{
            ...state,
            firstNumber: (parseInt(state.firstNumber) + parseInt(state.secondNumber)).toFixed(2),
            operator: '',
            secondNumber: ''
          }
        }
        case "-": {
          return{
            ...state,
            firstNumber: (state.firstNumber - state.secondNumber).toFixed(2),
            operator: '',
            secondNumber: ''
          }
        }
        case "%": {
          return{
            ...state,
            firstNumber: (state.firstNumber/state.secondNumber).toFixed(2),
            operator: '',
            secondNumber: ''
          }
        }
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
        <button className="calc-button" onClick={() =>dispatch({type:ACTIONS.CLEAR})}>AC</button>
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

        <button className="calc-button" onClick={() => dispatch({type:ACTIONS.EVALUATE})}>=</button>

        <DigitButton span={'span-two'} dispatch={dispatch} digit="0"></DigitButton>
        <DigitButton dispatch={dispatch} digit="."></DigitButton>
      </div>
    </div>
  );
}

export default App;
