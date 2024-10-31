"use client";

import { useState } from "react";
import ArrButton from "./ArrButton";
import { SearchListHeaderProps } from "./types";
export const SearchListHeader: React.FC<SearchListHeaderProps> = ({
  onSortToggle,
  listLength,
}) => {
  const arrButtons = ["arr1.svg", "arr2.svg", "arr3.svg"];
  const [currentArr, setCurrentArr] = useState<number>(2);

  return (
    <div className="w-full flex items-start justify-between border-b border-b-black border-opacity-5 p-5 pb-2">
      <div className="flex items-start space-x-3">
        <img src="/icon/list.svg" className="mt-1" alt="" />
        <div>
          <h1 className="text-2xl font-semibold">Listing around me</h1>
          <span className="text-xs opacity-50">{listLength} properties</span>
        </div>
      </div>
      <div className="flex items-center space-x-8 mt-1">
        <div className="flex items-center space-x-5 bg-neutral-100 px-3 py-1 rounded-sm">
          {arrButtons.map((item, index) => (
            <ArrButton
              key={index}
              icon={item}
              isActive={index === currentArr}
              onClick={() => setCurrentArr(index)}
            />
          ))}
        </div>
        <button className="flex items-center space-x-2" onClick={onSortToggle}>
          <span className="text-xs">Sort by Relevance</span>
          <img src="/icon/sort.svg" alt="" />
        </button>
      </div>
    </div>
  );
};
