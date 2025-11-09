import React from "react";
import { footerLinks } from "../data.js";

const Footer = () => {
  return (
    <footer className="flex justify-between items-center border-t border-gray-200 px-6 py-3 text-sm text-gray-600">
      {/* Left side links */}
      <div className="flex flex-wrap items-center gap-3">
        {footerLinks.map((item, index) => (
          <React.Fragment key={index}>
            <a href={item.href} className="hover:text-black">
              {item.name}
            </a>
            {/* Divider except last */}
            {index !== footerLinks.length - 1 && (
              <span className="text-gray-300">|</span>
            )}
          </React.Fragment>
        ))}
      </div>

      {/* Right side logo */}
      <div className="flex items-center gap-1">
        <span className="font-semibold">Adobe</span>
      </div>
    </footer>
  );
};

export default Footer;
