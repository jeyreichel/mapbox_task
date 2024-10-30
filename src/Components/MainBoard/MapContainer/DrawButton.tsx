import { DrawButtonProps } from "./types"

const DrawButton: React.FC<DrawButtonProps> = ({isDraw, handleDrawChange}) => {
  return (
    <div className="z-10">
        <label className="switch">
          {!isDraw && (
            <span className="absolute z-10 top-[9px] left-[45px] text-sm text-white cursor-pointer">
              Draw
            </span>
          )}
          <input type="checkbox" checked={isDraw} onChange={handleDrawChange} />
          <span className="slider round bg-no-repeat"></span>
        </label>
      </div>
  )
}

export default DrawButton;