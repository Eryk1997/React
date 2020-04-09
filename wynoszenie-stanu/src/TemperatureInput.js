import React, { Component } from 'react'

const scaleNames = {
    c: "Celsjuszach",
    f: "Fahrenheitach",
  };

class TemperatureInput extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = { temperature: "" };
      }
    
      handleChange(e) {
        // Wcześniej było: this.setState({temperature: e.target.value});
        this.props.onTemperatureChange(e.target.value);
      }
    
      render() {
        // Wcześniej było: const temperature = this.state.temperature;
        const temperature = this.props.temperature;
        const scale = this.props.scale;
        return (
          <fieldset>
            <legend>Podaj temperaturę w {scaleNames[scale]}</legend>
            <input value={temperature} onChange={this.handleChange} />
          </fieldset>
        );
      }
}

export default TemperatureInput;