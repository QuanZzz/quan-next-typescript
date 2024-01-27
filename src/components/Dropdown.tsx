import { useEffect, useState } from "react";
import { Button } from "./Button";
import { Layout } from "./Layout";
import cx from "classnames";

type DropdownProps = {
  dropdownItems: (string | number)[];
  className?: string;
  placeholder: string | number;
};

export const Dropdown = ({
  dropdownItems,
  className,
  placeholder,
  ...props
}: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [displayedItems, setDisplayedItems] = useState(
    dropdownItems.filter((item) => item !== placeholder)
  );
  const [selectedItem, setSelectedItem] = useState<string | number>("");

  const handleOnClick = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    setIsOpen((prev) => !prev);
  };

  useEffect(() => {
    if (!selectedItem) {
      return;
    }
    setDisplayedItems(dropdownItems.filter((item) => item !== selectedItem));
  }, [selectedItem]);

  return (
    <Layout>
      <div className={cx("w-3/12", className)}>
        <Button className="relative" onClick={handleOnClick} {...props}>
          {selectedItem ? selectedItem : placeholder}
        </Button>
        {isOpen && (
          <div className="absolute w-32 flex flex-col text-black">
            {displayedItems.map((item, index) => (
              <div
                key={index}
                className="border border-gray-200 py-2 bg-blue-500 flex flex-col items-center cursor-pointer hover:bg-blue-700"
                // onClick={(e) =>
                //   setSelectedItem((e.target as HTMLInputElement).value)
                // }
                onClick={() => setSelectedItem(item)}
              >
                {item}
              </div>
            ))}
          </div>
        )}
      </div>
    </Layout>
  );
};
