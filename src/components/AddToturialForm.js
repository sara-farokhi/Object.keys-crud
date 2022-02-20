import { useRef } from "react";

const AddToturialForm = ({ uploadSamples, addnewToturial }) => {
  const nameInput = useRef();
  const priceInput = useRef();
  const statusInput = useRef();
  const descInput = useRef();
  const imageInput = useRef();

  const handelSubmit = (e) => {
    e.preventDefault();
    const name = nameInput.current.value;
    const price = priceInput.current.value;
    const status = statusInput.current.value;
    const desc = descInput.current.value;
    const image = imageInput.current.value;
    const newToturial = {
      name,
      price,
      status,
      desc,
      image,
    };
    addnewToturial(newToturial);
    e.target.reset();
  };

  return (
    <>
      <div>
        <form className="inv-form" onSubmit={handelSubmit}>
          <input type="text" placeholder="name" ref={nameInput} />
          <input type="text" placeholder="price" ref={priceInput} />
          <select name="" id="" ref={statusInput}>
            <option value={"available"}> available</option>
            <option value={"unavailable"}> unavailable</option>
          </select>
          <input
            name="image"
            type="text"
            placeholder="image"
            ref={imageInput}
          />
          <textarea
            name=""
            placeholder="deccrioption"
            ref={descInput}
          ></textarea>

          <button>Add Toturials</button>
        </form>
        <button
          style={{ cursor: "pointer", padding: "5px" }}
          onClick={uploadSamples}
        >
          upload
        </button>
      </div>
    </>
  );
};

export default AddToturialForm;
