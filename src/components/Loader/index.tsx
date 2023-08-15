import loader from "../../assets/icons/Loader.png";
import { RotateContainer } from "./styles";

function Loader() {
  return (
    <RotateContainer>
      <img src={loader} alt="loader" />
    </RotateContainer>
  );
}

export default Loader;
