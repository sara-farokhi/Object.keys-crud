import "../App.css";
// import React from "react";
import { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";

const Shop = () => {
  const inputValue = useRef();
  const navigate = useNavigate();
  const submitHandler = (e) => {
    e.preventDefault();

    const currentShop = inputValue.current.value;
    navigate(`/shop/${currentShop}`);
  };
  return (
    <>
      <div className="wrapper">
        <div className="form-wrapper">
          <h1>Enter Shop Name</h1>
          <form onSubmit={submitHandler} action="">
            <input
              ref={inputValue}
              type="text"
              defaultValue={"test"}
              required
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default Shop;
