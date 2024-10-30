"use client"

import { MenuButtonProps } from "./types"

export const MenuButton: React.FC<MenuButtonProps> = ({children}) => {
  return(
    <button className="hidden lg:flex items-center space-x-3">
      <div className="flex items-center text-sm">{children}</div>
      <img src="/icon/dropdown.svg" alt="" />
    </button>
  )
}