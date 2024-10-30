"use client";

import { Logo, Profile, SearchBar, Language } from "@Components/Header";

const Header: React.FC = () => {
  return (
    <div className="w-full flex items-center justify-between px-10 py-3 bg-white border-b border-b-black border-opacity-10 z-10">
      <Logo />
      <SearchBar />
      <div className="flex items-center space-x-6">
        <h1 className="text-sm mr-14">Advertise</h1>
        <Language />
        <Profile />
      </div>
    </div>
  );
};

export default Header;
