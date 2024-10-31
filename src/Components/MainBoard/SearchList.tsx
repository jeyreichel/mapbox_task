"use client";

import { useState, useEffect } from "react";
import { SearchListHeader } from "./SearchList/SearchListHeader";
import { SearchListItem } from "./SearchList/SearchListItem";
import { SearchListItemSkeleton } from "./SearchList/SearchListItemSkeleton"; // New import
import { ListProps } from "./types";

export const SearchList: React.FC<ListProps> = ({ list, isLoading }) => {
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");
  const [listLength, setListLength] = useState<number | undefined>(undefined);

  const toggleSort = () => {
    setSortOrder((prev) => (prev === "asc" ? "desc" : "asc"));
  };

  const sortedList = list
    ? [...list].sort((a, b) =>
        sortOrder === "asc" ? a[4] - b[4] : b[4] - a[4]
      )
    : [];

  useEffect(() => {
    setListLength(list?.length ?? 0);
  }, [])

  return (
    <div className="h-[calc(100vh-150px)] overflow-auto">
      <SearchListHeader onSortToggle={toggleSort} listLength={listLength} />
      <div className="w-full h-full grid grid-cols-1 xl:grid-cols-2 gap-5 p-5">
        {isLoading
          ? Array(8)
              .fill(null)
              .map((_, index) => <SearchListItemSkeleton key={index} />)
          : sortedList.map((item, index) => (
              <SearchListItem key={index} {...item} />
            ))}
      </div>
    </div>
  );
};
