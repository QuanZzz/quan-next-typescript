export type dataRow = {
  [key: string]: string | number;
};

export type columnsProps = {
  key: string;
  header: string;
  columnClassname?: string;
}[];

export type DataTableProps = {
  className?: string;
  header: string;
  displayedData: dataRow[];
  columns: columnsProps;
};
