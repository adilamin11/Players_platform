import PropTypes from "prop-types";
import { FaFlag, FaUser } from "react-icons/fa";

export default function SinglePlayer({ player, handleChoosePlayer }) {
  const { img, price, bowlingStyle, battingStyle, role, country, name } = player;
  return (
    <div className="card bg-white shadow-xl px-5 pt-5 rounded-lg transition-transform transform hover:scale-105 duration-300">
      <figure className="overflow-hidden rounded-t-lg">
        <img
          src={img}
          alt={name}
          className="rounded-xl object-cover w-full h-[350px] transition-transform transform hover:scale-110 duration-300"
        />
      </figure>
      <div className="flex items-center gap-2 mt-3">
        <FaUser className="text-gray-600" />
        <h2 className="text-lg font-bold">{name}</h2>
      </div>
      <div className="flex justify-between items-center border-b-2 py-4">
        <div className="flex items-center gap-2">
          <FaFlag className="text-gray-600" />
          <p className="text-gray-700">{country}</p>
        </div>
        <p className="px-3 py-1 bg-gray-200 rounded-full text-sm font-semibold">{role}</p>
      </div>
      <h2 className="font-bold py-2">Ratings</h2>
      <div className="flex justify-between items-center py-3 text-gray-700">
        <p className="font-semibold">{battingStyle}</p>
        <p className="text-gray-500">{bowlingStyle}</p>
      </div>
      <div className="flex justify-between items-center py-3">
        <p className="font-bold text-lg">Price: ${price}</p>
        <button
          onClick={() => handleChoosePlayer(player)}
          className="btn border-lime-500 hover:bg-lime-400 px-4 py-2 rounded-lg transition-all duration-300"
        >
          Choose Player
        </button>
      </div>
    </div>
  );
}

SinglePlayer.propTypes = {
  player: PropTypes.object.isRequired,
  handleChoosePlayer: PropTypes.func.isRequired,
};
