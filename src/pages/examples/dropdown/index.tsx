import { Dropdown } from "@/components/Dropdown";
import { Layout } from "@/components/Layout";
import { userNames } from "@/utils";

export default function Page() {
  return (
    <Layout>
      <Dropdown dropdownItems={userNames} placeholder={userNames[0]} />
    </Layout>
  );
}
