import React from "react";
import Presentation from "./presentation";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const halndleNavigate = (route: string) => navigate(route);

  return React.createElement(Presentation, { callback: halndleNavigate });
};

export default Header;
