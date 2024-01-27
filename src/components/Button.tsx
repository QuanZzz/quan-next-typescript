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

const DISABLED_STYLES = "bg-gray-300 text-gray-600 cursor-not-allowed";

type ButtonProps = React.ComponentPropsWithoutRef<"button"> & {
  children: React.ReactNode;
  onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  className?: string;
  size?: "sm" | "md" | "lg";
  variant?: "primary" | "secondary" | "textLink";
  disabled?: boolean;
};

export const Button = ({
  children,
  onClick,
  className,
  size = "md",
  variant = "primary",
  disabled,
  ...props
}: ButtonProps) => {
  const sizeClass = SIZES[size] || SIZES.md;
  const variantClass = disabled
    ? DISABLED_STYLES
    : VARIANTS[variant] || VARIANTS.primary;
  const disabledClass = disabled ? DISABLED_STYLES : "";

  return (
    <button
      onClick={onClick}
      className={cx(
        "font-bold rounded cursor-pointer",
        sizeClass,
        variantClass,
        disabledClass,
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};
