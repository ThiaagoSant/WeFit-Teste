import React, { useContext } from "react";
import Presentation from "./presentation";
import useGetProducts from "../../services/queries/useGetProducts";
import Card from "../../components/Card";

import { ShoppingCartContext } from "../../contexts/ShoppingCartContext";
import { Product } from "../../services/types";

const Home = () => {
  const { data: products, isLoading } = useGetProducts();
  const cartService = useContext(ShoppingCartContext);
  const cartItems = cartService.cart;

  const renderCards = products?.map((product: Product) => {
    const quantity = cartItems.find(({ id }) => id === product.id)?.quantity;

    return (
      <Card
        key={product?.id}
        product={product}
        callback={() => cartService.addToCart(product)}
        quantity={quantity}
      />
    );
  });
  return React.createElement(Presentation, { isLoading, renderCards });
};

export default Home;
