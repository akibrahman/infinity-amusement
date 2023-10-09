import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";

const Profile = () => {
  const { user } = useContext(AuthContext);
  const { displayName, email, photoURL } = user;
  return (
    <div>
      <div className="w-[80%] md:w-[60%] mx-auto shadow-2xl p-10 my-10 flex items-center flex-col">
        <img className="w-52 rounded-lg" src={photoURL} alt="" />
        <p className="text-xl md:text-2xl lg:text-3xl font-semibold mt-5">
          {displayName}
        </p>
        <p className="mt-1 text-sm md:text-base">E-mail: {email}</p>
        <Link to="/updateProfile">
          <button className="bg-[#141E30] text-white font-bold rounded-[20px] py-2 px-8 mt-4 active:scale-75 duration-500">
            Update
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Profile;
