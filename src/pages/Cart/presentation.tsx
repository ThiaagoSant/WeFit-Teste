import { Container } from "../Home/styles";
import Header from "../../components/Header";
import { ContentCardCart } from "./styles";
import { Product } from "../../services/types";
import Banner from "../../components/Banner";
import Vetor from "../../assets/icons/girlArt.png";
import { RoutesEnum } from "../../routes/routes";

interface PresentationProps {
  renderCards: JSX.Element[];
  total: string;
  clearCart(navigate: any): void;
  navigate: any;
  cart: Product[];
}

const presentation = ({
  renderCards,
  total,
  clearCart,
  navigate,
  cart,
}: PresentationProps) => {
  return (
    <Container>
      <Header />

      {cart?.length ? (
        <>
          <ContentCardCart>
            <div>{renderCards}</div>

            <footer>
              <button onClick={() => clearCart(navigate)}>
                FINALIZAR PEDIDO
              </button>

              <div>
                <p>TOTAL</p>
                <span>{total}</span>
              </div>
            </footer>
          </ContentCardCart>
        </>
      ) : (
        <Banner
          title="Parece que não há nada por aqui :("
          img={Vetor}
          callback={() => navigate(RoutesEnum.Home)}
        />
      )}
    </Container>
  );
};

export default presentation;
