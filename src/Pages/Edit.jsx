
import { useNavigate } from "react-router";
import axios from "axios";
import { useForm } from "react-hook-form";
import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";
import { useParams } from 'react-router-dom';


function Edit() {
  const { user } = useContext(AuthContext);
  const userId = user?._id; // Safely access user._id
  const navigate = useNavigate();
  const {id}=useParams();

  // Initialize react-hook-form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.set("title", data.title);
    formData.set("description", data.description);
    formData.set("images", data.images[0]); // Getting the first file from the input

    // Include the userId in the form data
    if (userId) {
      formData.set("userId", userId);
    } else {
      alert("User ID not found. Please log in.");
      return;
    }

    const token = localStorage.getItem("token");

    try {
      // Ensure the token is available
      if (!token) {
        alert("You must be logged in to create a post.");
        return;
      }

      // Send the post request with the form data and token in headers
      const res = await axios.patch(
        `https://react-blog-api-by-rwan.glitch.me/api/v1/posts/${id}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: token, // Include token in the Authorization header
          },
        }
      );

      console.log("Response:", res.data);
      alert("Post created successfully");
      navigate("/home");
    } catch (error) {
      console.error("Error:", error);
      if (error.response) {
        console.error("Server error:", error.response.data);
        alert(
          "hi"
          //Error: ${error.response.data.message || "Something went wrong"}
        );
      } else {
        console.error("Error:", error.message);
        alert("Failed to create post");
      }
    }
  };
  return (
    <div>
      <>
        <div className="min-h-screen flex items-center justify-center ">
          <div className=" p-8 rounded-lg shadow-lg w-full bg-customBlue max-w-md">
            <h2 className="text-center text-2xl font-bold mb-6">
               Edit Post
            </h2>

            <form onSubmit={handleSubmit(onSubmit)}>
              {/* Title Input */}
              <div className="mb-4">
                <input
                  {...register("title", { required: "Title is required" })}
                  type="text"
                  placeholder="Title"
                  className={`input input-bordered w-full ${
                    errors.title ? "border-red-500" : ""
                  }
               }`}
                />
                {errors.title && (
                  <span className="text-red-500">{errors.title.message}</span>
                )}
              </div>

              {/* Summary Input */}
              <div className="mb-4">
                <input
                  {...register("description", {
                    required: "description is required",
                  })}
                  type="text"
                  placeholder="description"
                  className="input input-bordered w-full"
                />
                {errors.description && (
                  <span className="text-red-500">
                    {errors.description.message}
                  </span>
                )}
              </div>

              {/* File Input */}
              <div className="mb-4">
                <label
                  htmlFor="images"
                  className="block text-sm font-medium text-gray-700"
                >
                </label>
                <input
                  {...register("images", { required: "Image is required" })}
                  type="file"
                  id="images"
                  className={`mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm ${
                    errors.images ? "border-red-500" : ""
                  }`}
                />
                {errors.images && (
                  <span className="text-red-500">{errors.images.message}</span>
                )}
              </div>

              {/*  Simulation  Editor */}
             <div className="mb-4">
              <div className="border p-4 rounded-lg">
                <div className="flex justify-between mb-2">
                  <select className="select select-bordered w-24">
                    <option>Normal</option>
                    <option>Heading</option>
                  </select>
                  <div className="flex gap-2">
                    <button className="btn btn-sm btn-outline">B</button>
                    <button className="btn btn-sm btn-outline">I</button>
                    <button className="btn btn-sm btn-outline">U</button>
                    <button className="btn btn-sm btn-outline">Link</button>
                    <button className="btn btn-sm btn-outline">List</button>
                  </div>
                </div>
                <textarea
                  placeholder="Write your content here..."
                  className="textarea textarea-bordered w-full"
                  rows="4"
                ></textarea>
              </div>
            </div> 

              {/* Submit Button */}
              <button
               type="submit"
                className="btn btn-outline glass sm:btn-sm md:btn-md"
              >
                Post
              </button>
            </form>
          </div>
        </div>
      </>
    </div>
  );
}

export default Edit;
