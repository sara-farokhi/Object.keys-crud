import { BrowserRouter, Route, Routes } from "react-router-dom";
import Shop from "./components/Shop";
import NotFound from "./components/NotFound";

import App from "./App";

import "./App.css";

const Routers = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Shop />}></Route>
          <Route path="/shop/:shopName" element={<App />}></Route>
          <Route path="/*" element={<NotFound />}></Route>
          <Route></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Routers;
