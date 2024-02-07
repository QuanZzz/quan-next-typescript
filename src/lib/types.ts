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

export type Upvote = {
  id: string;
  selected: boolean;
};

export type UpvoteAction = {
  type: string;
  payload?: {
    id: string;
  };
};
