import PropTypes from "prop-types";

export default function CartContainer({ handleActivesButton, actives, selected }) {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center w-11/12 mx-auto py-5 gap-4">
      <h1 className="lg:text-2xl text-xl mt-5 font-bold text-center md:text-left">
        {actives.available ? "Available Players" : `Selected Player (${selected.length}/6)`}
      </h1>
      <div className="flex gap-3">
        <button
          onClick={() => handleActivesButton("available")}
          className={`btn p-2 rounded-lg transition-all duration-300 ${actives.available ? "bg-lime-300 text-white" : "border-2 border-lime-400"}`}
        >
          Available
        </button>
        <button
          onClick={() => handleActivesButton("Selected")}
          className={`btn p-2 rounded-lg transition-all duration-300 ${actives.available ? "border-2 border-lime-400" : "bg-lime-300 text-white"}`}
        >
          Selected ({selected.length})
        </button>
      </div>
    </div>
  );
}

CartContainer.propTypes = {
  handleActivesButton: PropTypes.func.isRequired,
  actives: PropTypes.object.isRequired,
  selected: PropTypes.array.isRequired,
};
