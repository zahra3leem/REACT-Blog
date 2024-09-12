import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import zaghll from "../assets/1.jpg";
import logoo from "../Components/images/logoo-removebg-preview.png";

const Home = () => {
  const [posts, setPosts] = useState([]); // To store the fetched posts
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  // Fetch posts from rwan server
  useEffect(() => {
    fetch("https://react-blog-api-by-rwan.glitch.me/api/v1/posts") // Assuming your JSON server is running on port 3000
      .then((response) => response.json())
      .then((data) => setPosts(data.posts))
      .catch((error) => setErrors({ fetchError: "Error fetching posts" }));
  }, []);

  return (
    <>
      <navbar>
        <div className="navbar bg-base-100">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h7"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
              >
                <li>
                  <a>Profile</a>
                </li>
                <li>
                  <Link to="/logout">Log out</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="navbar-center">
            <div className="flex justify-center align-middle">
              <img className="w-40" src={logoo} alt="" />
            </div>
          </div>
          <div className="navbar-end">
            <button className="btn btn-ghost btn-circle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
            <button className="btn btn-ghost btn-circle">
              <div className="indicator">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                  />
                </svg>
                <span className="badge badge-xs badge-primary indicator-item"></span>
              </div>
            </button>
          </div>
        </div>
      </navbar>

      <div className="flex  bg-customBlue rounded-2xl">
        {/* Sidebar */}
        <div className="w-1/4 bg-customBlue p-4 rounded-2xl">
          <div className="mb-4">
            <div className="text-white font-bold w-full h-10 flex justify-start items-center hover:bg-white hover:bg-opacity-10 hover:backdrop-blur-xl hover:rounded-xl transition duration-300 ease-in-out">
              For You
            </div>
          </div>
          <div className="mb-4">
            <div className="text-white font-bold w-full h-10 flex justify-start items-center hover:bg-white hover:bg-opacity-10 hover:backdrop-blur-xl hover:rounded-xl transition duration-300 ease-in-out">
              Following
            </div>
          </div>
          <div className="mb-4">
            <div className="flex justify-between items-center">
              <div className="text-white font-bold w-full h-10 flex justify-start items-center hover:bg-white hover:bg-opacity-10 hover:backdrop-blur-xl hover:rounded-xl transition duration-300 ease-in-out">
                Channels
              </div>
              <button className="text-white btn-outline c glass w-10 rounded-xl">
                +
              </button>
            </div>
          </div>
          <div className="mb-4">
            <button className="text-white font-bold w-full h-10 flex justify-start items-center hover:bg-white hover:bg-opacity-10 hover:backdrop-blur-xl hover:rounded-xl transition duration-300 ease-in-out">
              Top Sources
            </button>
          </div>
          <div>
            <div className="flex justify-between items-center">
              <button className="text-white font-bold w-full h-10 flex justify-start items-center hover:bg-white hover:bg-opacity-10 hover:backdrop-blur-xl hover:rounded-xl transition duration-300 ease-in-out">
                Publishers
              </button>
              <button className="text-white btn-outline c glass w-10 rounded-xl">
                +
              </button>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="w-3/4 p-4 gap-5">
          <Link
            to="/creat"
            className="btn shadow-sm hover:bg-slate-700 focus:outline-none  btn-outline glass sm:btn-sm md:btn-md "
          >
            Create Post
          </Link>
          <div>
            {posts.length > 0 ? (
              posts.map((post) => (
                <div
                  key={post.id}
                  className="card card-side w-full  bg-gray-50 shadow-xl mb-4 mt-5"
                >
                  <figure style={{ maxWidth: 283, height: 353 }}>
                    <img
                      className="rounded-2xl object-cover w-full h-full"
                      src={post.images || { zaghll }}
                      alt={post.title}
                    />
                  </figure>
                  <div className="card-body ">
                    <h1 className="card-title text-4xl">{post.title}</h1>
                    <h4 className="font-bold text-xl font-serif">By:         {post.user.name}</h4>
                    {new Date().toLocaleTimeString()} -{" "}
                    {new Date().toLocaleDateString()}{" "}
                    <p className="text-left text-xl">{post.description}</p>
                    <div className="card-actions justify-end">
                      <Link
                        to={`/details/${post._id}`}
                        className="btn shadow-sm hover:bg-slate-700 focus:outline-none  btn-outline glass sm:btn-sm md:btn-md"
                      >
                        Read more
                      </Link>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <h1 className="text-white font-extrabold text-4xl">
                {" "}
                "اصبر وماصبرك الا بالله"
              </h1>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
