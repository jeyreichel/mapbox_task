"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export const SearchListItem: React.FC = (props) => {
  const data: any = props;

  return (
    <div className="w-full">
      <div className="w-full bg-neutral-200 rounded-lg relative">
        <div className="absolute top-3 left-3 z-10 text-xs bg-white px-2 py-1 rounded-full">
          New
        </div>
        <div className="absolute top-3 left-16 z-10 text-xs bg-white px-2 py-1 rounded-full">
          3D Tour
        </div>
        <div className="absolute top-3 right-3 w-7 h-7 flex items-center justify-center z-10 text-xs bg-white p-1 rounded-full">
          <img src="/icon/bookmark.svg" alt="" />
        </div>
        <Swiper
          pagination={{
            dynamicBullets: true,
          }}
          modules={[Pagination]}
          spaceBetween={10}
          className="mySwiper rounded-lg"
        >
          {data[1].map((item: any, index: number) => (
            <SwiperSlide key={index}>
              <div className="h-[300px] overflow-hidden">
                <img
                  src={`${item.cdnUrl}`}
                  className="w-auto h-auto rounded-lg"
                  alt=""
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="w-full px-2 py-4 flex flex-col space-y-3">
        <div className="w-full flex items-center justify-between">
          {data[6] ? (
            <div className="flex items-center space-x-3">
              <img src="/icon/verify.svg" alt="" />
              <span className="text-xs text-primary font-semibold">
                Verified
              </span>
            </div>
          ) : (
            <div></div>
          )}
          <span className="text-xs opacity-50">{data[3]}</span>
        </div>
        <p className="text-sm font-semibold whitespace-nowrap text-ellipsis max-w-80 overflow-hidden">
          {data[2]}
        </p>
        <p className="text-xs opacity-50">{data[10]}</p>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2 opacity-50">
            <img src="/icon/cube.svg" alt="" />
            <span className="text-xs">{data[7]}m&sup2;</span>
          </div>
          <div className="flex items-center space-x-2 opacity-50">
            <img src="/icon/bed.svg" alt="" />
            <span className="text-xs">{data[8]} bed</span>
          </div>
          <div className="flex items-center space-x-2 opacity-50">
            <img src="/icon/bath.svg" alt="" />
            <span className="text-xs">{data[9]} bath</span>
          </div>
        </div>
        <p className="text-md font-semibold">{data[4]} €</p>
        <div className="flex text-xs space-x-2">
          <span className="opacity-50">Available From: </span>
          {data[6] !== null && <span>Immediately</span>}
        </div>
      </div>
    </div>
  );
};
