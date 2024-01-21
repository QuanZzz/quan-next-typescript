import { cryptoColumns, cryptoInfo } from "@/utils/cryptoInfo";
import { SortableDataTable } from "@/components/table/SortableDataTable";

export default function Page() {
  return (
    <div className="w-full h-screen flex flex-col items-center p-5">
      <SortableDataTable
        header="Crypto Information"
        displayedData={cryptoInfo}
        columns={cryptoColumns}
      />
    </div>
  );
}
