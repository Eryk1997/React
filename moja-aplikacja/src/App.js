import React from 'react';
import logo from './logo.svg';
import './App.css';

function Welcome(props){
  return <h1>Witaj, {props.name}</h1>
}


function App(){
  return(
    <div>
      <Welcome name="Eryk" />
      <Welcome name="Wojtek" />
      <Welcome name="Adrian" />
    </div>
  );
}


export default App;
