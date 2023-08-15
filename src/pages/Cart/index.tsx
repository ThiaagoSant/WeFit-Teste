import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import presentation from "./presentation";
import { ShoppingCartContext } from "../../contexts/ShoppingCartContext";
import TrashIcon from "../../assets/icons/trashIcon.png";
import PlusIcon from "../../assets/icons/plusIcon.png";
import MinusIcon from "../../assets/icons/minusIcon.png";

import {
  CardCart,
  CardCartMobile,
  ContentImg,
  ContentMobile,
  FormQuantityInput,
  QuantityMobile,
  SubTotalContent,
  SubTotalMobile,
  TrashContainer,
  TrashMobile,
} from "./styles";

const Cart = () => {
  const [match, setMatch] = React.useState<boolean | null>(null);

  React.useEffect(() => {
    const changeMatch = () => {
      const { matches } = window.matchMedia("(max-width: 670px)");
      setMatch(matches);
    };

    window.addEventListener("resize", changeMatch);

    return () => window.removeEventListener("resize", changeMatch);
  }, []);

  const { cart, total, removeToCart, addToCart, decreaseQuantity, clearCart } =
    useContext(ShoppingCartContext);
  const navigate = useNavigate();

  const renderCards = cart.map((product) =>
    match ? (
      <CardCartMobile>
        <figure>
          <img src={product.image} />
        </figure>

        <ContentMobile>
          <p>{product.title}</p>
          <p>
            {product.price.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}
          </p>

          <TrashMobile>
            <img onClick={() => removeToCart(product.id)} src={TrashIcon} />
          </TrashMobile>

          <QuantityMobile>
            <img onClick={() => decreaseQuantity(product.id)} src={MinusIcon} />
            <span>{product.quantity}</span>
            <img src={PlusIcon} onClick={() => addToCart(product)} />
          </QuantityMobile>

          <SubTotalMobile>
            <p>SUBTOTAL</p>
            <span>
              {(product.price * product.quantity).toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
              })}
            </span>
          </SubTotalMobile>
        </ContentMobile>
      </CardCartMobile>
    ) : (
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
              <img
                onClick={() => decreaseQuantity(product.id)}
                src={MinusIcon}
              />
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
    )
  );

  return React.createElement(presentation, {
    renderCards,
    total: total.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    }),
    clearCart,
    navigate,
    cart,
  });
};

export default Cart;
