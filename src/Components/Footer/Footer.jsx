import { AiFillTwitterCircle, AiFillYoutube } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { Link } from "react-router-dom";
import logo from "/logo.png";

const Footer = () => {
  return (
    <div className="bg-gradient-to-r from-[#141E30] to-[#243B55] px-20 pt-10 pb-2 text-white">
      <div className="flex items-center justify-between">
        <ul className="flex flex-col gap-1 text-lg font-bold">
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/events">
            <li>Events</li>
          </Link>
          <Link to="/profile">
            <li>Profile</li>
          </Link>
          <Link to="/contactUs">
            <li>Contact</li>
          </Link>
        </ul>
        <div className="flex flex-col items-center">
          <img className="w-[200px]" src={logo} alt="" />
          <p className="font-bold text-xl mt-2 font-logo">
            Infinite Amusements
          </p>
          <p>Best Events management Company</p>
        </div>
        <div className="flex flex-col items-center">
          <p className="mb-4">Find Us On</p>
          <div className="flex gap-3 items-center text-3xl cursor-pointer">
            <BsFacebook></BsFacebook>
            <AiFillYoutube></AiFillYoutube>
            <AiFillTwitterCircle></AiFillTwitterCircle>
          </div>
        </div>
      </div>
      <p className="mt-20 text-center font-medium text-white">
        All Rights Reserved By &copy;
        <span className="font-bold font-logo">Infinite Amusements</span>
      </p>
    </div>
  );
};

export default Footer;
