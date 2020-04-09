import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

class NameFrom extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    alert("Podano nastepujce imie: " + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Imie:
          <input
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
          />
        </label>
        <input type="submit" value="Wyślij" />
      </form>
    );
  }
}

ReactDOM.render(
  <NameFrom />,
  document.getElementById("komponenty_kontrolowane")
);

//2
class EasyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "Proszę napisac wypracowanie" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    alert("Wysłano nastepujace wypracowanie: " + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Wypracowanie:
          <textarea value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Wyślij" />
      </form>
    );
  }
}

ReactDOM.render(<EasyForm />, document.getElementById("textareaDiv"));

//3
class FlavorForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "kokosowy" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }
  handleSubmit(event) {
    alert("Twój ulubiony smak to: " + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Wybierz swój ulubiony smak:
          <select value={this.state.value} onChange={this.handleChange}>
            {" "}
            <option value="grejpfrutowy">Grejpfrutowy</option>
            <option value="limonkowy">Limonkowy</option>
            <option value="kokosowy">Kokosowy</option>
            <option value="mango">Mango</option>
          </select>
        </label>
        <input type="submit" value="Wyślij" />
      </form>
    );
  }
}

ReactDOM.render(<FlavorForm />, document.getElementById("selectDiv"));



//4


class Reservation extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      isGoing: true,
      nummerOfGuests: 2
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event){
    const target = event.target;
    const value = target.name === "isGoing" ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  render(){
    return(
      <form>
        <label>
          Wybiera się:
          <input 
          name="isGoing"
          type="checkbox"
          checked={this.state.isGoing}
          onChange={this.handleInputChange}
          />
        </label>
        <br />
        <label>
          Liczba gości:
          <input
          name="numberOFGuests"
          type="number"
          value={this.state.nummerOfGuests}
          onChange={this.handleInputChange}
          />
        </label>
      </form>
    );
  }
}

ReactDOM.render(
  <Reservation />,
  document.getElementById('inputDiv')
)













// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
