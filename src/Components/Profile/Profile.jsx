import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";

const Profile = () => {
  const { user } = useContext(AuthContext);
  const { displayName, email, photoURL, phoneNumber } = user;
  return (
    <div>
      <div className="w-[60%] mx-auto shadow-2xl p-10 my-10 flex items-center flex-col">
        <img className="w-52 rounded-lg" src={photoURL} alt="" />
        <p className="text-3xl font-semibold mt-5">{displayName}</p>
        <p className="mt-1">E-mail: {email}</p>
        <p className="mt-1">Phone: {phoneNumber ? phoneNumber : "No Number"}</p>
      </div>
    </div>
  );
};

export default Profile;
