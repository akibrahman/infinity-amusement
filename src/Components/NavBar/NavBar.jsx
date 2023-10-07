// import logo from "/logo.png";
import user from "/user.jpg";

const NavBar = () => {
  return (
    <div className="font-poppins bg-[rgba(0,0,0,0.7)] absolute w-full z-10">
      <div className="w-[90%] mx-auto flex items-center justify-between py-4">
        <div className="">
          <p className="font-logo text-2xl font-bold text-white">
            Infinite Amusements
          </p>
          {/* <img className="w-24" src={logo} alt="" /> */}
        </div>
        <div className="flex items-center justify-center gap-6 text-white">
          <p>Home</p>
          <p>Blog</p>
          <p>Profile</p>
          <p>Contact us</p>
        </div>
        <div className="flex items-center justify-center gap-4">
          <img className="w-11 h-11 rounded-full" src={user} alt="" />
          <p className="text-white">Akib Rahman</p>
          <button className="bg-green-500 px-2 py-1 rounded-lg font-medium text-white">
            Log out
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
