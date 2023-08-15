import React from "react";
import { Container } from "../Home/styles";
import Header from "../../components/Header";
import Banner from "../../components/Banner";

import Vetor from "../../assets/icons/boyArt.png";
import { useNavigate } from "react-router-dom";
import { RoutesEnum } from "../../routes/routes";

const Purchased = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <Header />

      <Banner
        title="Compra realizada com sucesso!"
        img={Vetor}
        callback={() => navigate(RoutesEnum.Home)}
      />
    </Container>
  );
};

export default Purchased;
