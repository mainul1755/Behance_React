import React, { useState } from "react";

const Navbar = ({ data, onButtonClick }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="py-3 border-b border-gray-100 bg-white shadow-sm  w-full top-0 z-50 mb-5">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <a href="#">
              <img src={data.logo} alt="logo" className="h-8" />
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex flex-1 justify-center">
            <ul className="flex items-center gap-6">
              {data.menuItems.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.link}
                    className="font-semibold text-[16px] text-gray-800 hover:text-blue-600 transition"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Desktop Buttons */}
          <div className="hidden md:flex items-center gap-3">
            {data.buttons.map((btn, index) =>
              btn.type === "text" ? (
                <button
                  key={index}
                  onClick={() => onButtonClick(btn.action)}
                  className={`py-2.5 px-5 rounded-full border border-[#DEE8FF] ${btn.bg} ${btn.color} hover:opacity-80 transition`}
                >
                  {btn.text}
                </button>
              ) : (
                 <button
                    key={index}
                    onClick={() => onButtonClick(btn.action)}
                    className={`py-2.5 px-5 hover:bg-gray-100 transition ${
                        btn.action === "adobe"
                        ? "border-none rounded-none" // Adobe button → no border, no rounded
                        : "border border-gray-200 rounded-full" // others → normal
                    }`}
                    >
                    <img src={btn.img} alt="icon" className="h-5 w-20" />
                 </button>


              )
              
            )}
          </div>

          {/* Hamburger Menu */}
          <button
            className="md:hidden flex flex-col justify-center items-center gap-[4px]"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span
              className={`h-[2px] w-6 bg-black transition-all ${
                menuOpen ? "rotate-45 translate-y-[6px]" : ""
              }`}
            ></span>
            <span
              className={`h-[2px] w-6 bg-black transition-all ${
                menuOpen ? "opacity-0" : ""
              }`}
            ></span>
            <span
              className={`h-[2px] w-6 bg-black transition-all ${
                menuOpen ? "-rotate-45 -translate-y-[6px]" : ""
              }`}
            ></span>
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {menuOpen && (
          <div className="md:hidden mt-4 bg-white border-t border-gray-200 shadow-lg rounded-lg">
            <ul className="flex flex-col items-center gap-3 py-3">
              {data.menuItems.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.link}
                    className="font-semibold text-gray-700 hover:text-blue-600 transition"
                  >
                    {item.name}
                  </a>
                </li>
              ))}

              {/* Buttons in Mobile Menu */}
              <div className="flex flex-col gap-2 mt-3 w-full px-6">
                {data.buttons.map((btn, index) =>
                  btn.type === "text" ? (
                    <button
                      key={index}
                      onClick={() => onButtonClick(btn.action)}
                      className={`py-2.5 w-full rounded-full border border-[#DEE8FF] ${btn.bg} ${btn.color}`}
                    >
                      {btn.text}
                    </button>
                  ) : (
                     
                    <button
                        key={index}
                            onClick={() => onButtonClick(btn.action)}
                            className={`py-2.5 w-full ${
                             btn.action === "adobe"
                         ? "border-none rounded-none"
                        : "border border-gray-200 rounded-full"
                             }`}
                        >
                         <img src={btn.img} alt="icon" className="h-5 mx-auto" />
                        </button>


                  )
                )}
              </div>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
