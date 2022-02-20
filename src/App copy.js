import "./App.css";
import React, { Component } from "react";
import "./components/samples";
import Order from "./components/Order";
import Invintory from "./components/Invintory";
import samples from "./components/samples";
import Tutorial from "./components/Tutorial";

class App extends Component {
  state = {
    toturials: {},
    order: {},
  };

  i = 0;
  submitNewToturial = (newToturial) => {
    const updateCourses = { ...this.state.toturials };
    this.i++;
    updateCourses[`cousrse${this.i}`] = newToturial;
    this.setState(() => {
      return {
        toturials: updateCourses,
      };
    });
  };

  order = (key) => {
    const updateOrder = { ...this.state.order };
    updateOrder[key] = updateOrder[key] + 1 || 1;
    this.setState(() => {
      return {
        order: updateOrder,
      };
    });
  };
  loadSamples = () => {
    this.setState(() => {
      return {
        toturials: samples,
      };
    });
  };

  updateToturial = (key, updates) => {
    const updatedToturial = { ...this.state.toturials };
    updatedToturial[key] = updates;
    this.setState(() => {
      return {
        toturials: updatedToturial,
      };
    });
  };
  delToturial = (key) => {
    const Toturial = { ...this.state.toturials };
    delete Toturial[key];
    this.setState(() => {
      return {
        toturials: Toturial,
      };
    });
  };

  deleteOrder = (key) => {
    const order = { ...this.state.order };
    delete order[key];
    this.setState(() => {
      return {
        order: order,
      };
    });
  };

  render() {
    return (
      <div className="app-wrapper">
        <div className="app-section">
          <h1> Toturials</h1>
          <ul>
            {Object.keys(this.state.toturials).map((key) => {
              return (
                <Tutorial
                  key={key}
                  details={this.state.toturials[key]}
                  index={key}
                  order={this.order}
                />
              );
            })}
          </ul>
        </div>

        <Order
          order={this.state.order}
          toturials={this.state.toturials}
          deleteOrder={this.deleteOrder}
        />
        <Invintory
          submitNew={this.submitNewToturial}
          loadSamples={this.loadSamples}
          toturials={this.state.toturials}
          updateToturial={this.updateToturial}
          delToturial={this.delToturial}
        />
      </div>
    );
  }
}

export default App;
