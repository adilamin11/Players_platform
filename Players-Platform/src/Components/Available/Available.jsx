import { useEffect, useState } from "react";
import SinglePlayer from "../SinglePlayer/SinglePlayer";
import PropTypes from "prop-types";

export default function Available({ handleChoosePlayer }) {
  const [players, setPlayers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch("fakeData.json")
      .then((res) => res.json())
      .then((data) => setPlayers(data));
  }, []);

  const filteredPlayers = players.filter((player) =>
    player.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mx-auto p-4">
      <input
        type="text"
        placeholder="Search players..."
        className="w-full p-2 border-2 rounded-lg mb-4"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-10">
        {filteredPlayers.length > 0 ? (
          filteredPlayers.map((player) => (
            <SinglePlayer
              handleChoosePlayer={handleChoosePlayer}
              key={player.id}
              player={player}
            />
          ))
        ) : (
          <p className="text-center col-span-full text-gray-500">No players found</p>
        )}
      </div>
    </div>
  );
}
Available.propTypes = {
  handleChoosePlayer: PropTypes.func.isRequired,
};
