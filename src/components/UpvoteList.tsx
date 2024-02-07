import dynamic from "next/dynamic";
import { AddIcon, UpvoteIcon } from "./Icons";
import { Upvote } from "@/lib/types";
import IconButton from "./iconButton/IconButton";
import { useEffect, useState } from "react";

const FETCH_API = "https://github.com/";
type UpVoteListProps = {
  upvotes: Upvote[];
  upvoteOnClick: (index: string) => void;
  addOnClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};

const UpvoteList = ({
  upvotes,
  upvoteOnClick,
  addOnClick,
}: UpVoteListProps) => {
  return (
    <div className="flex items-center">
      <div className="flex flex-wrap border border-gray-200 items-center rounded-lg">
        {upvotes.map((upvote) => (
          <IconButton
            className="m-2"
            key={upvote.id}
            icon={<UpvoteIcon />}
            selected={upvote.selected}
            onClick={() => upvoteOnClick(upvote.id)}
          />
        ))}
      </div>
      <IconButton icon={<AddIcon />} onClick={addOnClick} className="m-2" />
    </div>
  );
};

export default dynamic(() => Promise.resolve(UpvoteList), { ssr: false });
