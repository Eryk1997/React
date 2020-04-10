import React from "react";
//import { Dialog } from './Dialog';

function FancyBorder(props) {
    return (
      <div className={"FancyBorder FancyBorder-" + props.color}>
        {props.children}
      </div>
    );
  }

function Dialog(props){
    return(
      <FancyBorder color="blue">
        <h1 className="Dialog-tittle">
          {props.title}
        </h1>
        <p className="Dialog-message">
          {props.message}
        </p>
        {props.children}
      </FancyBorder>
    );
  }


class SignupDialog extends React.Component{
    constructor(props){
      super(props);
      this.handleChange = this.handleChange.bind(this);
      this.handleSignUp = this.handleSignUp.bind(this);
      this.state = {login: ""};
    }
  
    render(){
      return(
        <Dialog title="Program Eksploracji Marsa"
        message="Jak się do Ciebie zwracać?">
          <input value={this.state.login}
            onChange={this.handleChange} />
            <button onClick={this.handleSignUp}>
              Zapisz się!
            </button>
        </Dialog>
      );
    }
  
    handleChange(e){
      this.setState({login: e.target.value});
    }
  
    handleSignUp(){
      alert(`Witaj na pokładzie, ${this.state.login}!`);
    }
  }

export default SignupDialog;