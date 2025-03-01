import Logo from "../../assets/logo.png";
import Coin from "../../assets/coin.png";
import PropTypes from "prop-types";
import { useState } from "react";

export default function Header({ coins }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="sticky top-0 z-50 bg-gray-50 bg-opacity-80 backdrop-blur-2xl py-2">
      <div className="flex justify-between items-center w-11/12 mx-auto">
        <img className="w-20 md:w-28" src={Logo} alt="Logo" />

        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} className="p-2">
            ☰
          </button>
        </div>

        <ul
          className={`absolute md:static bg-gray-50 md:bg-transparent top-12 left-0 w-full md:w-auto flex flex-col md:flex-row items-center gap-6 py-4 md:py-0 shadow-md md:shadow-none transition-transform duration-300 ease-in-out ${menuOpen ? "block" : "hidden md:flex"}`}
        >
          <li className="cursor-pointer hover:text-gray-700">Home</li>
          <li className="cursor-pointer hover:text-gray-700">Fixture</li>
          <li className="cursor-pointer hover:text-gray-700">Teams</li>
          <li className="cursor-pointer hover:text-gray-700">Schedules</li>
        </ul>

        <div className="flex items-center gap-3">
          <div className="flex font-semibold items-center gap-2 shadow-lg p-3 rounded-lg bg-white">
            <span className="font-bold">{coins} Coin</span>
            <img className="w-5" src={Coin} alt="Coin" />
          </div>
        </div>
      </div>
    </div>
  );
}

Header.propTypes = {
  coins: PropTypes.number.isRequired,
};
