import React, { Component } from "react";

class Tutorial extends Component {
  handleOrder = () => {
    this.props.order(this.props.index);
  };
  render() {
    const { name, desc, image, price, status } = this.props.details;

    return (
      <>
        <div className="toturial-wrapper">
          <div className="img-wrapper">
            <img src={image} alt="test" />
          </div>
          <div className="info">
            <h3>{name}</h3>
            <h4>{price}</h4>
            <p>{desc}</p>

            <button
              disabled={status === "unavailable" ? true : false}
              onClick={this.handleOrder}
            >
              {status === "available" ? "buy" : "soldOut"}
            </button>
          </div>
        </div>
      </>
    );
  }
}
export default Tutorial;
