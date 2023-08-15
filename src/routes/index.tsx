import Cart from "../pages/Cart";
import Home from "../pages/Home";
import Purchased from "../pages/Purchased";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { RoutesEnum } from "./routes";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={RoutesEnum.Home} element={<Home />} />
        <Route path={RoutesEnum.Cart} element={<Cart />} />
        <Route path={RoutesEnum.Purchased} element={<Purchased />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
