import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

//Wprowadzenie do JSX
const name = "Gabi";
const element = <h1>hi, {name}</h1>;

function formatName(user){
  return user.firstName + ' ' + user.lastName;
}

const user = {
  firstName: "Gracjan",
  lastName: "Roztocki",
};

const element2 = (
  <h1>
    Witaj, {formatName(user)}
  </h1>
)

function getGreeting(user){
  if(user)
    return <h1>Witaj, {formatName(user)}</h1>
  return <h1>Witaj, nieznajomy</h1>
}

const element3 = (
  <h1>
    {getGreeting()}
  </h1>
)

ReactDOM.render(
  element3,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
