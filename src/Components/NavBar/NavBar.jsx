// import logo from "/logo.png";
import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../AuthProvider/AuthProvider";

const NavBar = () => {
  const { user, load, logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut()
      .then(() => {
        toast.success("Successfully Logged out!", { autoClose: 2000 });
      })
      .catch((e) => console.log(e));
  };
  return (
    <div className="font-poppins bg-gradient-to-r from-[#141E30] to-[#243B55]  w-full z-10">
      <div className="w-[90%] mx-auto flex flex-col md:flex-row items-center gap-4 md:gap-0 md:justify-between py-4">
        <div className="">
          <p className="font-logo text-2xl font-bold text-white">
            Infinite Amusements
          </p>
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
        {user && !load ? (
          <div className="flex items-center justify-center gap-4">
            <img
              className="w-11 h-11 rounded-full"
              src={user.photoURL}
              alt=""
            />
            <p className="text-white">
              {user.displayName ? user.displayName : "Nai"}
            </p>
            <button
              onClick={handleLogOut}
              className="bg-red-500 px-3 py-1 rounded-lg font-medium text-white"
            >
              Log out
            </button>
          </div>
        ) : (
          <div className="flex items-center justify-center gap-4">
            <Link to="/login">
              <button className="bg-[#141E30] px-4 py-2 rounded-lg font-medium text-white">
                Log In
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavBar;
