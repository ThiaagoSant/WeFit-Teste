import { Container } from "./styles";
import { useLocation } from "react-router-dom";
import { RoutesEnum } from "../../routes/routes";

interface BannerProps {
  title: string;
  img: string;
  callback(): void;
}

const Banner = ({ title, img, callback }: BannerProps) => {
  const location = useLocation();

  return (
    <Container title={location.pathname === RoutesEnum.Purchased}>
      <div>
        <h2>{title}</h2>

        <img src={img} />

        <button onClick={callback}>VOLTAR</button>
      </div>
    </Container>
  );
};

export default Banner;
