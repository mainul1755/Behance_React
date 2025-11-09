import React from "react";

const FilterBar = () => {
  return (
    <main className="flex flex-col md:flex-row justify-between items-center md:items-start gap-4 md:gap-10 mt-6 px-4 md:px-12">
      {/* 🔹 Left Side: Filter Buttons */}
      <div className="flex flex-wrap justify-center md:justify-start items-center gap-3 w-full md:w-auto">
        {[
          { img: "/CF.png", text: "Creative Fields" },
          { img: "/T.png", text: "Tools" },
          { img: "/C.png", text: "Color" },
          { img: "/L.png", text: "Location" },
          { img: "/S.png", text: "Schools" },
          { img: "/A.png", text: "Assets" },
          { img: "/Sub.png", text: "Subscriptions" },
        ].map((btn, index) => (
          <button
            key={index}
            className="flex items-center gap-2 border border-gray-300 rounded-md bg-white px-3 py-2 shadow-sm hover:bg-gray-100 transition text-sm font-medium text-gray-700"
          >
            <img src={btn.img} alt={btn.text} className="w-4 h-4" />
            <span>{btn.text}</span>
            <img src="/dawon.png" alt="▼" className="w-3 h-3" />
          </button>
        ))}
      </div>

      {/* 🔹 Right Side: Sort Section */}
      <div className="flex flex-col items-center md:items-start mt-3 md:mt-0">
        <span className="text-xs md:text-sm text-gray-500">Sort</span>
        <button className="flex items-center gap-1 text-sm md:text-base font-medium text-black hover:text-gray-700 transition mt-1">
          Recommended
          <img src="/dawon.png" alt="D" className="w-3 h-3" />
        </button>
      </div>
    </main>
  );
};

export default FilterBar;
