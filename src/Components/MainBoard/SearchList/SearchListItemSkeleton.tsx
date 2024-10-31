"use client";

export const SearchListItemSkeleton: React.FC = () => {
  return (
    <div className="w-full">
      <div className="w-full bg-neutral-200 rounded-lg relative h-[300px] gradient-flow"></div>
      <div className="w-full px-2 py-4 flex flex-col space-y-3">
        <div className="w-full flex items-center justify-between">
          <div className="h-4 w-20 rounded-full gradient-flow"></div>
          <div className="h-4 w-16 rounded-full gradient-flow"></div>
        </div>
        <div className="h-6 w-3/4 rounded gradient-flow"></div>
        <div className="h-4 w-1/2 rounded gradient-flow"></div>
        <div className="flex items-center justify-between">
          <div className="h-4 w-10 rounded-full gradient-flow"></div>
          <div className="h-4 w-10 rounded-full gradient-flow"></div>
          <div className="h-4 w-10 rounded-full gradient-flow"></div>
        </div>
        <div className="h-5 w-20 rounded gradient-flow"></div>
        <div className="h-4 w-28 rounded gradient-flow"></div>
      </div>
    </div>
  );
};
