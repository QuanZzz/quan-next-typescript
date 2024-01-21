import cx from "classnames";
import { type dataRow, type columnsProps } from "@/lib/types";

type MobileDataTableBaseComponentProps = {
  className?: string;
  data: dataRow[];
  columns: columnsProps;
};

export const MobileDataTableBaseComponent = ({
  className,
  data,
  columns,
}: MobileDataTableBaseComponentProps) => {
  return (
    <div
      className={cx("max-w-md w-full sm:hidden bg-transparent my-4", className)}
    >
      {data.map((row, rowIndex) => (
        <div
          key={rowIndex}
          className="w-full flex flex-col border-b p-3 text-gray-900"
        >
          {columns.map((column) => (
            <div
              key={column.key}
              className={cx(
                "font-medium my-1 font-bold tracking-wide text-base",
                column.columnClassname
              )}
            >
              {row[column.key]}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};
