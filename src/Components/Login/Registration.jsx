import { AiFillGithub, AiOutlineGoogle } from "react-icons/ai";
import { BiLogoFacebook } from "react-icons/bi";
// import logo from "/logo.png";
import { Link } from "react-router-dom";
import "./Login.css";

const Registration = () => {
  return (
    <div className="main-div">
      <div className="container" id="container">
        <div className="form-container sign-up-container">
          <form className="main-form" action="#">
            <h1 className="title">Create Account</h1>
            <div className="social-container">
              <a href="#" className="active:scale-50 duration-300 ease-in-out">
                <BiLogoFacebook className="text-xl"></BiLogoFacebook>
              </a>
              <a href="#" className="active:scale-50 duration-300 ease-in-out">
                <AiOutlineGoogle className="text-xl"></AiOutlineGoogle>
              </a>
              <a href="#" className="active:scale-50 duration-300 ease-in-out">
                <AiFillGithub className="text-xl"></AiFillGithub>
              </a>
            </div>
            <span>or use your email for registration</span>
            <div className="infield">
              <input type="text" placeholder="Name" />
              <label></label>
            </div>
            <div className="infield">
              <input type="text" placeholder="Photo URL" />
              <label></label>
            </div>
            <div className="infield">
              <input type="email" placeholder="Email" name="email" />
              <label></label>
            </div>
            <div className="infield">
              <input type="password" placeholder="Password" />
              <label></label>
            </div>
            <button className="in-btn">Sign Up</button>
          </form>
        </div>
        <div className="overlay-container" id="overlayCon">
          <div className="overlay">
            <div className="overlay-panel overlay-right">
              <h1 className="title">Welcome Back!</h1>
              <p>Already have an account?</p>
              <Link to="/login">
                {" "}
                <button className="out-btn">Sign In</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
