import { Icon, OrderComformedInfor, OrderInfor, Wrapper } from "./style";
import { Header } from "../../components/Header";
import finishedOrder from "../../assets/read-order.png";
import { CurrencyDollar, MapPin, Timer } from "@phosphor-icons/react";

const FinishedOrder = () => {
  return (
    <>
      <Header />
      <Wrapper>
        <OrderComformedInfor>
          <div>
            <h1>Uhu! Pedido confirmado</h1>
            <p>Agora é só aguardar que logo o café chegará até você</p>

            <OrderInfor>
              <div>
                <div className="order-details-wrapper">
                  <Icon $color="purple">
                    <MapPin color="#fff" weight="fill" size={18} />
                  </Icon>
                  <div className="order-details">
                    <h3>
                      Entrega em{" "}
                      <strong>Rua João Daniel Martinelli, 102</strong>
                    </h3>
                    <span>Farrapos - Porto Alegre, RS</span>
                  </div>
                </div>
                <div className="order-details-wrapper">
                  <Icon $color="yellow">
                    <Timer color="#fff" weight="fill" size={18} />
                  </Icon>
                  <div className="order-details">
                    <h3>Previsão de entrega </h3>
                    <span>20 min - 30 min</span>
                  </div>
                </div>
                <div className="order-details-wrapper">
                  <Icon $color="yellow-dark">
                    <CurrencyDollar color="#fff" size={18} />
                  </Icon>
                  <div className="order-details">
                    <h3>Pagamento na entrega </h3>
                    <span>Cartão de Crédito</span>
                  </div>
                </div>
              </div>
            </OrderInfor>
          </div>
          <div className="image-order">
            <img src={finishedOrder} alt="finished order image" />
          </div>
        </OrderComformedInfor>
      </Wrapper>
    </>
  );
};

export { FinishedOrder };
