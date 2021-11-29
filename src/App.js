import logo from './logo.svg';
import './App.css';

import DigitButton from './components/digitButton.jsx';
import DigitOperator from './components/digitOperator.jsx';

function App() {
  return (
    <div className="App">
      <div className="operations-visor">
          
      </div>
      <div className="calculator-container">
        <DigitOperator operator="AC"/>
        <DigitOperator operator="DEL"/>
        <DigitOperator operator="+"/>
        <DigitOperator operator="-"/>
        
        <DigitButton digit="1"></DigitButton>
        <DigitButton digit="2"></DigitButton>
        <DigitButton digit="3"></DigitButton>

        <DigitOperator operator="x"/>

        <DigitButton digit="4"></DigitButton>
        <DigitButton digit="5"></DigitButton>
        <DigitButton digit="6"></DigitButton>

        <DigitOperator operator="%"/>

        <DigitButton digit="7"></DigitButton>
        <DigitButton digit="8"></DigitButton>


        <DigitButton digit="9"></DigitButton>

        <DigitOperator operator="="/>
      </div>
    </div>
  );
}

export default App;
