import React, { Component } from "react";

export default class Order extends Component {
  // renderOrders = (key) => {
  //   const { name, price } = this.props.toturials[key];
  //   const buyedNum = this.props.order[key];

  //   return (
  //     <li>
  //       Name :{name}
  //       <br /> Price: {price} <br /> numbers: {buyedNum} <hr />
  //     </li>
  //   );
  // };

  render() {
    const orders = Object.keys(this.props.order);
    const toturials = Object.keys(this.props.toturials);

    const TotalPrice = orders.reduce((prevTotal, key) => {
      const buyedNum = this.props.order[key];
      if (
        this.props.toturials[key] &&
        this.props.toturials[key].status === "available"
      ) {
        return prevTotal + buyedNum * this.props.toturials[key].price;
      } else {
        return prevTotal;
      }
    }, 0);
    return (
      <div className="app-section">
        <h2>orders</h2>
        <hr />
        {/* <ul>{orders.map(this.renderOrders)}</ul> */}
        <ul>
          {orders.map((key) => {
            const buyedNum = this.props.order[key];
            if (
              this.props.toturials[key] &&
              this.props.toturials[key].status === "available"
            ) {
              return (
                <>
                  <li
                    style={{
                      color: "darkblue",
                      // textAlign: "center",
                      padding: "30px",
                      borderBottom: "1px solid gray",
                    }}
                    key={key}
                  >
                    <h4 style={{ marginBottom: "10px" }}>
                      Name :{this.props.toturials[key].name}
                    </h4>
                    <h4 style={{ marginBottom: "10px" }}>
                      Price: {this.props.toturials[key].price}
                    </h4>
                    <h4>numbers: {buyedNum}</h4>

                    <button
                      style={{
                        backgroundColor: "coral",
                        cursor: "pointer",
                        margin: "10px",
                        padding: "5px",
                      }}
                      onClick={() => {
                        this.props.deleteOrder(key);
                      }}
                    >
                      delete order
                    </button>
                  </li>
                </>
              );
            } else {
              return (
                <>
                  <li
                    key={key}
                    style={{
                      color: "coral",
                      padding: "30px",
                      borderBottom: "1px solid gray",
                    }}
                  >
                    <h4>
                      {/* {this.props.toturials[key].name}  */}
                      toturial is not available anymore
                    </h4>
                  </li>
                </>
              );
            }
          })}
        </ul>
        <h3 style={{ color: "green", textAlign: "center", marginTop: "30px" }}>
          {TotalPrice != 0 ? "Total Price" + TotalPrice : null}
        </h3>
      </div>
    );
  }
}
