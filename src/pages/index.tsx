import { Layout } from "@/components/Layout";
import { Typography } from "@/components/Typography";
import Link from "next/link";

export default function Page() {
  return (
    <Layout>
      <Typography tag="h1" bold size="3xl">
        Examples Page
      </Typography>

      <div className="pt-4 flex flex-col">
        <Typography className="pb-4" size="xl" semiBold>
          Table Examples:
        </Typography>
        <Link
          href="/examples/tables/table"
          className="hover:text-blue-500 hover:underline focused:text-blue-700"
        >
          Normal Table
        </Link>
        <Link
          href="/examples/tables/sortTable"
          className="hover:text-blue-500 hover:underline focused:text-blue-700"
        >
          Sortable Table
        </Link>
      </div>

      <div className="pt-4 flex flex-col">
        <Typography className="pb-4" size="xl" semiBold>
          Input Examples:
        </Typography>
        <Link
          href="/examples/inputs/autoCompleteInput"
          className="hover:text-blue-500 hover:underline focused:text-blue-700"
        >
          Auto Complete Table
        </Link>
      </div>
    </Layout>
  );
}
