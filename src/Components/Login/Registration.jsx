import { AiFillGithub, AiOutlineGoogle } from "react-icons/ai";
// import logo from "/logo.png";
import { getAuth, updateProfile } from "firebase/auth";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { app } from "../../../firebase.config";
import { AuthContext } from "../AuthProvider/AuthProvider";
import "./Login.css";

const Registration = () => {
  const navigate = useNavigate();
  const auth = getAuth(app);
  const { register, googleLogin, githubLogin, setAS, AS } =
    useContext(AuthContext);

  const handleRegistration = (e) => {
    e.preventDefault();
    console.log(e);
    const form = new FormData(e.currentTarget);
    if (form.get("password").length < 6) {
      toast.warning("Password should be more than 6 character", {
        autoClose: 2000,
      });
      return;
    } else if (!/[A-Z]/.test(form.get("password"))) {
      toast.warning("Password should contain atleast one Capital letter", {
        autoClose: 2000,
      });
      return;
    } else if (!/[^a-zA-Z0-9]/.test(form.get("password"))) {
      toast.warning("Password should contain atleast one Special character", {
        autoClose: 2000,
      });
      return;
    }
    register(form.get("email"), form.get("password"))
      .then(() => {
        updateProfile(auth.currentUser, {
          displayName: form.get("name"),
          photoURL: form.get("url"),
        })
          .then(() => {
            navigate("/");
            toast.success("Successfully Registered", { autoClose: 2000 });
            setAS(!AS);
          })
          .catch((e) => console.log(e));
      })
      .catch((e) => console.log(e));
  };

  const handleGoogleLogin = () => {
    googleLogin()
      .then()
      .catch((e) => {
        console.log(e.code);
      });
  };

  const handleGithubLogin = () => {
    githubLogin()
      .then()
      .catch((e) => console.log(e));
  };

  return (
    <div
      data-aos="zoom-in-up"
      data-aos-duration="900"
      className="flex flex-col lg:flex-row items-center w-[95%] lg:w-[70%] mx-auto shadow-xl my-10"
    >
      <div className="lg:w-1/2 p-5 md:p-10">
        <form
          onSubmit={handleRegistration}
          className="flex flex-col gap-4 items-center"
        >
          <h1 className="font-bold text-3xl">Registration</h1>
          <div className="flex gap-4">
            <a
              href="#"
              onClick={handleGoogleLogin}
              className="border rounded-full p-2"
            >
              <AiOutlineGoogle className="text-xl"></AiOutlineGoogle>
            </a>
            <a
              href="#"
              onClick={handleGithubLogin}
              className="border rounded-full p-2"
            >
              <AiFillGithub className="text-xl"></AiFillGithub>
            </a>
          </div>
          <span>or use E-mail & Password to create</span>
          <div className="w-full">
            <input
              className="w-full bg-[#f3f3f3] px-4 py-3"
              type="text"
              placeholder="Name"
              name="name"
              required
            />
            <label className=""></label>
          </div>

          <div className="w-full">
            <input
              className="w-full bg-[#f3f3f3] px-4 py-3"
              type="email"
              placeholder="Email"
              name="email"
              required
            />
            <label className=""></label>
          </div>

          <div className="w-full">
            <input
              className="w-full bg-[#f3f3f3] px-4 py-3"
              type="text"
              placeholder="Photo URL"
              name="url"
              required
            />
            <label className=""></label>
          </div>
          <div className="w-full">
            <input
              className="w-full bg-[#f3f3f3] px-4 py-3"
              type="password"
              placeholder="Password"
              name="password"
              required
            />
            <label className=""></label>
          </div>
          <button
            type="submit"
            className="bg-[#141E30] text-white font-bold uppercase rounded-[20px] py-3 px-11 text-xs"
          >
            Register
          </button>
        </form>
      </div>

      <div className="bg-gradient-to-l from-[#141E30] to-[#243B55] w-full lg:w-1/2 flex flex-col items-center  h-full py-10 text-white rounded-md">
        <h1
          className="text-3xl font-semibold mb-10
        "
        >
          Welcome Back!
        </h1>
        <p>Already have an Account?</p>
        <Link to="/login">
          <button className="border px-6 py-2 rounded-3xl mt-3">Log In</button>
        </Link>
      </div>
    </div>
  );
};

export default Registration;
