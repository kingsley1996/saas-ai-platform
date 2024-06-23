import React from 'react';

const Loading = () => {
  return (
    <div className="px-4 lg:px-8">
      <div className="flex animate-pulse">
        <div className="flex-shrink-0">
          <span className="size-12 block bg-gray-200 rounded-full dark:bg-neutral-700"></span>
        </div>

        <div className="ms-4 mt-2 w-full">
          <p className="h-8 w-[60%] bg-gray-200 rounded-full dark:bg-neutral-700"></p>

          <ul className="mt-5 space-y-3">
            <li className="w-full mt-5 h-6 bg-gray-200 rounded-full dark:bg-neutral-700"></li>
            <li className="w-full mt-5 h-6 bg-gray-200 rounded-full dark:bg-neutral-700"></li>
            <li className="w-full mt-5 h-6 bg-gray-200 rounded-full dark:bg-neutral-700"></li>
            <li className="w-full mt-5 h-6 bg-gray-200 rounded-full dark:bg-neutral-700"></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Loading;
