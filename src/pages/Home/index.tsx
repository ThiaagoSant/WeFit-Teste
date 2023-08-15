import React, { useContext } from "react";
import Presentation from "./presentation";
import useGetProducts from "../../services/queries/useGetProducts";
import Card from "../../components/Card";

import { ShoppingCartContext } from "../../contexts/ShoppingCartContext";

interface HomeProps {}

const Home = (props: HomeProps) => {
  const { data: products, isLoading } = useGetProducts();
  const cartService = useContext(ShoppingCartContext);

  const renderCards = products?.map((product) => {
    const quantity = cartService.cart.find(
      ({ id }) => id === product.id
    )?.quantity;

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
