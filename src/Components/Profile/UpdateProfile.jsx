import { getAuth, updateProfile } from "firebase/auth";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { app } from "../../../firebase.config";
import { AuthContext } from "../AuthProvider/AuthProvider";

const UpdateProfile = () => {
  const navigate = useNavigate();
  const { setAS, AS } = useContext(AuthContext);
  const auth = getAuth(app);
  const handleUpdation = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const newName = form.get("name");
    const newURL = form.get("url");
    if (!newName) {
      toast.warning("Please Input New Name", { autoClose: 2000 });
      return;
    } else if (!newURL) {
      toast.warning("Please Input New Photo URL", { autoClose: 2000 });
      return;
    } else if (
      !/\.(jpg|jpeg|png|gif|bmp)$/i.test(newURL) &&
      !/^(https?:\/\/)?\S+\.\S+$/i.test(newURL)
    ) {
      toast.warning("Image URL is not valid", { autoClose: 2000 });
      return;
    } else {
      updateProfile(auth.currentUser, {
        displayName: newName,
        photoURL: newURL,
      })
        .then(() => {
          navigate("/profile");
          setAS(!AS);
          toast.success("Profile Updated", { autoClose: 2000 });
        })
        .catch((e) => {
          console.log(e);
        });
    }
  };
  return (
    <div>
      <div className="w-[60%] mx-auto shadow-2xl p-10 my-10 flex items-center flex-col">
        <p className="text-[#141E30] text-2xl font-semibold mb-10 border-2 border-[#141E30] px-32 py-3 rounded-lg">
          Update Profile
        </p>
        <form onSubmit={handleUpdation} className="flex flex-col items-center">
          <input
            name="name"
            className="bg-stone-200 px-7 py-3 text-[#141E30] font-medium rounded-md focus:outline-none"
            placeholder="New Display Name"
            type="text"
          />
          <input
            name="url"
            className=" mt-5 bg-stone-200 px-7 py-3 text-[#141E30] font-medium rounded-md focus:outline-none"
            placeholder="New Photo URL"
            type="text"
          />
          <input
            className="bg-[#141E30] text-white font-bold rounded-[20px] text-center py-2 px-6 select-none cursor-pointer mt-5 active:scale-75 duration-500"
            value="Update"
            type="submit"
          />
        </form>
      </div>
    </div>
  );
};

export default UpdateProfile;
