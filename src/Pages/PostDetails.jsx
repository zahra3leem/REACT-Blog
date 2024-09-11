import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import zaghll from "../assets/1.jpg";

function PostDetails() {
  const [post, setPost] = useState(null);
  const { id } = useParams();
  const { user } = useContext(AuthContext);
  const userId = user?._id;
  const navigate = useNavigate();

  const deletePost = async (id) => {
    const token = localStorage.getItem("token");
    try {
      if (!token) {
        alert("You must be logged in to delete a post.");
        return;
      }

      // Sending delete request to delete only the post with the specific id
      await axios.delete(
        `https://react-blog-api-by-rwan.glitch.me/api/v1/posts/${id}`,
        {
          headers: {
            Authorization: token, // Include token in the Authorization header
          },
        }
      );
      alert("Post deleted successfully");
      navigate("/home")

      // After deleting the post, filter it out from the UI
      setPost((prevPosts) => prevPosts.filter((post) => post._id !== id));
    } catch (error) {
      console.error("Error:", error);
      if (error.response) {
        alert(
          "error"
        );
      } else {
        alert("Failed to delete post");
  }
}
};
  // const navigate = useNavigate();

  // const handleEdit=()=>{
  // navigate("editt/:id")
  // }

  console.log("Post ID from route:", id); // Debugging log for the post ID

  useEffect(() => {
    if (id) {
      // Ensure the ID is defined before making the request
      axios
        .get(`https://react-blog-api-by-rwan.glitch.me/api/v1/posts/${id}`)
        .then((res) => {
          setPost(res.data.data.post); // Correctly extract the post
          console.log(res.data.data.post); // Logging the correct post data
        })
        .catch((error) => {
          console.error("Error fetching the post:", error);
        });
    }
  }, [id]);

  return (
    <div className="relative flex justify-center">
      <div className="card bg-base-100 w-4/4  shadow-xl w-3/4">
        <figure className="relative h-4/4">
          <img
            className="w-full rounded-xl"
            src={post?.images || zaghll}
            alt={post?.title || "Default Image"}
          />
          <div className="flex flex-col gap-3 buttons absolute  w-12 items-center p-3 bg-customBlue  rounded-xl  top-5 right-5">
            {userId === post?.userId && (
              <div>
                <Link to={`/editt/${post._id}`} >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="size-6 text-black hover:text-slate-500 transition-colors duration-300"
                  >
                    <path d="M21.731 2.269a2.625 2.625 0 0 0-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 0 0 0-3.712ZM19.513 8.199l-3.712-3.712-12.15 12.15a5.25 5.25 0 0 0-1.32 2.214l-.8 2.685a.75.75 0 0 0 .933.933l2.685-.8a5.25 5.25 0 0 0 2.214-1.32L19.513 8.2Z" />
                  </svg>
                </Link>
                
                <button onClick={() => deletePost(post._id)}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="size-6 text-black hover:text-red-500 transition-colors duration-300"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-1.72 6.97a.75.75 0 1 0-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 1 0 1.06 1.06L12 13.06l1.72 1.72a.75.75 0 1 0 1.06-1.06L13.06 12l1.72-1.72a.75.75 0 1 0-1.06-1.06L12 10.94l-1.72-1.72Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>
            )}
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-6 text-black hover:text-red-500 transition-colors duration-300"
              >
                <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
              </svg>
            </button>
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-6 text-black hover:text-slate-500 transition-colors duration-300"
              >
                <path
                  fillRule="evenodd"
                  d="M4.804 21.644A6.707 6.707 0 0 0 6 21.75a6.721 6.721 0 0 0 3.583-1.029c.774.182 1.584.279 2.417.279 5.322 0 9.75-3.97 9.75-9 0-5.03-4.428-9-9.75-9s-9.75 3.97-9.75 9c0 2.409 1.025 4.587 2.674 6.192.232.226.277.428.254.543a3.73 3.73 0 0 1-.814 1.686.75.75 0 0 0 .44 1.223ZM8.25 10.875a1.125 1.125 0 1 0 0 2.25 1.125 1.125 0 0 0 0-2.25ZM10.875 12a1.125 1.125 0 1 1 2.25 0 1.125 1.125 0 0 1-2.25 0Zm4.875-1.125a1.125 1.125 0 1 0 0 2.25 1.125 1.125 0 0 0 0-2.25Z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>

          <Link
            to="/home"
            className="absolute top-0 left-0 rounded-2xl z-50 bg-white cursor-pointer  flex justify-center btn-lg  
          btn shadow-sm hover:bg-slate-500 focus:outline-none  btn-outline glass sm:btn-sm md:btn-md"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-6"
            >
              <path
                fillRule="evenodd"
                d="M9.53 2.47a.75.75 0 0 1 0 1.06L4.81 8.25H15a6.75 6.75 0 0 1 0 13.5h-3a.75.75 0 0 1 0-1.5h3a5.25 5.25 0 1 0 0-10.5H4.81l4.72 4.72a.75.75 0 1 1-1.06 1.06l-6-6a.75.75 0 0 1 0-1.06l6-6a.75.75 0 0 1 1.06 0Z"
                clipRule="evenodd"
              />
            </svg>
          </Link>
        </figure>
        <div className="text-slate-950 flex justify-center flex-col gap-2 p-9">
          <h1 className="font-bold text-4xl">{post?.title}</h1>
          <p className=" text-2xl">{post?.description}</p>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure amet consequuntur consectetur nesciunt et expedita voluptatem at debitis quidem commodi vero velit, aut nemo consequatur accusamus similique nostrum molestias facere, officia natus! Assumenda eveniet fugiat animi fugit, facilis vero omnis quibusdam quo ex quod quas nam repellendus excepturi sit perspiciatis.</p>
          <div className="card-actions justify-end"></div>
        </div>
      </div>
    </div>
  );
}

export default PostDetails;
