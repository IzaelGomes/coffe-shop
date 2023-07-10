import axios from "axios";
import { ReactNode, createContext, useState } from "react";

interface cartContextTypes {
  addMoreCoffe: (id: number, route:string) => void;
  removerCoffe: (id: number, route:string) => void;
  addItemOnCart: (id: number, ) => void;
  quantityCoffe: number;
}

export const CartContext = createContext({} as cartContextTypes);

interface cartContextProviderProps {
  children: ReactNode;
}

export const CartContextProvider = ({ children }: cartContextProviderProps) => {
  const [quantityCoffe, setQuantityCoffe] = useState(0);

  async function addMoreCoffe(id: number, route:string) {
    const coffe = await axios.get(`http://localhost:3000/${route}/${id}`);

    const coffeQuantityUpdated = coffe.data.quantity + 1;

    setQuantityCoffe(coffeQuantityUpdated);

    await axios.patch(`http://localhost:3000/${route}/${id}`, {
      quantity: coffeQuantityUpdated,
    });

    return;
  }

  async function removerCoffe(id: number, route:string) {
    const coffe = await axios.get(`http://localhost:3000/${route}/${id}`);

    if (coffe.data.quantity == 0) {
      return;
    }

  
    const coffeQuantityUpdated = coffe.data.quantity - 1;
    setQuantityCoffe(coffeQuantityUpdated);

    await axios.patch(`http://localhost:3000/${route}/${id}`, {
      quantity: coffeQuantityUpdated,
    });
    return;
  }

  async function addItemOnCart(id: number) {
    await axios.patch(`http://localhost:3000/coffe/${id}`, {});

    return;
  }

  return (
    <CartContext.Provider
      value={{ addMoreCoffe, removerCoffe, addItemOnCart, quantityCoffe }}
    >
      {children}
    </CartContext.Provider>
  );
};
