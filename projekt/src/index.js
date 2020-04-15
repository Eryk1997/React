import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import { App } from "./App";
import { InfoProvider } from "./context";

ReactDOM.render(
  <InfoProvider>
    <App />,
  </InfoProvider>,
  document.getElementById("root5")
);

//2
/*
function Show() {
  alert("Klikniet");
}

function ShowButton() {
  return <button onClick={Show}>Kliknij tutaj</button>;
}

ReactDOM.render(<ShowButton />, document.getElementById("root2"));

//3

class Click extends React.Component {
  render() {
    return <button onClick={this.ShowText}>Kliknij w przycisk</button>;
  }

  ShowText() {
    alert("Kliknieto tutaj w przycisk");
  }
}

ReactDOM.render(<Click />, document.getElementById("root3"));

//4

class Test extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: 0};
    this.handleButton = this.handleButton.bind(this);
  }

  handleButton() {
      //this.setState({value: Math.random()})
      this.setState({value: this.state.value + 1})
      console.log(this.state.value);
  }

  render() {
    return (
      <div>
        <button onMouseOver={this.GiveMeText}>Najedz na mnie</button>
        <button onClick={this.handleButton}>Zwieksz</button>
      </div>
    );
  }

  GiveMeText(e) {
    e.preventDefault();
    console.log("Test");
  }
}

ReactDOM.render(<Test />, document.getElementById("root4"));



//listy


const UserList = ({ users }) => {
  if(users.length > 0){
  return(
    <ul>
      {users.map(user => <li key={user}>{user}</li>)}
    </ul>
  )
  }
  return (
    <p>No results!</p>
  )
}


const allUsers = ['Michal', 'Kasia', 'Jacek', 'Marta', 'Tomek', 'Ania'];
class App extends React.Component{
  constructor(){
    super();

    this.state = {
      filteredUsers: allUsers
    };
  }

  filteredUsers(e){
    const text = e.currentTarget.value;
    const filteredUsers = this.getFilteredUsersForText(text);
    this.setState({filteredUsers});
  }

  getFilteredUsersForText(text){
    return allUsers.filter(user => user.toLowerCase().includes(text.toLowerCase()));
  }

  render(){
    return(
      <div>
        <input onInput={this.filteredUsers.bind(this)} />
        <UserList users={this.state.filteredUsers} />
      </div>
    )
  }
}

export default App;

*/

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
