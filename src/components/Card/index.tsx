import { ShoppingCartSimple } from "@phosphor-icons/react";
import coffe from "../../assets/coffe.svg";
import {
  ButtonControls,
  CoffeInfo,
  CoffeQuantity,
  CoffeType,
  CoffeWrapper,
  Icon,
  Price,
} from "./style";
import { flavors } from "../../pages/Home";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../contexts/cartContext";
import axios from "axios";
import { useNavigate } from "react-router";

type Coffe = {
  id: number;
  img?: string;
  title: string;
  description: string;
  type: flavors[];
  quantity: number;
  price: number;
};

type cartItem = {
  id: number;
  quantity: number;
  price: number;
  title: string;
};

export type coffeOnCart = {
  id: number;
  title: string;
  description: string;
  type: flavors[];
  quantity: number;
  price: number;
  coffeId: number;
};

const Card = ({ title, description, type, id, quantity, price }: Coffe) => {
  const { addMoreCoffe, removerCoffe } = useContext(CartContext);
  const [coffeOnCart, setCoffeOnCart] = useState<coffeOnCart[]>([]);

  const navigate = useNavigate();

  async function addItemtoCart({ quantity, price, title, id }: cartItem) {
    const isOnCart = coffeOnCart.find((cartItem) => cartItem.coffeId == id);

    if (!isOnCart) {
      await axios.post(`http://localhost:3000/coffeCart`, {
        coffeId: id,
        quantity,
        price,
        title,
      });

      await axios.patch(`http://localhost:3000/coffe/${id}`, {
        quantity: 0,
      });

      navigate("/order");

      return;
    }

    const quantityUpdated = isOnCart?.quantity + quantity;

    await axios.patch(`http://localhost:3000/coffeCart/${isOnCart.id}`, {
      quantity: quantityUpdated,
    });

    await axios.patch(`http://localhost:3000/coffe/${id}`, {
      quantity: 0,
    });

    navigate("/order");
    return;
  }

  useEffect(() => {
    async function getAllCofee() {
      const allCoffe = await axios.get(`http://localhost:3000/coffeCart`);

      setCoffeOnCart(allCoffe.data);
    }

    getAllCofee();
  }, []);

  return (
    <CoffeWrapper>
      <CoffeInfo>
        <img src={coffe} alt="" />

        <CoffeType>
          {type.map((item: flavors, index) => {
            return <span key={index}>{item.name}</span>;
          })}
        </CoffeType>
        <h2>{title}</h2>
        <p>{description}</p>

        <CoffeQuantity>
          <Price>{price}</Price>
          <div>
            <ButtonControls>
              <button onClick={() => removerCoffe(id, "coffe")}>-</button>
              <span>{quantity}</span>
              <button onClick={() => addMoreCoffe(id, "coffe")}>+</button>
            </ButtonControls>
            <Icon>
              <ShoppingCartSimple
                fill="#ffff"
                size={22}
                weight="fill"
                onClick={() => addItemtoCart({ quantity, price, title, id })}
              />
            </Icon>
          </div>
        </CoffeQuantity>
      </CoffeInfo>
    </CoffeWrapper>
  );
};

export { Card };
