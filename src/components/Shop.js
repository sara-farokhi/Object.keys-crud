import { useNavigate } from "react-router-dom";
import React, { useRef } from "react";

const Shop = () => {
  const entInput = useRef();
  const navigate = useNavigate();
  const submitHandler = (e) => {
    e.preventDefault();
    navigate(`/shop/${entInput.current.value}`);
  };
  return (
    <div className="wrapper">
      <div className="form-wrapper">
        <h1>Enter Shop Name</h1>
        <form onSubmit={submitHandler}>
          <input ref={entInput} defaultValue={"Welcome to Shop App"} />
        </form>
      </div>
    </div>
  );
};

export default Shop;
