import { generateUniqueId } from "./generateUniqueId";

export const upvotes = [
  { id: generateUniqueId(), selected: true },
  { id: generateUniqueId(), selected: false },
  { id: generateUniqueId(), selected: true },
  { id: generateUniqueId(), selected: false },
  { id: generateUniqueId(), selected: true },
];
