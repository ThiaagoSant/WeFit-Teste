import { Dispatch, ReactNode, SetStateAction } from "react";
import { Product } from "../services/types";

export interface CartItem extends Product {
  quantity: number;
}

export interface CartState {
  items: CartItem[];
}

export interface ShoppingCartProviderType {
  children: ReactNode;
}

export interface ShoppingCartContextData {
  addToCart(product: Product): void;
  removeToCart(productId: number): void;
  decreaseQuantity(productId: number): void;
  clearCart(navigate: any): void;
  setCart: SetStateAction<Dispatch<CartItem[]>>;
  cart: CartItem[];
  total: number;
}
