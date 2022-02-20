import AddToturialForm from "./AddToturialForm";
import ToturialEditForm from "./ToturialEditForm";

const Invintory = ({
  addnewToturial,
  uploadSamples,
  toturials,
  updateToturials,
  deleteToturial,
}) => {
  return (
    <div className="app-section">
      <h2>Invintories</h2>
      <AddToturialForm
        addnewToturial={addnewToturial}
        uploadSamples={uploadSamples}
      />
      {Object.keys(toturials).map((key) => (
        <ToturialEditForm
          details={toturials[key]}
          index={key}
          key={key}
          updateToturials={updateToturials}
          deleteToturial={deleteToturial}
        />
      ))}
    </div>
  );
};

export default Invintory;
