import { AutoCompleteInput } from "@/components/AutoCompleteInput";
import { Layout } from "@/components/Layout";
import { userNames } from "@/utils";

export default function Page() {
  return (
    <Layout>
      <AutoCompleteInput data={userNames} className="w-3/12" />
    </Layout>
  );
}
