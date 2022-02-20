import { useRef } from "react";

const ToturialEditForm = ({
  details,
  index,
  updateToturials,
  deleteToturial,
}) => {
  const { name, desc, image, status, price } = details;
  const nameInput = useRef();
  const priceInput = useRef();
  const statusInput = useRef();
  const descInput = useRef();
  const imageInput = useRef();

  const handleChange = (e) => {
    let updated = details;
    updated[e.target.name] = e.target.value;
    updateToturials(index, updated);
  };

  return (
    <div>
      <form className="inv-form">
        <input
          type="text"
          placeholder="name"
          name="name"
          ref={nameInput}
          defaultValue={name}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="price"
          name="price"
          ref={priceInput}
          defaultValue={price}
          onChange={handleChange}
        />
        <select
          name="status"
          ref={statusInput}
          defaultValue={status}
          onChange={handleChange}
        >
          <option value={"available"}> available</option>
          <option value={"unavailable"}> unavailable</option>
        </select>
        <input
          name="image"
          type="text"
          placeholder="image"
          ref={imageInput}
          defaultValue={image}
          onChange={handleChange}
        />
        <textarea
          name="desc"
          placeholder="deccrioption"
          ref={descInput}
          defaultValue={desc}
          onChange={handleChange}
        ></textarea>

        <button
          style={{ backgroundColor: "coral", cursor: "pointer" }}
          onClick={() => deleteToturial(index)}
        >
          Delete
        </button>
      </form>
      <hr />
    </div>
  );
};

export default ToturialEditForm;
