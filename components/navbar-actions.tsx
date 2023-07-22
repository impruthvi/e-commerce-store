"use client";

import { useState, useEffect } from "react";
import { ShoppingBag } from "lucide-react";

import Button from "@/components/ui/button";
import useCart from "@/hooks/use-carts";
import { useRouter } from "next/navigation";

const NavbarActions = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const cart = useCart();
  const router = useRouter();

  if (!isMounted) return null;

  return (
    <div className="ml-auto flex items-center gap-x-4">
      <Button
        className="flex items-center rounded-full bg-black px-4 py-2"
        onClick={() => router.push("/cart")}
      >
        <ShoppingBag size={20} color="white" />
        <span className="ml-2 text-sm font-medium text-white">
          {cart?.products?.length}
        </span>
      </Button>
    </div>
  );
};

export default NavbarActions;
