import { create } from "zustand";
import { ProductProps } from "@/types";

type ProductStore = {
  products: ProductProps[];
  setProducts: (products: ProductProps[]) => void;
};

export const productStore = create<ProductStore>((set) => ({
  products: [],
  setProducts: (products: ProductProps[]) => set({ products }),
}));
