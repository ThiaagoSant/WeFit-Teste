import { Container } from "../Home/styles";
import Header from "../../components/Header";
import { ContentCardCart } from "./styles";

interface PresentationProps {
  renderCards: JSX.Element[];
  total: string;
}

const presentation = ({ renderCards, total }: PresentationProps) => {
  return (
    <Container>
      <Header />

      <ContentCardCart>
        {renderCards}

        <footer>
          <button>FINALIZAR PEDIDO</button>

          <div>
            <p>TOTAL</p>
            <span>{total}</span>
          </div>
        </footer>
      </ContentCardCart>
    </Container>
  );
};

export default presentation;
