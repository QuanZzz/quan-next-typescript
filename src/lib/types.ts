export type dataProps = {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  [key: string]: string | number;
}[];

export type columnsProps = {
  key: string;
  header: string;
  columnClassname?: string;
}[];
