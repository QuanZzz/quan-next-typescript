"use client";

export const UpvoteIcon = ({ className = "" }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height={16}
      width={14}
      className={className}
      viewBox="0 0 384 512"
    >
      <path
        fill="currentColor"
        d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 
      0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 
      32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"
      />
    </svg>
  );
};

export const AddIcon = ({ className = "" }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height={16}
      width={14}
      className={className}
      viewBox="0 0 448 512"
    >
      <path
        fill="currentColor"
        d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 
      32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 
      32-14.3 32-32s-14.3-32-32-32H256V80z"
      />
    </svg>
  );
};
