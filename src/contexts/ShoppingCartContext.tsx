import { createContext, useState, useMemo } from "react";
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

  const total = useMemo(
    () =>
      cart.reduce(
        (total, product) => total + product.price * product.quantity,
        0
      ),
    [cart]
  );
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

  const removeToCart = (productId: number) => {
    const newCart = cart.filter(({ id }: CartItem) => productId !== id);
    setCart(newCart);
  };

  const decreaseQuantity = (productId: number) => {
    const itemIndex = cart.findIndex((item) => item.id === productId);

    if (itemIndex === -1) return;

    cart[itemIndex].quantity -= 1;

    const newCart = cart.filter((item) => item.quantity >= 1);

    setCart(newCart);
  };

  const clearCart = () => {
    setCart([]);
  };

  const getters = {
    cart,
    total,
  };

  const setters = {
    setCart,
    addToCart,
    removeToCart,
    decreaseQuantity,
    clearCart,
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
