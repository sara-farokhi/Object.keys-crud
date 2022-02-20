import { useState } from "react";

import Header from "./components/Header";
import Invintory from "./components/Invintory";
import Orders from "./components/Orders";
import Toturial from "./components/Toturial";
import Samples from "./components/samples";

const App = () => {
  const [toturials, setToturials] = useState({});
  const [orders, setOrdes] = useState({});
  const [keyIndex, setKeyIndex] = useState(1);

  const addnewToturial = (newToturial) => {
    let currentkeyIndex = keyIndex + 1;
    setKeyIndex(currentkeyIndex);
    const newToturials = { ...toturials };
    newToturials[`learn${keyIndex}`] = newToturial;
    setToturials(newToturials);
  };

  const uploadSamples = () => {
    let uplaods = { ...toturials };
    uplaods = Samples;
    setToturials(uplaods);
  };

  const addOrders = (key) => {
    const newOrders = { ...orders };
    newOrders[key] = newOrders[key] + 1 || 1;
    setOrdes(newOrders);
  };

  const updateToturials = (key, updates) => {
    const updateToturials = { ...toturials };
    updateToturials[key] = updates;
    setToturials(updateToturials);
  };
  const deleteToturial = (key) => {
    const updateToturials = { ...toturials };
    delete updateToturials[key];
    setToturials(updateToturials);
  };
  const deletOrder = (key) => {
    const updateOrders = { ...orders };
    delete updateOrders[key];
    setOrdes(updateOrders);
  };

  return (
    <div className="app-wrapper">
      <div className="app-section">
        <Header />
        {Object.keys(toturials).map((key) => {
          return (
            <Toturial
              key={key}
              index={key}
              details={toturials[key]}
              addOrders={addOrders}
            />
          );
        })}
      </div>
      <Orders orders={orders} toturials={toturials} deletOrder={deletOrder} />
      <Invintory
        addnewToturial={addnewToturial}
        uploadSamples={uploadSamples}
        toturials={toturials}
        updateToturials={updateToturials}
        deleteToturial={deleteToturial}
      />
    </div>
  );
};

export default App;
