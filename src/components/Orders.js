const Order = ({ orders, toturials, deletOrder }) => {
  const orderIds = Object.keys(orders);
  const totalPrice = orderIds.reduce((prevPrice, key) => {
    if (toturials[key] && toturials[key].status === "available") {
      return prevPrice + toturials[key].price * orders[key];
    } else {
      return prevPrice;
    }
  }, 0);

  const renderOreders = (key) => {
    return (
      <>
        <li key={key} style={{ padding: "20px", color: "darkblue" }}>
          <h2>{toturials[key].name}</h2>
          <h3>counts : {orders[key]}</h3>
          <button
            style={{
              backgroundColor: "coral",
              cursor: "pointer",
              margin: "10px",
              padding: "5px",
            }}
            onClick={() => deletOrder(key)}
          >
            Delete
          </button>
        </li>

        <hr />
      </>
    );
  };
  return (
    <div className="app-section">
      <h2 style={{ marginBottom: "10px" }}>orders</h2>

      <ul>
        {orderIds.map((key) => {
          if (toturials[key] && toturials[key].status === "available") {
            return renderOreders(key);
          } else {
            return <p key={key}>Toturial is not available</p>;
          }
        })}
      </ul>

      <h2 style={{ padding: "20px", color: "green", textAlign: "center" }}>
        {orderIds.length > 0 && `Total Price : ${totalPrice}`}
      </h2>
    </div>
  );
};

export default Order;
