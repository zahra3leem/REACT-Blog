import logo from "./images/Wall post.gif";

function Header() {
  return (
    <div className="container">
      
      <div className="h-[90vh] flex items-center justify-between flex-col md:flex-row   bg-customBlue  rounded-xl p-3">
    <div className=" w-full md:w-[70%] h-full">

        <img
          className=" object-container  object-left rounded-xl  p-1 h-full"
          src={logo}
        ></img>
    </div>

       <h1 className="text-3xl md:text-5xl py-8 md:px-8 font-bold  text-zinc-700 flex-grow">
       Hallo, Welcome in Dory blog website.

        </h1>
      </div>
    </div>
  );
}

export default Header;
