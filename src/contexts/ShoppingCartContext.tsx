import { createContext, useState } from "react";
import { Product } from "../services/types";
import {
  CartItem,
  ShoppingCartContextData,
  ShoppingCartProviderType,
} from "./types";

export const ShoppingCartContext = createContext({} as ShoppingCartContextData);

export const ShoppingCartProvider = ({
  children,
}: ShoppingCartProviderType) => {
  const [cart, setCart] = useState<CartItem[]>([]);

  const addToCart = (product: Product) => {
    const existingCartItem = cart.find(({ id }) => product?.id === id);

    if (!existingCartItem) {
      const newProduct = {
        ...product,
        quantity: 1,
      };

      setCart([...cart, newProduct]);
    } else {
      const newCart = cart.map((movie) => {
        if (movie?.id === existingCartItem.id && movie?.quantity) {
          return {
            ...movie,
            quantity: movie?.quantity + 1,
          };
        }

        return movie;
      });

      setCart(newCart);
    }
  };

  const getters = {
    cart,
  };

  const setters = {
    setCart,
    addToCart,
  };

  return (
    <ShoppingCartContext.Provider
      value={{
        ...getters,
        ...setters,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};
