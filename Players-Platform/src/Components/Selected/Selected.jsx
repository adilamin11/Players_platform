import PropTypes from "prop-types";
import { AiOutlineDelete } from "react-icons/ai";
import { toast } from "react-toastify";

export default function Selected({ selected, setSelected, setActives }) {
  const handleClickDelete = (id) => {
    const removeItem = selected.filter((remove) => remove.id !== id);
    setSelected(removeItem);
    toast.success("Player removed successfully!", { position: "top-right" });
  };

  const handleAvailablePage = () => {
    setActives({
      available: true,
      status: "available",
    });
  };

  return (
    <div className="w-11/12 mx-auto my-5 p-4 bg-white shadow-md rounded-lg">
      {selected.length > 0 ? (
        selected.map(({ img, battingStyle, name, id }) => (
          <div
            key={id}
            className="flex flex-col sm:flex-row my-2 items-center justify-between border-2 rounded-lg border-gray-200 py-2 px-3"
          >
            <div className="flex items-center gap-3">
              <img className="w-16 h-16 object-cover rounded-lg" src={img} alt={name} />
              <div>
                <h2 className="text-xl font-semibold">{name}</h2>
                <p className="text-gray-500 text-sm">{battingStyle}</p>
              </div>
            </div>
            <button
              onClick={() => handleClickDelete(id)}
              className="text-red-600 bg-gray-100 p-2 rounded-lg hover:bg-gray-200 transition"
            >
              <AiOutlineDelete size={20} />
            </button>
          </div>
        ))
      ) : (
        <p className="text-center text-gray-500">No players selected.</p>
      )}
      <button
        onClick={handleAvailablePage}
        className="btn bg-lime-400 mt-4 w-full py-2 rounded-lg text-white font-semibold hover:bg-lime-500 transition"
      >
        Add More Players
      </button>
    </div>
  );
}

Selected.propTypes = {
  selected: PropTypes.array.isRequired,
  setActives: PropTypes.func.isRequired,
  setSelected: PropTypes.func.isRequired,
};
