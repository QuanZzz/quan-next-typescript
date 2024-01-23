import { cryptoColumns, cryptoInfo } from "@/utils/cryptoInfo";
import { SortableDataTable } from "@/components/table/SortableDataTable";
import { Layout } from "@/components/Layout";

export default function Page() {
  return (
    <Layout>
      <SortableDataTable
        header="Crypto Information"
        displayedData={cryptoInfo}
        columns={cryptoColumns}
      />
    </Layout>
  );
}
