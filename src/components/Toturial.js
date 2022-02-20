const Toturial = ({ index, details, addOrders }) => {
  const { name, desc, price, status, image } = details;
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
            onClick={() => {
              addOrders(index);
            }}
          >
            {status === "unavailable" ? "soldOut" : "buy"}
          </button>
        </div>
      </div>
    </>
  );
};

export default Toturial;
