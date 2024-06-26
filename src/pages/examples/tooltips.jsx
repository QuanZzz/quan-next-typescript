import { Tooltip } from "@/components/Tooltip";
import { Layout } from "@/components/Layout";

export default function Page() {
  return (
    <Layout>
      <div
        className="absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 
      flex flex-col gap-20 items-center justify-center"
      >
        <Tooltip position="top" content="This is Tooltip on top">
          Tooltip-top
        </Tooltip>
        <Tooltip position="right" content="This is Tooltip on right">
          Tooltip-right
        </Tooltip>
        <Tooltip position="bottom" content="This is Tooltip on bottom">
          Tooltip-bottom
        </Tooltip>
        <Tooltip position="left" content="This is Tooltip on left">
          Tooltip-left
        </Tooltip>
      </div>
    </Layout>
  );
}
