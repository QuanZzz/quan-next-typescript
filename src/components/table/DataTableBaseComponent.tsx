import cx from "classnames";
import { type dataRow, type columnsProps } from "@/lib/types";

type DataTableBaseComponentProps = {
  className?: string;
  data: dataRow[];
  columns: columnsProps;
  // requestSort: (key: string) => number,  when want to return number
  requestSort?: (key: string) => void;
};

export const DataTableBaseComponent = ({
  className,
  data,
  columns,
  requestSort,
  ...props
}: DataTableBaseComponentProps) => {
  return (
    <table
      className={cx("w-full hidden sm:table w-full my-4", className)}
      {...props}
    >
      <thead className="text-left">
        <tr>
          {columns.map((column) => (
            <th
              key={column.key}
              className={cx("p-3 font-bold text-base", column.columnClassname)}
              onClick={() => requestSort && requestSort(column.key)}
            >
              <span className="inline-flex items-center flex-nowrap">
                <button>
                  <span className="break-all line-clamp-1">
                    {column.header}
                  </span>
                </button>
              </span>
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, rowIndex) => (
          <tr
            key={rowIndex}
            className="border-b bg-transparent text-left text-gray-900"
          >
            {columns.map((column) => (
              <td
                key={column.key}
                className={cx(
                  "sm:w-3/12 pr-8 pl-3 py-3",
                  column.columnClassname
                )}
              >
                <div className="font-medium my-1 tracking-wide text-base">
                  {row[column.key]}
                </div>
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};
