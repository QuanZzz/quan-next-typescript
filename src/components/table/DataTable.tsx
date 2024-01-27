import cx from "classnames";
import { TableHeader } from "./TableHeader";
import { MobileDataTableBaseComponent } from "./MobileDataTableBaseComponent";
import { DataTableBaseComponent } from "./DataTableBaseComponent";
import { type DataTableProps } from "@/lib/types";

export const DataTable = ({
  className,
  header,
  displayedData,
  columns,
}: DataTableProps) => {
  if (!displayedData) {
    return null;
  }

  return (
    <div
      className={cx(
        "w-full flex flex-col items-center text-xxl p-4",
        className
      )}
    >
      <TableHeader label={header} />

      <MobileDataTableBaseComponent data={displayedData} columns={columns} />

      <DataTableBaseComponent data={displayedData} columns={columns} />
    </div>
  );
};
