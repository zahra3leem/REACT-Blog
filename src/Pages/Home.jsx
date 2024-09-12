import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logoo from "../Components/images/logoo-removebg-preview.png";
import PostsCard from "../Components/PostsCard";

const Home = () => {
  const [posts, setPosts] = useState([]); // To store the fetched posts
  const [filterdPosts, setFilterdPosts] = useState([]); // To store the fetched posts
  const [selectedUserId, setSelectedUserId] = useState(""); // To store the fetched posts
  const [, setErrors] = useState({});

  // Fetch posts from rwan server
  useEffect(() => {
    fetch("https://react-blog-api-by-rwan.glitch.me/api/v1/posts") // Assuming your JSON server is running on port 3000
      .then((response) => response.json())
      .then((data) => setPosts(data.posts))
      .catch(() => setErrors({ fetchError: "Error fetching posts" }));
  }, []);

  useEffect(() => {
    if (!selectedUserId || !posts) {
      setFilterdPosts(posts);
    } else {
      const filterdData = posts.filter((el) => el.user._id == selectedUserId);
      setFilterdPosts(filterdData);
    }
  }, [posts, selectedUserId]);

  const handleSelectUser = (id) => {
    setSelectedUserId(id);
  };

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
        {/* Main Content */}
        <div className=" p-4 gap-5">
          <div className=" flex justify-end">
            <button
              className=" hover:bg-slate-700 m-5  btn-outline 
            btn shadow-sm border-y-2 text-white bg-slate-700 focus:outline-none glass "
              onClick={() => {
                handleSelectUser("");
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-6"
              >
                <path
                  fillRule="evenodd"
                  d="M4.755 10.059a7.5 7.5 0 0 1 12.548-3.364l1.903 1.903h-3.183a.75.75 0 1 0 0 1.5h4.992a.75.75 0 0 0 .75-.75V4.356a.75.75 0 0 0-1.5 0v3.18l-1.9-1.9A9 9 0 0 0 3.306 9.67a.75.75 0 1 0 1.45.388Zm15.408 3.352a.75.75 0 0 0-.919.53 7.5 7.5 0 0 1-12.548 3.364l-1.902-1.903h3.183a.75.75 0 0 0 0-1.5H2.984a.75.75 0 0 0-.75.75v4.992a.75.75 0 0 0 1.5 0v-3.18l1.9 1.9a9 9 0 0 0 15.059-4.035.75.75 0 0 0-.53-.918Z"
                  clipRule="evenodd"
                />
              </svg>
              clear{" "}
            </button>
            <Link
              to="/creat"
              className=" hover:bg-slate-700 m-5  btn-outline 
            btn shadow-sm border-y-2 text-white bg-slate-700 focus:outline-none glass  "
            >
              Create Post
            </Link>
          </div>
          {filterdPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {filterdPosts.map((post) => (
                <PostsCard
                  data={post}
                  key={post.id}
                  handleSelectUser={handleSelectUser}
                />
              ))}
            </div>
          ) : (
            <h2 className="text-white ">No posts found</h2>
          )}
        </div>
      </div>
    </>
  );
};

export default Home;
