import react from "react";
import React, { Component } from "react";

class AddToturialForm extends Component {
  inputName = React.createRef();
  inputPrice = React.createRef();
  InputOptions = React.createRef();
  imageRef = React.createRef();
  descirption = React.createRef();

  submitHandeler = (e) => {
    // { name, desc, image, price, status }

    e.preventDefault();
    const name = this.inputName.current.value;
    const price = this.inputPrice.current.value;
    const status = this.InputOptions.current.value;
    const image = this.imageRef.current.value;
    const desc = this.descirption.current.value;
    const newCourse = {
      name,
      price,
      status,
      image,
      desc,
    };
    this.props.submitNew(newCourse);
    e.target.reset();
  };

  render() {
    return (
      <div>
        <form className="inv-form" onSubmit={this.submitHandeler}>
          <input type="text" ref={this.inputName} placeholder="name" />
          <input type="text" ref={this.inputPrice} placeholder="price" />
          <select name="" id="" ref={this.InputOptions}>
            <option value={"available"}> available</option>
            <option value={"unavailable"}> unavailable</option>
          </select>
          <input
            ref={this.imageRef}
            name="image"
            type="text"
            placeholder="image"
          />
          <textarea
            name=""
            ref={this.descirption}
            placeholder="deccrioption"
          ></textarea>

          <button>Add Toturials</button>
        </form>
      </div>
    );
  }
}
export default AddToturialForm;
