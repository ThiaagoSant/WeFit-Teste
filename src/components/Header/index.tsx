import React, { useContext } from "react";
import Presentation from "./presentation";
import { useNavigate } from "react-router-dom";
import { ShoppingCartContext } from "../../contexts/ShoppingCartContext";

const Header = () => {
  const navigate = useNavigate();
  const halndleNavigate = (route: string) => navigate(route);
  const cartService = useContext(ShoppingCartContext);
  const total = cartService.cart?.length;

  return React.createElement(Presentation, {
    callback: halndleNavigate,
    total,
  });
};

export default Header;
