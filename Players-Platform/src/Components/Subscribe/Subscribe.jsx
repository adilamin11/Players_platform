import bgShadow from "../../assets/bg-shadow.png";

export default function Subscribe() {
  return (
    <div className="relative -bottom-40 ">
      <div className="w-11/12 mx-auto ">
        <div
          className="my-5 rounded-xl bg-center bg-no-repeat p-5"
          style={{
            backgroundImage: `url(${bgShadow})`,
            backgroundSize: "100%",
            backgroundColor: "white",
          }}
        >
          <div className="flex items-center justify-center flex-col space-y-4 py-20">
            <h1 className="font-bold text-3xl text-black">
              Subscribe to our Newsletter
            </h1>
            <h3 className="text-gray-400 font-semibold">
              Get the latest updates and news right in your inbox!
            </h3>

            <div className="flex items-center gap-5">
              <input
                type="email"
                placeholder="Enter your email"
                className="input  shadow-xl shadow-white border-2 border-yellow-300 w-full max-w-xs"
              />
              <button className="btn bg-gradient-to-r from-pink-500 to-yellow-500 text-white">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
