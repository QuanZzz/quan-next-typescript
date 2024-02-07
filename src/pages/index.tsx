import { Layout } from "@/components/Layout";
import { Typography } from "@/components/Typography";
import UpvoteList from "@/components/UpvoteList";
import Link from "next/link";
import { useContext } from "react";
import { UpvoteContext } from "@/context/UpvoteContext";

export default function Page() {
  const { upvotes, dispatchUpvotes } = useContext(UpvoteContext);

  const handleUpvoteOnClick = (id: string) => {
    dispatchUpvotes({ type: "TOGGLE_UPVOTE", payload: { id } });
  };

  const handleAddOnClick = () => {
    dispatchUpvotes({ type: "ADD_UPVOTE" });
  };

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

      <div className="pt-4 flex flex-col">
        <Typography className="pb-4" size="xl" semiBold>
          Dropdown Examples:
        </Typography>
        <Link
          href="/examples/dropdown"
          className="hover:text-blue-500 hover:underline focused:text-blue-700"
        >
          Dropdown
        </Link>
      </div>

      <UpvoteList
        upvotes={upvotes}
        upvoteOnClick={handleUpvoteOnClick}
        addOnClick={handleAddOnClick}
      />
    </Layout>
  );
}
