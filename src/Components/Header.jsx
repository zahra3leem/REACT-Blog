import { Link } from "react-router-dom"
import logo from "./images/Wall post.gif"
import logoo from "./images/logoo-removebg-preview.png"

function Header() {
  return (
    <>

      <div className="navbar text-zinc-700  p-1">
        <div className="flex-1">
<img src={logoo} alt="logo" className="w-20 h-20"/>


        
        </div>
        <div>
          <ul>
            <button className="btn shadow-sm hover:bg-slate-700 focus:outline-none  btn-outline glass sm:btn-sm md:btn-md "><li><Link to="/log">Login</Link></li></button>
            <button className="btn shadow-sm hover:bg-slate-700 focus:outline-none  btn-outline glass sm:btn-sm md:btn-md "><li><Link to="/register">Register</Link></li></button>
          </ul>
        </div>
      </div>


      <div className="flex items-center justify-between container bg-customBlue  rounded-xl md:p-1">
        <img  className="w-8/12 rounded-xl md:w-8/12 mb-4 md:mb-0 " src={logo}>
        </img>
        
        <h1 className=" w-1/2 text-5xl font-bold  text-zinc-700 ">
          Hallo, Welcome in Dory blog website.
        </h1>

      </div>

    </>

  )
}

export default Header