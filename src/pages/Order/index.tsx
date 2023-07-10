import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from "@phosphor-icons/react";
import { Header } from "../../components/Header";
import {
  AddressForm,
  ButtonConfirm,
  Cart,
  FormTitle,
  InforBox,
  OrderWrapper,
  PaymentTypes,
  Title,
} from "./style";
import { Input } from "../../components/Form/Input/Input";
import { Button } from "../../components/Buttons/Button";
import { CartItem } from "../../components/Cart-Item/CartItem";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { coffeOnCart } from "../../components/Card";
import { CartContext } from "../../contexts/cartContext";

const Order = () => {
  const [itemCart, setItemCart] = useState<coffeOnCart[]>([]);
  const {quantityCoffe} = useContext(CartContext)

  let totalItems = 0;

  async function coffesOnCart() {
    const coffesOnCart = await axios.get(`http://localhost:3000/coffeCart`);

    setItemCart(coffesOnCart.data);
  }

  for (let i = 0; i < itemCart.length; i++) {
    totalItems = totalItems + itemCart[i].price * itemCart[i].quantity;
  }

  useEffect(() => {
    coffesOnCart();
  }, [quantityCoffe]);

  return (
    <div>
      <Header />
      <OrderWrapper>
        <InforBox>
          <div>
            <h2>Complete seu pedido</h2>

            <AddressForm>
              <FormTitle>
                <Title>
                  <MapPinLine fill="#C47F17" size={22} display="inline" />
                  <div>
                    <h3>Endereço de Entrega</h3>
                  </div>
                </Title>
                <p>Informe o endereço onde deseja receber seu pedido</p>
              </FormTitle>

              <form>
                <Input
                  type="number"
                  placeholder="CEP"
                  name="cep"
                  width={"10.7rem"}
                />
                <Input
                  type="text"
                  placeholder="Rua"
                  name="cep"
                  width={"33rem"}
                />
                <div>
                  <Input
                    type="number"
                    placeholder="Número"
                    name="cep"
                    width={"10.7rem"}
                  />
                  <Input
                    type="text"
                    placeholder="Complemento"
                    name="cep"
                    width={"21.75rem"}
                  />
                </div>

                <div>
                  <Input
                    type="text"
                    placeholder="Bairro"
                    name="cep"
                    width={"10.7rem"}
                  />
                  <Input
                    type="text"
                    placeholder="Cidade"
                    name="cep"
                    width={"17rem"}
                  />
                  <Input
                    type="text"
                    placeholder="UF"
                    name="cep"
                    width={"41px"}
                  />
                </div>
              </form>
            </AddressForm>
          </div>

          <AddressForm>
            <FormTitle>
              <Title>
                <CurrencyDollar size={22} fill="#8047F8" />
                <div>
                  <h3>Pagamento</h3>
                </div>
              </Title>
              <p>
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </p>
            </FormTitle>

            <PaymentTypes>
              <Button
                text="Cartão de crédito"
                icon={<CreditCard size={16} fill="#8047F8" />}
              />
              <Button
                text="cartão de débito"
                icon={<Bank size={16} fill="#8047F8" />}
              />
              <Button
                text="dinheiro"
                icon={<Money size={16} fill="#8047F8" />}
              />
            </PaymentTypes>
          </AddressForm>
        </InforBox>

        <Cart>
          <h2>Cafés selecionados</h2>
          <div className="cart-box">
            {itemCart?.map((item: any) => {
              return (
                <CartItem
                  key={item.id}
                  title={item.title}
                  price={item.price}
                  quantity={item.quantity}
                  id={item.id}
                />
              );
            })}

            <div className="order-prices">
              <div>
                <span className="total-items-text">Total de itens</span>
                <span className="total-items-price">{totalItems.toFixed(2)}</span>
              </div>
              <div>
                <span className="shipping-tax">Entrega</span>
                <span className="shipping-tax-price">R$ 29,70</span>
              </div>
              <div>
                <span className="total">Total</span>
                <span className="total-price">R$ 29,70</span>
              </div>
            </div>
            <ButtonConfirm>Confirmar pedido</ButtonConfirm>
          </div>
        </Cart>
      </OrderWrapper>
    </div>
  );
};

export { Order };
