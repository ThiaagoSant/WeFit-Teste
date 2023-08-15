import React from "react";
import CartIcon from "../../assets/icons/cartIcon.svg";
import { Header } from "./styles";
import { RoutesEnum } from "../../routes/routes";

interface PresentationProps {
  callback(route: string): void;
  total: number;
}

const Presentation = ({ callback, total }: PresentationProps) => {
  return (
    <Header>
      <p>WeMovies</p>

      <nav onClick={() => callback(RoutesEnum.Cart)}>
        <ul>
          <li>Meu Carrinho</li>
          <li>{total} Itens</li>
        </ul>

        <img src={CartIcon} />
      </nav>
    </Header>
  );
};

export default Presentation;
