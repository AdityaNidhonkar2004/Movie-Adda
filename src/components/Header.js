import React from "react";
import logo from "../utils/finallognobg.png";
const Header = () => {
  return (
    <div className=" absolute w-screen bg-gradient-to-b from-black px-6 py-4   z-10">
      <img className="w-[300px]" src={logo} />
    </div>
  );
};

export default Header;
