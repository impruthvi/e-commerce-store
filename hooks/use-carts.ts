import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { Product } from "@/types";

import { toast } from "react-hot-toast";

interface CartStore {
  products: Product[];
  addProduct: (product: Product) => void;
  removeProduct: (id: string) => void;
  removeAllProducts: () => void;
}

const useCart = create(
  persist<CartStore>(
    (set, get) => ({
      products: [],
      addProduct: (product: Product) => {
        const currentProducts = get().products;
        const existingProduct = currentProducts.find(
          (item) => item.id === product.id
        );

        if (existingProduct) return toast("Product already added to cart");

        set({ products: [...currentProducts, product] });
        toast.success("Product added to cart");
      },
      removeProduct: (id: string) => {
        set({
          products: get().products.filter((item) => item.id !== id),
        });
        toast.success("Product removed from cart");
      },
      removeAllProducts: () => set({ products: [] }),
    }),
    {
      name: "cart-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useCart;
