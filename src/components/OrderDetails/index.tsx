import * as S from "./style";
import ButtonToggle from "components/ButtonToggle";

const OrderDetails = () => {
  return (
    <S.OrderDetails>
      <S.OrderDetailsTitle>Detalhes do Pedido</S.OrderDetailsTitle>
      <S.OrderDetailsButtonGroup></S.OrderDetailsButtonGroup>
      <S.OrderDetailsList>
        <p>Itens do pedido</p>
      </S.OrderDetailsList>
      <S.OrderDetailsButtonGroup>
        <ButtonToggle active={true} value="Comer no local" />
        <ButtonToggle active={false} value="P/ viagem" />
        <ButtonToggle active={true} value="Delivery" />
      </S.OrderDetailsButtonGroup>
    </S.OrderDetails>
  );
};

export default OrderDetails;
