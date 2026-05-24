import * as React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "ghost" | "outline";
  size?: "default" | "sm" | "lg";
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-mint disabled:pointer-events-none disabled:opacity-50",
          variant === "default" && "bg-mint text-granat hover:bg-mint/90",
          variant === "ghost" && "text-szary-light hover:bg-granat-deep",
          variant === "outline" && "border border-mint text-mint hover:bg-mint/10",
          size === "default" && "h-10 px-4 py-2",
          size === "sm" && "h-9 px-3",
          size === "lg" && "h-11 px-8",
          className
        )}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";
