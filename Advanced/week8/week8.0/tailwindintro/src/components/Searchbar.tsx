export const SearchBar=()=>{
    return <div>
    
<div className="flex items-center justify-center w-full max-w-2xl mx-auto">
  {/* <!-- Search Bar Form Group --> */}
  <div className="max-sm:hidden block flex items-center w-full bg-black border border-zinc-700 rounded-l-full pl-4 focus-within:border-blue-500">
    <input 
      type="text" 
      placeholder="Search" 
      className="w-full bg-transparent text-white placeholder-zinc-400 text-sm focus:outline-none py-2"
    />
  </div>
  {/* <!-- Search Button --> */}
  <button className="bg-zinc-800 border border-l-0 border-zinc-700 px-6 py-2.5 rounded-r-full hover:bg-zinc-700 flex items-center justify-center">
    <svg className="w-5 h-5 text-zinc-300" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
    </svg>
  </button>
  {/* <!-- Mic Button --> */}
  <button className="ml-3 bg-zinc-800 p-2.5 rounded-full hover:bg-zinc-700 flex items-center justify-center">
    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"></path>
    </svg>
  </button>
</div>

    </div>
}