import React from "react";

const VoucherCardSkeletonLoader = () => {
  return (
    <>
    <div className="flex text-center justify-end mt-2 items-center flex-col">
      
        <svg
          class="w-12 h-48 text-gray-200 dark:text-gray-600 mt-5  animate-spin1"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 16 20"
        >
          <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
          <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM9 13a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2Zm4 .382a1 1 0 0 1-1.447.894L10 13v-2l1.553-1.276a1 1 0 0 1 1.447.894v2.764Z" />
        </svg>
        <span class="sr-only">Loading...</span>
      </div>
      <div className="text-gray-500 dark:text-gray-600 text-center">
        loading....
      </div>
      
    </>
  );
};

export default VoucherCardSkeletonLoader;
