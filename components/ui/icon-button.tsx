import { cn } from "@/lib/utils";
import { MouseEventHandler } from "react";

interface IconButtonProps {
  className?: string;
  onclick?: MouseEventHandler<HTMLButtonElement> | undefined;
  icon: React.ReactElement;
}

const IconButton: React.FC<IconButtonProps> = ({
  icon,
  className,
  onclick,
}) => {
  return (
    <button
      onClick={onclick}
      className={cn(
        "rounded-full flex items-center justify-center bg-white border shadow-md p-2 hover:scale-110 transition",
        className
      )}
    >
      {icon}
    </button>
  );
};

export default IconButton;
