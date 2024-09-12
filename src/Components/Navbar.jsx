import { Link } from "react-router-dom";
import logoo from "./images/logoo-removebg-preview.png";


const Navbar= ()=>{
    return (
        <>
        <div className="navbar text-zinc-700  p-1">
        <div className="flex-1">
          <img src={logoo} alt="logo" className="w-20 h-20 " />
        </div>
        <div>
          <ul>
            <button className="btn shadow-sm hover:bg-slate-700 focus:outline-none  btn-outline glass sm:btn-sm md:btn-md ">
              <li>
                <Link to="/log">Login</Link>
              </li>
            </button>
            <button className="btn shadow-sm hover:bg-slate-700 focus:outline-none  btn-outline glass sm:btn-sm md:btn-md ">
              <li>
                <Link to="/register">Register</Link>
              </li>
            </button>
          </ul>
        </div>
      </div>
      </>

    )
}

export default Navbar