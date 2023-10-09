import { Link } from "react-router-dom";
import "./ErrorPage.css";
import Scarecrow from "/Scarecrow.png";

const ErrorPage = () => {
  return (
    <div>
      <header className="header">
        <p>404 not Found</p>
        <div className="banner">
          <div className="b-left">
            <img src={Scarecrow} alt="" />
          </div>
          <div className="b-right">
            <h1>
              I have Bad News <br />
              for you
            </h1>
            <p>
              The page you are looking for might be removed or is temporary
              unavailable.
            </p>
            <Link to="/">
              {" "}
              <button className="active:scale-75 duration-500">
                back to homepage
              </button>
            </Link>
          </div>
        </div>
        <span className="copy mt-16">Created By &copy;Infinite Amusements</span>
      </header>
    </div>
  );
};

export default ErrorPage;
