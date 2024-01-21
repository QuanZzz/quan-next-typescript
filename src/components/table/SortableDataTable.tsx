import cx from "classnames";
import { DataTableProps } from "@/lib/types";
import { useMemo, useState } from "react";
import { ASCENDING, DESCENDING } from "@/utils/index";
import { TableHeader } from "./TableHeader";
import { MobileDataTableBaseComponent } from "./MobileDataTableBaseComponent";
import { DataTableBaseComponent } from "./DataTableBaseComponent";

export const SortableDataTable = ({
  className,
  header,
  displayedData,
  columns,
}: DataTableProps) => {
  const [sortConfig, setSortConfig] = useState({
    key: "",
    direction: ASCENDING,
  });

  const sortedData = useMemo(() => {
    let sortableItems = [...displayedData];
    if (sortConfig !== null) {
      sortableItems.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === ASCENDING ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === ASCENDING ? 1 : -1;
        }
        return 0;
      });
    }

    return sortableItems;
  }, [displayedData, sortConfig]);

  const requestSort = (key: string) => {
    let direction = ASCENDING;
    if (sortConfig.key === key && sortConfig.direction === ASCENDING) {
      direction = DESCENDING;
    }

    setSortConfig({ key, direction });
  };

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

      <MobileDataTableBaseComponent data={sortedData} columns={columns} />

      <DataTableBaseComponent
        data={sortedData}
        columns={columns}
        requestSort={requestSort}
      />
    </div>
  );
};
