import Header from "../../components/Header";
import { CardsContainer, Container } from "./styles";
import Loader from "../../components/Loader";

interface PresentationProps {
  isLoading: boolean;
  renderCards: JSX.Element[] | undefined;
}

const Presentation = ({ renderCards, isLoading }: PresentationProps) => {
  return (
    <Container>
      <Header />

      {isLoading ? <Loader /> : <CardsContainer>{renderCards}</CardsContainer>}
    </Container>
  );
};

export default Presentation;
