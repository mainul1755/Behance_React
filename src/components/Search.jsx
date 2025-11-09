import React from 'react'

const Search = () => {
  return (
    <main className="flex justify-center items-center ">
  <div className="flex flex-wrap items-center border border-gray-300 rounded-full overflow-hidden bg-white shadow-sm">
     <div className="flex items-center px-3 bg-amber-50">
        <div >
         <img src="/Search icon.png" alt="Icon" />
        </div>
    <input
      type="text"
      placeholder="Search the creative world at work"
      className="w-200 text-sm outline-none px-6 py-3 placeholder-gray-500"
    />
     </div>
    
     
    <div className="h-11 border-l border-gray-300"></div>
     
    <div className="flex flex-wrap items-center space-x-7 px-10 text-sm  ">
      <button className="px-3 py-1 rounded-full bg-black text-white font-medium">Projects</button>
      <button className="text-gray-600 hover:text-black">Images</button>
      <button className="text-gray-600 hover:text-black">Prototypes</button>
      <button className="text-gray-600 hover:text-black">Streams</button>
      <button className="text-gray-600 hover:text-black">People</button>
      <button className="text-gray-600 hover:text-black">Moodboards</button>
    </div>
  </div>
</main>
  )
}

export default Search
