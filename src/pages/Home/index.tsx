import React from "react";
import Presentation from "./presentation";
import useGetAllProducts from "../../services/queries/useGetProducts";
import Card from "../../components/Card";

interface HomeProps {}

const Home = (props: HomeProps) => {
  const { data: products, isLoading } = useGetAllProducts();
  const renderCards = products?.map((product) => (
    <Card
      key={product?.id}
      product={product}
      callback={() => {}}
      quantity={0}
    />
  ));
  return React.createElement(Presentation, { isLoading, renderCards });
};

export default Home;
