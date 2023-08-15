import React, { useContext } from "react";
import presentation from "./presentation";
import { ShoppingCartContext } from "../../contexts/ShoppingCartContext";
import TrashIcon from "../../assets/icons/trashIcon.png";
import PlusIcon from "../../assets/icons/plusIcon.png";
import MinusIcon from "../../assets/icons/minusIcon.png";

import {
  CardCart,
  ContentImg,
  FormQuantityInput,
  SubTotalContent,
  TrashContainer,
} from "./styles";

const Cart = () => {
  const { cart, total, removeToCart, addToCart, decreaseQuantity } =
    useContext(ShoppingCartContext);

  const renderCards = cart.map((product) => (
    <CardCart key={product.id}>
      <ul>
        <li>
          PRODUTO
          <ContentImg>
            <img src={product.image} />

            <section>
              <p>{product.title}</p>
              <p>
                {product.price.toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}
              </p>
            </section>
          </ContentImg>
        </li>

        <li>
          QTD
          <FormQuantityInput>
            <img onClick={() => decreaseQuantity(product.id)} src={MinusIcon} />
            <span>{product.quantity}</span>
            <img src={PlusIcon} onClick={() => addToCart(product)} />
          </FormQuantityInput>
        </li>

        <SubTotalContent>
          SUBTOTAL
          <p>
            {(product.price * product.quantity).toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}
          </p>
        </SubTotalContent>

        <TrashContainer>
          <img onClick={() => removeToCart(product.id)} src={TrashIcon} />
        </TrashContainer>
      </ul>
    </CardCart>
  ));

  return React.createElement(presentation, {
    renderCards,
    total: total.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    }),
  });
};

export default Cart;
