import { Routes, Route, BrowserRouter } from "react-router-dom";
import Shop from "./components/Shop";
import App from "./App";
import NotFound from "./components/NotFound";

const Routers = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Shop />}></Route>
          <Route path="/shop/:shop" element={<App />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};
export default Routers;
