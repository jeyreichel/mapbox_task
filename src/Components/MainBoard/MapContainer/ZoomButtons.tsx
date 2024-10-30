const ZoomButtons = () => {
  return (
    <div className="flex flex-col space-y-1 items-center justify-center bg-white rounded-md shadow-xl">
      <button className="bg-white w-full rounded-md px-3 flex items-center justify-center text-2xl transition-all duration-300 hover:shadow-[0px_5px_5px_0px_rgb(0,0,0,0.1)]">+</button>
      <button className="bg-white w-full rounded-md px-3 flex items-center justify-center text-2xl transition-all duration-300 hover:shadow-[0px_-5px_5px_0px_rgb(0,0,0,0.1)]">-</button>
    </div>
  )
}

export default ZoomButtons;