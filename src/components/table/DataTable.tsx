import cx from "classnames";
import PropTypes from "prop-types";
import { TableHeader } from "./TableHeader";
import { MobileDataTableBaseComponent } from "./MobileDataTableBaseComponent";
import { DataTableBaseComponent } from "./DataTableBaseComponent";
import { type dataProps, type columnsProps } from "@/lib/types";

type DataTableProps = {
  className: string;
  header: string;
  displayedData: dataProps;
  columns: columnsProps;
};

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

DataTable.propTypes = {
  className: PropTypes.string,
  header: PropTypes.string,
  displayedData: PropTypes.array,
  columns: PropTypes.array,
};

DataTable.defaultProps = {
  className: "",
  header: "",
  displayedData: null,
  columns: null,
};
