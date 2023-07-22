"use client";

import axios from "axios";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { toast } from "react-hot-toast";

import Button from "@/components/ui/button";
import Currency from "@/components/ui/currency";
import useCart from "@/hooks/use-carts";

const Summary = () => {
  const searchParams = useSearchParams();
  const products = useCart((state) => state.products);
  const removeAllProducts = useCart((state) => state.removeAllProducts);

  useEffect(() => {
    if (searchParams.get("success")) {
      toast.success("Payment success");
      removeAllProducts();
    }

    if (searchParams.get("canceled")) {
      toast.error("Payment canceled");
    }
  }, [searchParams, removeAllProducts]);

  const totalPrice = products.reduce((total, product) => {
    return total + Number(product.price);
  }, 0);

  const onCheckout = async () => {
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/checkout`,
        {
          productIds: products.map((product) => product.id),
        }
      );
      toast.success("Checkout success");
      window.location = response.data.url;
    } catch (error) {
      toast.error("Checkout failed");
    }
  };

  return (
    <div
      className="
        mt-16
        rounded-lg
        bg-gray-50
        px-4
        py-6
        sm:p-6
        lg:col-span-5
        lg:mt-0lg:p-8
        "
    >
      <h2 className="text-lg font-medium text-gray-900">Order Summary</h2>

      <div className="mt-6 space-y-4">
        <div className="flex items-center justify-between border-t border-gray-200 pt-4">
          <div className="text-base font-medium text-gray-900">Order total</div>
          <Currency value={totalPrice} />
        </div>
      </div>
      <Button
        disabled={products.length === 0}
        className="w-full mt-6"
        onClick={onCheckout}
      >
        Checkout
      </Button>
    </div>
  );
};

export default Summary;
