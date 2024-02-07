import { upvotes } from "@/utils/upvotes";
import { createContext, useEffect, useReducer } from "react";
import { Upvote, UpvoteAction } from "@/lib/types";
import { generateUniqueId } from "@/utils/generateUniqueId";

const getStoredUpvotes = () => {
  if (typeof sessionStorage !== "undefined") {
    const STORED_UPVOTES = sessionStorage.getItem("upvotes");
    return STORED_UPVOTES ? JSON.parse(STORED_UPVOTES) : upvotes;
  }
  return [];
};

const INITIAL_STATE: Upvote[] = getStoredUpvotes();

export const UpvoteContext = createContext<{
  upvotes: Upvote[];
  dispatchUpvotes: React.Dispatch<UpvoteAction>;
}>({
  upvotes: INITIAL_STATE,
  dispatchUpvotes: () => undefined,
});

const upvoteReducer = (state: Upvote[], action: UpvoteAction) => {
  switch (action.type) {
    case "TOGGLE_UPVOTE":
      const updatedUpvotes = state.map((upvote) => {
        if (action.payload?.id && upvote.id === action.payload.id) {
          return { ...upvote, selected: !upvote.selected };
        }
        return upvote;
      });
      return updatedUpvotes;
    case "ADD_UPVOTE":
      const newUpvote = { id: generateUniqueId(), selected: false };
      console.log(newUpvote);
      return [...state, newUpvote];
    default:
      return state;
  }
};

export const UpvoteContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [upvotes, dispatchUpvotes] = useReducer(upvoteReducer, INITIAL_STATE);

  useEffect(() => {
    sessionStorage.setItem("upvotes", JSON.stringify(upvotes));
  }, [upvotes]);

  return (
    <UpvoteContext.Provider value={{ upvotes, dispatchUpvotes }}>
      {children}
    </UpvoteContext.Provider>
  );
};
