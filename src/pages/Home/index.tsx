import { Header } from "../../components/Header";
import {
  CatalogTitle,
  CoffeCard,
  CoffeCatalog,
  Icons,
  LeftContent,
  MainContent,
  MainText,
  RightContent,
} from "./style";
import { Coffee, Package, ShoppingCart, Timer } from "@phosphor-icons/react";
import { Card } from "../../components/Card";
import axios from "axios";
import bigCoffe from "../../assets/Imagem.svg";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../contexts/cartContext";



export type coffeType = {
  id:number;
  img?: string;
  title: string;
  description: string;
  type: flavors[];
  quantity:number
  price:number
};

export type flavors = {
  id: number;
  name: string;
};

const Home = () => {
  const [coffes, setCoffe] = useState<coffeType[]>([]);
  const {quantityCoffe} = useContext(CartContext)

  

  useEffect(() => {
    async function getAllCoffe() {
      try {
        const coffeData = await axios.get("http://localhost:3000/coffe");

        setCoffe(coffeData.data);
        
      } catch (error) {
        throw new Error("algo deu errado" + error);
      }
    }
    getAllCoffe();
  }, [quantityCoffe]);

  return (
    <div>
      <Header />

      <MainContent>
        <LeftContent>
          <MainText>
            <h1>Encontre o café perfeito para qualquer hora do dia</h1>
            <p>
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </p>
          </MainText>

          <Icons>
            <div>
              <ShoppingCart fill="#C47F17" size={32} />
              <span>Compra simples e segura</span>
            </div>
            <div>
              <Package size={32} radius={6} />
              <span>Embalagem mantém o café intacto</span>
            </div>
            <div>
              <Timer size={32} />
              <span>Entrega rápida e rastreada</span>
            </div>
            <div>
              <Coffee size={32} />
              <span>O café chega fresquinho até você</span>
            </div>
          </Icons>
        </LeftContent>

        <RightContent>
          <img src={bigCoffe} alt="coffe" />
        </RightContent>
      </MainContent>

      <CoffeCatalog>
        <CatalogTitle>Nossos cafés</CatalogTitle>

        <CoffeCard>
          {coffes.map((coffe) => {
            return (
              <Card
              key={coffe.id}
                price= {coffe.price}
                id={coffe.id}
                img={coffe.img}
                title={coffe.title}
                description={coffe.description}
                type={coffe.type}
                quantity={coffe.quantity}
              />
            );
          })}
        </CoffeCard>
      </CoffeCatalog>
    </div>
  );
};

export { Home };
