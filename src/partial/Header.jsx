import React from "react";
import { FaPlane, FaHotel, FaUmbrellaBeach, FaPassport, FaBullhorn, FaShoppingCart, FaCoins } from "react-icons/fa";

const Header = () => {
  return (
    <header className="w-full bg-white shadow-sm">
      <div className="container mx-auto flex items-center justify-between px-6 py-3">
        
        {/* Logo */}
        <div className="flex items-center gap-2">
          <span className="text-2xl font-bold text-red-600">First</span>
          <span className="text-2xl font-bold text-gray-800">trip</span>
        </div>

        {/* Menu */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-700">
          <a href="#" className="flex flex-col items-center hover:text-red-600">
            <FaPlane className="text-lg" />
            <span className="mt-1 border-b-2 border-red-600">Flight</span>
          </a>
          <a href="#" className="flex flex-col items-center hover:text-red-600">
            <FaHotel className="text-lg" />
            <span className="mt-1">Hotel</span>
          </a>
          <a href="#" className="flex flex-col items-center hover:text-red-600">
            <FaUmbrellaBeach className="text-lg" />
            <span className="mt-1">Holidays</span>
          </a>
          <a href="#" className="flex flex-col items-center hover:text-red-600">
            <FaPassport className="text-lg" />
            <span className="mt-1">Visa</span>
          </a>
          <a href="#" className="flex flex-col items-center hover:text-red-600">
            <FaBullhorn className="text-lg" />
            <span className="mt-1">Promotions</span>
          </a>
          <a href="#" className="flex flex-col items-center hover:text-red-600">
            <FaShoppingCart className="text-lg" />
            <span className="mt-1 text-green-600">Business Class</span>
          </a>
          <a href="#" className="flex flex-col items-center hover:text-red-600">
            <FaCoins className="text-lg" />
            <span className="mt-1">FT Club</span>
          </a>
        </nav>

        {/* Auth Buttons */}
        <div className="flex items-center gap-3">
          <button className="bg-red-600 text-white px-4 py-2 rounded-full hover:bg-red-700">
            Sign In
          </button>
          <button className="border border-red-600 text-red-600 px-4 py-2 rounded-full hover:bg-red-50">
            Sign Up
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
