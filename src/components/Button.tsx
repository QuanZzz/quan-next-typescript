import cx from "classnames";
import React from "react";

const SIZES = {
  sm: "py-1 px-2 text-sm",
  md: "py-2 px-4 text-base",
  lg: "py-3 px-6 text-lg",
};

const VARIANTS = {
  primary: "bg-blue-500 hover:bg-blue-700 text-white",
  secondary: "bg-gray-200 hover:bg-gray-400 text-black",
  textLink: "text-blue-500 underline hover:text-blue-700 hover:no-underline",
};

type ButtonProps = React.ComponentPropsWithoutRef<"button"> & {
  children: React.ReactNode;
  onClick: () => void;
  className?: string;
  size?: "sm" | "md" | "lg";
  variant?: "primary" | "secondary" | "textLink";
};

export const Button = ({
  children,
  onClick,
  className,
  size = "md",
  variant = "primary",
  ...props
}: ButtonProps) => {
  const sizeClass = SIZES[size] || SIZES.md;
  const variantClass = VARIANTS[variant] || VARIANTS.primary;

  return (
    <button
      onClick={onClick}
      className={cx("font-bold rounded", sizeClass, variantClass, className)}
      {...props}
    >
      {children}
    </button>
  );
};
