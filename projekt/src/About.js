import React, { Component } from "react";
import { InfoConsumer } from "./context";

class About extends Component {
  render() {
    return (
      <div className="container">
        <div className="row mt-5">
          <InfoConsumer>
            {(value) => {
              return <h2>{value}</h2>;
            }}
          </InfoConsumer>
        </div>
      </div>
    );
  }
}

export default About;
