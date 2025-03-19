import React, { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { FaSearch, FaShoppingCart, FaUser } from "react-icons/fa";
import { StoreContext } from "../../Context/StoreContext";

const Navbar = ({ handleLogout }) => {
  const { cartItems } = useContext(StoreContext);
  const navigate = useNavigate();

  // Cart item count with null check
  const getTotalItems = () => {
    if (!cartItems || typeof cartItems !== "object") return 0; // Prevent error
    return Object.values(cartItems).reduce((total, itemCount) => total + itemCount, 0);
  };

  return (
    <nav className="text-[#763203] flex items-center justify-between h-20 sticky top-0 z-50 px-10 shadow-md backdrop-blur-lg hover:bg-white">
      {/* Left - Logo */}
      <div className="flex items-center justify-center cursor-pointer w-40" onClick={() => navigate("/")}>
        <img src="./logo.png" alt="Logo" className="h-19" />
      </div>

      {/* Center - Nav Links */}
      <ul className="flex gap-10 text-lg font-light">
        {["Home", "About", "Menu", "Contact Us"].map((item, index) => (
          <li key={index} className="relative group">
            <NavLink
              to={item === "Home" ? "/" : `/${item.toLowerCase().replace(/\s/g, "")}`}
              className={({ isActive }) =>
                isActive
                  ? "text-black border-b-2 border-orange-500 pb-1"
                  : "text-gray-900 hover:text-orange-500 transition"
              }
            >
              {item}
            </NavLink>
            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
          </li>
        ))}
      </ul>

      {/* Right - Icons & Logout */}
      <div className="flex justify-evenly w-75">
        {/* Search */}
        <NavLink to="/search" className="text-xl hover:text-orange-500 transition">
          <FaSearch />
        </NavLink>

        {/* Cart */}
        <NavLink to="/cart" className="relative text-xl hover:text-orange-500 transition">
          <FaShoppingCart />
          {getTotalItems() > 0 && (
            <span className="absolute -top-2 -right-2 w-4 text-center bg-red-500 text-white rounded-full px-2 py-1 text-xs">
              {getTotalItems()}
            </span>
          )}
        </NavLink>

        {/* Profile */}
        <NavLink to="/profile" className="text-xl hover:text-orange-500 transition">
          <FaUser />
        </NavLink>

        {/* Logout */}
        <button
          onClick={handleLogout}
          className="bg-orange-500 h-7 w-19 text-sm relative bottom-1 rounded-md text-white shadow-md hover:bg-orange-600 transition"
        >
          Log Out
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
