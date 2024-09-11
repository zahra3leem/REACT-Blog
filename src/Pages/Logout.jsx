import { useNavigate } from "react-router";
import { useEffect, useContext } from "react";
import { AuthContext } from "./../context/AuthContext";

function Logout() {
  const { logout } = useContext(AuthContext);
  const navigate = useNavigate();
  useEffect(() => {
    logout();
    navigate("/"); // Redirect to home page
  }, [logout, navigate]);
}

export default Logout;
