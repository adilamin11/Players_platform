import bgPic from "../../assets/banner-main.png";
import bgShadow from "../../assets/bg-shadow.png";
import PropTypes from "prop-types";

export default function Banner({ handleCliamCoin }) {
  return (
    <div className="w-11/12 mx-auto ">
      <div
        className="my-10 rounded-xl bg-center bg-no-repeat p-8"
        style={{
          backgroundImage: `url(${bgShadow})`,
          backgroundSize: "100%",
          backgroundColor: "black",
        }}
      >
        <div className="flex justify-center items-center flex-col gap-4 ">
          <img src={bgPic} alt="" />
          <h1 className="text-3xl text-white font-bold">
            Assemble Your Ultimate Dream 11 Cricket Team
          </h1>
          <h3 className="text-2xl text-gray-200 font-semibold">
            Beyond Boundaries Beyond Limits
          </h3>

          <span className="border-2 border-lime-400 p-2 rounded-lg">
            <button
              onClick={() => handleCliamCoin(600000)}
              className="btn bg-lime-400 border-2 p-3 rounded-lg"
            >
              Claim Free Credit
            </button>
          </span>
        </div>
      </div>
    </div>
  );
}

Banner.propTypes = {
  handleCliamCoin: PropTypes.func.isRequired,
};
