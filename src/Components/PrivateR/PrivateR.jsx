import { useContext } from "react";
import { Dna } from "react-loader-spinner";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";

const PrivateR = ({ children }) => {
  const { user, load } = useContext(AuthContext);
  const location = useLocation();
  if (load) {
    return (
      <div className="flex justify-center py-32">
        <Dna
          visible={true}
          height="80"
          width="80"
          ariaLabel="dna-loading"
          wrapperStyle={{}}
          wrapperClass="dna-wrapper"
        />
      </div>
    );
  } else if (user) {
    return children;
  }
  return <Navigate state={location.pathname} to="/login"></Navigate>;
};

export default PrivateR;
