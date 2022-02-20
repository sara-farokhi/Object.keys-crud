import React, { Component } from "react";

class ToturialEditForm extends Component {
  delTot = () => {
    this.props.delToturial(this.props.index);
  };

  handleChange = (e) => {
    const newUpdates = { ...this.props.details };
    newUpdates[e.currentTarget.name] = e.currentTarget.value;
    this.props.updateToturial(this.props.index, newUpdates);
  };

  render() {
    const { name, price, desc, image, status } = this.props.details;

    return (
      <>
        <h4>{name}</h4>
        <form className="inv-form">
          <input
            type="text"
            placeholder="name"
            defaultValue={name}
            name="name"
            onChange={this.handleChange}
          />
          <input
            type="text"
            placeholder="price"
            defaultValue={price}
            name="price"
            onChange={this.handleChange}
          />
          <select
            name="status"
            id=""
            defaultValue={status}
            onChange={this.handleChange}
          >
            <option value="available">available</option>
            <option value="unavailable">unavailable</option>
          </select>
          <input
            name="image"
            type="text"
            placeholder="image"
            defaultValue={image}
            onChange={this.handleChange}
          />
          <textarea
            placeholder="deccrioption"
            name="desc"
            defaultValue={desc}
            onChange={this.handleChange}
          ></textarea>
        </form>

        <button
          style={{
            backgroundColor: "coral",
            marginBottom: "20px",
            padding: "10px",
            cursor: "pointer",
          }}
          onClick={this.delTot}
        >
          DELETE
        </button>
        <hr></hr>
      </>
    );
  }
}
export default ToturialEditForm;
