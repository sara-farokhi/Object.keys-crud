import React, { Component } from "react";
import AddToturialForm from "./AddToturialForm";
import ToturialEditForm from "./ToturialEditForm";

// CLASS COMPONENT

class Invintory extends Component {
  render() {
    const toturials = Object.keys(this.props.toturials);
    return (
      <div className="app-section">
        <h2>Invintory</h2>
        <hr />
        <h3 style={{ margin: "10px" }}>Edit Inventories</h3>
        {toturials.map((key) => {
          return (
            <ToturialEditForm
              key={key}
              details={this.props.toturials[key]}
              index={key}
              updateToturial={this.props.updateToturial}
              delToturial={this.props.delToturial}
            />
          );
        })}
        <h3 style={{ margin: "10px" }}>Create New Inventory</h3>

        <AddToturialForm submitNew={this.props.submitNew} />
        <hr />
        <button
          onClick={this.props.loadSamples}
          style={{ marginBottom: "10px" }}
        >
          Load Samples
        </button>
      </div>
    );
  }
}

export default Invintory;

// const Invintory = () => {
//   return (
//     <div className="app-section">
//       <h2>Invintory</h2>
//     </div>
//   );
// };

// export default Invintory;
