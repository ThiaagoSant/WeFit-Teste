import { Product } from "../../services/types";
import shoppingCardIcon from "../../assets/icons/shoppingcartIcon.png";
import { Button, Content } from "./styles";

interface CardProps {
  product: Product | undefined;
  quantity: number | undefined;
  callback(): void;
}
const Card = ({ product, quantity, callback }: CardProps) => {
  const formattedNumber = product?.price.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  return (
    <Content>
      <figure>
        <img src={product?.image} />
      </figure>

      <p>{product?.title}</p>
      <p>{formattedNumber}</p>

      <Button
        disabled={quantity ? true : false}
        quantity={quantity}
        onClick={callback}
      >
        <div>
          <img src={shoppingCardIcon} />
          <p>{quantity ? 1 : 0}</p>
        </div>

        <p>{quantity ? "ITEM ADICIONADO" : "ADICIONAR AO CARRINHO"}</p>
      </Button>
    </Content>
  );
};

export default Card;
