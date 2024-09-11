import PropTypes from "prop-types";
import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from './../context/AuthContext';

function ProtectedRoute({ children }) {
  const { isLoggedIn } = useContext(AuthContext);

  if (!isLoggedIn) {
    return <Navigate to="/log" replace />;
  }

  return children;
}

export default ProtectedRoute;
ProtectedRoute.propTypes = {
  children: PropTypes.node.isRequired,
};
