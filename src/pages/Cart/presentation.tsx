import React from "react";
import { Container } from "../Home/styles";
import Header from "../../components/Header";

type PresentationProps = {};

const presentation = (props: PresentationProps) => {
  return (
    <Container>
      <Header />
    </Container>
  );
};

export default presentation;
