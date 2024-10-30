import { ButtonProps } from "./types";

const Button: React.FC<ButtonProps> = ({text, icon}) => {
  return (
    <button className="z-10 bg-white rounded-md p-2 px-4 text-sm shadow-xl flex items-center justify-center space-x-2">
      <span>{text}</span>
      <img src={`${icon}`} className="w-5" alt="" />
    </button>
  )
}

export default Button;