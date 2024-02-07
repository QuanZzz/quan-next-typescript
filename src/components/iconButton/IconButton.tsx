import dynamic from "next/dynamic";
import cx from "classnames";
import "./iconButton.css";

type IconButtonProps = React.ComponentPropsWithoutRef<"button"> & {
  className?: string;
  icon: React.ReactNode;
  onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  disabled?: boolean;
  selected?: boolean;
};

const IconButton = ({
  className,
  icon,
  onClick,
  disabled,
  selected = false,
  ...props
}: IconButtonProps) => {
  const ssrClass = selected ? "selected" : "default";

  return (
    <button
      onClick={onClick}
      className={cx(
        "rounded-lg w-8 h-8 border flex items-center justify-center",
        {
          selected: selected === true,
          default: selected === false,
          "bg-gray-300 text-gray-600 cursor-not-allowed": disabled,
        },
        className
      )}
      {...props}
    >
      {icon}
    </button>
  );
};
export default dynamic(() => Promise.resolve(IconButton), { ssr: false });
