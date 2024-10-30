"use client";

import { SearchListHeader } from "./SearchList/SearchListHeader";
import { SearchListItem } from "./SearchList/SearchListItem";
import { ListProps } from "./types";

export const SearchList: React.FC<ListProps> = ({ list }) => {
  return (
    <div className="h-[calc(100vh-150px)] overflow-auto">
      <SearchListHeader />
      <div className="w-full h-full grid grid-cols-1 xl:grid-cols-2 gap-5 p-5">
        {list?.map((item, index) => (
          <SearchListItem key={index} {...item} />
        ))}
      </div>
    </div>
  );
};
