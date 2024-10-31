"use client";

import { MenuButton } from "@Components/Menu";

const Menu: React.FC = () => {
  const menuButtons = [
    "Rent",
    "Apartment",
    "Property type",
    "Beds/baths",
    "Living rooms",
    "Pets",
    "Deposit",
  ];

  return (
    <div className="w-full flex items-center space-x-5 xl:space-x-10 bg-white shadow-[0px_8px_25px_0px_rgb(0,0,0,0.1)] p-5 rounded-sm z-0">
      {menuButtons.map((item, index) => (
        <MenuButton key={index}>{item}</MenuButton> // Added key and item as children
      ))}
      <MenuButton>
        Price: <span className="opacity-60">€300 - €500</span>
      </MenuButton>
      <button className="flex items-center space-x-2">
        <span>All</span>
        <img src="/icon/all.svg" alt="" />
      </button>
    </div>
  );
};

export default Menu;
