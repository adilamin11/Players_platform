import Logo from "../../assets/logo-footer.png";
import Subscribe from "../Subscribe/Subscribe";

export default function Footer() {
  return (
    <>
      <Subscribe />
      <div className="bg-black text-white py-10">
        <div className="flex justify-center items-center pt-10 md:pt-20">
          <img src={Logo} alt="Logo" className="w-24 md:w-32" />
        </div>
        <div className="flex flex-col md:flex-row md:justify-between items-center w-11/12 mx-auto space-y-8 md:space-y-0 py-10">
          <nav className="flex flex-col space-y-3 text-center md:text-left">
            <h6 className="text-lg md:text-xl font-semibold">About Us</h6>
            <p className="text-gray-400 text-sm md:text-base">
              We are a passionate team dedicated to providing the best services to our customers.
            </p>
          </nav>
          <nav className="flex flex-col space-y-2 text-center md:text-left">
            <h6 className="text-lg md:text-xl font-semibold">Quick Links</h6>
            <a href="#" className="text-gray-400 hover:text-white transition">Home</a>
            <a href="#" className="text-gray-400 hover:text-white transition">Service</a>
            <a href="#" className="text-gray-400 hover:text-white transition">About</a>
            <a href="#" className="text-gray-400 hover:text-white transition">Contact</a>
          </nav>
          <form className="text-center md:text-left w-full md:w-auto">
            <h6 className="text-lg md:text-xl font-semibold">Subscribe</h6>
            <p className="text-gray-400 text-sm md:text-base">
              Subscribe to our newsletter for the latest updates.
            </p>
            <div className="mt-3 flex flex-col md:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="input input-bordered p-2 rounded-lg w-full md:w-auto"
              />
              <button className="btn bg-orange-400 p-2 rounded-lg text-white hover:bg-orange-500 transition">
                Subscribe
              </button>
            </div>
          </form>
        </div>
        <hr className="border-gray-50 w-11/12 mx-auto" />
        <p className="text-gray-400 text-center p-5 text-sm md:text-base">
          ©2024 Your Company. All Rights Reserved.
        </p>
      </div>
    </>
  );
}
