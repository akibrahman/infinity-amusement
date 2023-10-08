// import logo from "/logo.png";
import { NavLink } from "react-router-dom";
import user from "/user.jpg";

const NavBar = () => {
  return (
    <div className="font-poppins bbg-[rgba(0,255,0,0.2)] absolute w-full z-10">
      <div className="w-[90%] mx-auto flex items-center justify-between py-4">
        <div className="">
          <p className="font-logo text-2xl font-bold text-white">
            Infinite Amusements
          </p>
          {/* <img className="w-24" src={logo} alt="" /> */}
        </div>
        <div className="flex items-center justify-center gap-6 text-white">
          <NavLink to="/">
            <p>Home</p>
          </NavLink>
          <NavLink to="/events">
            <p>Events</p>
          </NavLink>
          <NavLink to="/profile">
            <p>Profile</p>
          </NavLink>
          <NavLink to="/contactus">
            <p>Contact us</p>
          </NavLink>
        </div>
        <div className="hidden items-center justify-center gap-4">
          <img className="w-11 h-11 rounded-full" src={user} alt="" />
          <p className="text-white">Akib Rahman</p>
          <button className="bg-red-500 px-3 py-1 rounded-lg font-medium text-white">
            Log out
          </button>
        </div>
        <div className="flex items-center justify-center gap-4">
          <button className="bg-green-500 px-3 py-1 rounded-lg font-medium text-white">
            Log In
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
