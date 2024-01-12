import { Button } from "@/components/Button";
import { DataTable } from "@/components/table/DataTable";
import { personalInfo, personalColumns } from "@/utils/personalInfo";
import { useEffect, useState } from "react";

export default function Page() {
  const [displayedData, setDisplayedData] = useState(personalInfo);
  const [showSeeLess, setShowSeeLess] = useState(false);
  const [showLoadMore, setShowLoadMore] = useState(true);

  useEffect(() => {
    setShowSeeLess(displayedData.length > 5);
    setShowLoadMore(displayedData.length < 20);
  }, [displayedData]);

  const handleShowLessOnClick = () => {
    setDisplayedData((prev) => prev.slice(0, -5));
  };

  const handleLoadMoreOnClick = () => {
    const updatedData = personalInfo.map((person, index) => ({
      ...person,
      id: index + 1,
    }));
    setDisplayedData([...displayedData, ...updatedData]);
  };

  return (
    <div className="w-full h-screen flex flex-col items-center p-5">
      <DataTable
        header="Personal Information"
        displayedData={displayedData}
        columns={personalColumns}
      />
      <div className="w-full flex justify-between">
        {showLoadMore && (
          <Button onClick={handleLoadMoreOnClick}>Load More</Button>
        )}
        {showSeeLess && (
          <Button onClick={handleShowLessOnClick}>See Less</Button>
        )}
      </div>
    </div>
  );
}
