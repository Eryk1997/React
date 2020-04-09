import React, { Component } from 'react'
import TemperatureInput from './TemperatureInput';
import toCelsius from './toCelsius';
import { toFahrenheit } from './toFahrenheit';   
import { tryConvert } from './tryConvert';

function BoilingVerdict(props) {
    if (props.celsius >= 100) {
      return <p>Woda będzie się gotować</p>;
    }
    return <p>Woda nie będzie się gotować</p>;
  }
  
class Calculator extends React.Component {
    constructor(props) {
      super(props);
      this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
      this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
      this.state = { temperature: "", scale: "c" };
    }
  
    // handleChange(e){
    //   this.setState({temperature: e.target.value});
    // }
  
    handleCelsiusChange(temperature) {
      this.setState({ scale: "c", temperature });
    }
  
    handleFahrenheitChange(temperature) {
      this.setState({ scale: "f", temperature });
    }
  
    render() {
      //const temperature = this.state.temperature;
      const scale = this.state.scale;
      const temperature = this.state.temperature;
      const celsius =
        scale === "f" ? tryConvert(temperature, toCelsius) : temperature;
      const fahrenheit =
        scale === "c" ? tryConvert(temperature, toFahrenheit) : temperature;
      return (
        <div>
          <TemperatureInput
            scale="c"
            temperature={celsius}
            onTemperatureChange={this.handleCelsiusChange}
          />
          <TemperatureInput
            scale="f"
            temperature={fahrenheit}
            onTemperatureChange={this.handleFahrenheitChange}
          />
          <BoilingVerdict celsius={parseFloat(celsius)} />
        </div>
        /*<fieldset>
          <legend>Podaj temperaturę w Celsjuszach: </legend>
          <input 
          value={temperature}
          onChange={this.handleChange} />
          <BoilingVerdict 
          celsius={parseFloat(temperature)} />
        </fieldset>
        */
      );
    }
  }

  export default Calculator;