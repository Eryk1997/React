import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import App from "./App";

//Wprowadzenie do JSX
const name = "Gabi";
const element = <h1>hi, {name}</h1>;

function formatName(user) {
  return user.firstName + " " + user.lastName;
}

const user = {
  firstName: "Gracjan",
  lastName: "Roztocki",
};

const element2 = <h1>Witaj, {formatName(user)}</h1>;

function getGreeting(user) {
  if (user) return <h1>Witaj, {formatName(user)}</h1>;
  return <h1>Witaj, nieznajomy</h1>;
}

const element3 = <h1>{getGreeting()}</h1>;

//Renderwoanie elementow
const element4 = <h1>Witaj</h1>;

function tick() {
  const element5 = (
    <div>
      <h1>Witaj</h1>
      <h2>Aktualny czas: {new Date().toLocaleTimeString()}.</h2>
    </div>
  );
  ReactDOM.render(element5, document.getElementById("renderowanie"));
}
setInterval(tick, 1000);

ReactDOM.render(element3, document.getElementById("root"));

ReactDOM.render(element4, document.getElementById("renderowanie"));

//Komponenty i wlasciwosci
function Avatar(props) {
  return (
    <img className="Avatar" src={props.user.avatarUrl} alt={props.user.name} />
  );
}

function UserInfo(props) {
  return (
    <div className="UserInfo">
      {" "}
      <Avatar user={props.user} />{" "}
      <div className="UserInfo-name"> {props.user.name} </div>{" "}
    </div>
  );
}

function Comment(props) {
  return (
    <div className="Comment">
      <UserInfo user={props.author} />{" "}
      <div className="Comment-text">{props.text}</div>
      <div className="Comment-date">{props.date}</div>
    </div>
  );
}

const authorTest = {
  name: "ERYK",
  avatarUrl: "test",
};
const text2 = {
  text: "jakis tam text",
  date: new Date(),
};

const text3 = "aaa";

const author = (
  <Comment
    author={authorTest}
    text={text3}
    date={new Date().toLocaleTimeString()}
  />
);

ReactDOM.render(author, document.getElementById("komponenty"));

//Stan i cykl zycia
class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({ date: new Date() });
  }
  render() {
    return (
      <div>
        <h1>Witaj, świecie!</h1>
        <h2>Aktualny czas: {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

function App2() {
  return (
    <div>
      <Clock />
      <Clock />
      <Clock />
    </div>
  );
}

ReactDOM.render(<App2 />, document.getElementById("stan"));

//Obsluga zdarzen
class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isToggleOn: true };

    // Poniższe wiązanie jest niezbędne do prawidłowego przekazania `this` przy wywołaniu funkcji
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState((state) => ({
      isToggleOn: !state.isToggleOn,
    }));
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        {this.state.isToggleOn ? "WŁĄCZONY" : "WYŁĄCZONY"}
      </button>
    );
  }
}
ReactDOM.render(<Toggle />, document.getElementById("zdarzenie"));

//renderowanie warunkowe
function UserGreeting(props) {
  return <h1>Witamy ponownie!</h1>;
}

function GuestGreeting(props) {
  return <h1>Proszę się zarejestrować.</h1>;
}
function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <UserGreeting />;
  }
  return <GuestGreeting />;
}

function LoginButton(props) {
  return <button onClick={props.onClick}>Zaloguj się</button>;
}

function LogoutButton(props) {
  return <button onClick={props.onClick}>Wyloguj się</button>;
}

class LoginControl extends React.Component {
  constructor(props) {
    super(props);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.state = { isLoggedIn: false };
  }

  handleLoginClick() {
    this.setState({ isLoggedIn: true });
  }

  handleLogoutClick() {
    this.setState({ isLoggedIn: false });
  }

  render() {
    const isLoggedIn = this.state.isLoggedIn;
    let button;
    if (isLoggedIn) {
      button = <LogoutButton onClick={this.handleLogoutClick} />;
    } else {
      button = <LoginButton onClick={this.handleLoginClick} />;
    }

    return (
      <div>
        <Greeting isLoggedIn={isLoggedIn} />
        {button}
      </div>
    );
  }
}

function Mailbox(props) {
  const unreadMessage = props.unreadMessage;
  return (
    <div>
      <h1>Czesc</h1>
      {unreadMessage.length > 0 && (
        <h2>Masz {unreadMessage.length} nieprzeczytanych wiadomosc.</h2>
      )}
    </div>
  );
}

const messages = ["react", "re: aaa", "text"];
ReactDOM.render(
  <Mailbox unreadMessage={messages} />,
  document.getElementById("message")
);

ReactDOM.render(
  <LoginControl />,
  document.getElementById("renderowanie_warunkowe")
);

function WarningBanner(props) {
  if (!props.warn) {
    return null;
  }
  return <div className="warning">Ostrzeżenie!</div>;
}

class Page extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showWarning: true };
    this.handleToggleClick = this.handleToggleClick.bind(this);
  }

  handleToggleClick() {
    this.setState((state) => ({
      showWarning: !state.showWarning,
    }));
  }

  render() {
    return (
      <div>
        <WarningBanner warn={this.state.showWarning} />{" "}
        <button onClick={this.handleToggleClick}>
          {this.state.showWarning ? "Ukryj" : "Pokaż"}
        </button>
      </div>
    );
  }
}

ReactDOM.render(<Page />, document.getElementById("page"));

//ReactDOM.render(
// Spróbuj zmienić na isLoggedIn={true}:
//  <Greeting isLoggedIn={false} />,
// document.getElementById("renderowanie_warunkowe")
//);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
