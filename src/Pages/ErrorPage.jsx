import error from "../Components/images/404 Error Page not Found with people connecting a plug.gif";
import { Link } from "react-router-dom";

function ErrorPage() {
  return (
    <div className="w-full flex flex-col items-center justify-center">
      <img src={error} alt="404 Error - Page not found" className="mb-4" />
      <Link to="/home" className="btn glass">
        GO BACK HOME
      </Link>
    </div>
  );
}

export default ErrorPage;
