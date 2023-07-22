"use client";

import { Product } from "@/types";
import Currency from "@/components/ui/currency";
import Button from "./ui/button";
import { ShoppingCart } from "lucide-react";
import { MouseEventHandler } from "react";
import useCart from "@/hooks/use-carts";

interface InfoProps {
  product: Product;
}

const Info: React.FC<InfoProps> = ({ product }) => {
  const cart = useCart();
  const onAddToCart: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.stopPropagation();
    cart.addProduct(product);
  };
  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900">{product?.name}</h1>
      <div className="mt-3 flex items-end justify-between">
        <p className="text-2xl text-gray-900">
          <Currency value={product?.price} />
        </p>
      </div>
      <hr className="my-4" />
      <div className="flex flex-col gap-y-6">
        <div className="flex items-center gap-x-4">
          <h3 className="font-semibold text-black">Size:</h3>
          <div>{product?.size?.name}</div>
        </div>
        <div className="flex items-center gap-x-4">
          <h3 className="font-semibold text-black">Color:</h3>
          <div
            className="h-6 w-6 rounded-full border border-gray-600"
            style={{ backgroundColor: product?.color?.value }}
          ></div>
        </div>
        <div className="mt-10 flex items-center gap-x-3">
          <Button className="flex items-center gap-x-2" onClick={onAddToCart}>
            Add to Cart
            <ShoppingCart />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Info;
