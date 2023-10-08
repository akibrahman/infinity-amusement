// import { BiHappyBeaming } from "react-icons/bi";
// import logo from "/logo.png";
import { AiFillGithub, AiOutlineGoogle } from "react-icons/ai";
import { BiLogoFacebook } from "react-icons/bi";
import { Link } from "react-router-dom";
import "./Login.css";

const Login = () => {
  return (
    <div className="main-div">
      <div className="container" id="container">
        <div className="form-container sign-in-container">
          <form className="main-form" action="#">
            <h1 className="title">Sign in</h1>
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
            <span>or use your account</span>
            <div className="infield">
              <input type="email" placeholder="Email" name="email" />
              <label></label>
            </div>
            <div className="infield">
              <input type="password" placeholder="Password" />
              <label></label>
            </div>
            <a href="#" className="forgot">
              Forgot your password?
            </a>
            <button className="in-btn">Sign In</button>
          </form>
        </div>
        <div className="overlay-container" id="overlayCon">
          <div className="overlay">
            <div className="overlay-panel overlay-right">
              <h1 className="title">Hello, Friend!</h1>
              <p>Do not have an Account?</p>
              <Link to="/registration">
                <button className="out-btn">Sign Up</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
