import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { ContactsList } from "./ContactsList";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Users from "./Users";
import Home from "./Home";
import About from "./About";
import Description from "./Description";
export class App extends React.Component {
  state = {
    contacts: [],
  };

  componentDidMount() {
    fetch("https://randomuser.me/api/?format=json&results=10")
      .then((res) => res.json())
      .then((json) => this.setState({ contacts: json.results }));
  }

  render() {
    return (
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/contacts">Contacts</Link>
              </li>
              <li>
                <Link to="/users">Users</Link>
                <button onClick={console.log(this.state.contacts)}>
                  Kliknij
                </button>
              </li>
            </ul>
          </nav>

          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route>
              <About />
            </Route>
            <Route path="/contacts">
              <ContactsList contacts={this.state.contacts} />
            </Route>

            <Route path="/users">
              <Users />
            </Route>
            <Route path="/description" component={Description} />
          </Switch>
        </div>
      </Router>
    );
  }
}
