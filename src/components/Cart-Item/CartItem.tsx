import { Trash } from "@phosphor-icons/react";
import coffe from "../../assets/coffe.svg";
import { Wrapper } from "./style";
import axios from "axios";
import {useContext, useState } from "react";
import { CartContext } from "../../contexts/cartContext";

interface ICartItemProps {
  title: string;
  quantity: number;
  price: number;
  id: number;
}

const CartItem = ({ title, quantity, price, id }: ICartItemProps) => {
  const totalPrice = price * quantity;
  const [quantityCoffeUpdated, setQuantityCoffeUpdated] = useState(0);
  const {addMoreCoffe} = useContext(CartContext)

  async function addMoreCoffeonCart(id: number) {

    const coffe = await axios.get(`http://localhost:3000/coffeCart/${id}`);

    const coffeQuantityUpdated = coffe.data.quantity + 1;
    setQuantityCoffeUpdated(coffeQuantityUpdated);

    await axios.patch(`http://localhost:3000/coffeCart/${id}`, {
      quantity: coffeQuantityUpdated,
    });

    return;
  }

  async function removerCoffeOnCart(id: number) {
    const coffe = await axios.get(`http://localhost:3000/coffeCart/${id}`);

    const coffeQuantityUpdated = coffe.data.quantity - 1;
    setQuantityCoffeUpdated(coffeQuantityUpdated);

    await axios.patch(`http://localhost:3000/coffeCart/${id}`, {
      quantity: quantityCoffeUpdated,
    });
    return;
  }



  return (
    <Wrapper>
      <div className="item-Wrapper">
        <div className="cart-infor">
          <img src={coffe} alt="" />
          <div className="item-infor">
            <h3>{title}</h3>
            <div className="buttons">
              <div className="buttonControls">
                <button onClick={() => removerCoffeOnCart(id)}>-</button>
                <span>{quantity}</span>
                <button onClick={() => addMoreCoffe(id, "coffeCart")}>+</button>
              </div>
              <button className="remove-item-button">
                <Trash size={20} fill="#8047F8" /> <span>Remover</span>
              </button>
            </div>
          </div>
          <span className="price">R$ {totalPrice.toFixed(2)}</span>
        </div>
      </div>
      <hr></hr>
    </Wrapper>
  );
};

export { CartItem };
