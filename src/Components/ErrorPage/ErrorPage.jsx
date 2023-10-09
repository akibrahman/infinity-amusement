import { Link } from "react-router-dom";
// import "./ErrorPage.css";
import Scarecrow from "/Scarecrow.png";

const ErrorPage = () => {
  return (
    <div>
      <header className="p-7 w-full h-full">
        <p className="text-2xl font-bold text-[#18263A]">404 not Found</p>
        <div className="h-[90%] flex flex-col md:flex-row items-center justify-center">
          <div className="flex justify-center">
            <img src={Scarecrow} className="w-[65%]" alt="" />
          </div>
          <div className="flex flex-col gap-10 items-start justify-center">
            <h1 className="text-[#333] text-6xl font-bold">
              I have a Bad News <br />
              for you
            </h1>
            <p className="text-[#4f4f4f] text-2xl font-bold leading-7 w-[40%]">
              The page you are looking for might be removed or is temporary
              unavailable.
            </p>
            <Link to="/">
              {" "}
              <button className="active:scale-75 duration-500 text-white text-lg font-bold bg-[#18263A] rounded-lg border-none outline-none px-8 py-3 capitalize">
                back to homepage
              </button>
            </Link>
          </div>
        </div>
        <span className="block text-center mt-28">
          Created By &copy;Infinite Amusements
        </span>
      </header>
    </div>
  );
};

export default ErrorPage;
