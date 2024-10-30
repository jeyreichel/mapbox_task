"use client";

import { MapContainer, SearchList } from "@Components/MainBoard";
import axios from "axios";
import { useEffect, useState } from "react";

const MainBoard: React.FC = () => {
  const data = {
    filter: {
      size: [10, 1000],
      rent: [100, 10000],
      roomsBed: [0, 99],
      roomsBath: [0, 99],
      type: [1],
      subType: [1],
      condition: [1],
      accessibility: [1],
      rentType: ["rent"],
      floorType: [1],
      heatingType: [1],
      availableNow: true,
      within: null,
      bbox: null,
      near: null,
      amenities: null,
    },
    sort: {
      rent: null,
      distance: null,
    },
    paging: {
      pageSize: 10,
      page: 0,
    },
  };

  const [list, setList] = useState(null);

  useEffect(() => {
    const SEARCH_URL = process.env.NEXT_PUBLIC_SEARCH_URL;
    axios
      .post(`${SEARCH_URL}`, data)
      .then((response) => {
        const temp = response.data.res.map((item: any) => {
          return [
            item.location,
            item.media,
            item.title,
            item.createdAt,
            item.rent,
            item.verified,
            item.availableFrom,
            item.size,
            item.roomsBed,
            item.roomsBath,
            item.address,
          ];
        });
        setList(temp);
      })
      .catch((error) => {
        console.error("Error submitting data:", error);
      });
  }, []);

  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 bg-white shadow-md rounded-sm mt-2">
      <MapContainer list={list} />
      <SearchList list={list} />
    </div>
  );
};

export default MainBoard;
