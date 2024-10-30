"use client"

export const SearchBar: React.FC = () => {
  return (
    <div className="relative hidden md:flex w-1/4 min-w-[350px]">
      <input type="text" placeholder="Search" className="w-full border border-black border-opacity-10 rounded-full px-5 py-3 pr-44" />
      <div className="absolute flex items-center space-x-2 top-[3px] right-1">
        <img src="/icon/ai.svg" alt="" />
        <select className="text-sm">
          <option value="AI Search">AI Search</option>
        </select>
        <button className="bg-primary rounded-full p-[10px] transition-all duration-300 hover:bg-opacity-80">
          <img src="/icon/search.svg" alt="" />
        </button>
      </div>
    </div>
  )
}
