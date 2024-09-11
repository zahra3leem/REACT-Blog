import axios from "axios";
import { useState, useContext } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import logoo from "../Components/images/logoo-removebg-preview.png"

function Login() {
  const { login } = useContext(AuthContext);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    let validationErrors = {};

    if (!formData.email) {
      validationErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      validationErrors.email = "Email is not valid";
    }

    if (!formData.password) {
      validationErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      validationErrors.password =
        "Password length must be at least 6 characters";
    }

    setErrors(validationErrors);

    // if (Object.keys(validationErrors).length === 0) {
    //   axios
    //     .post("https://react-blog-api-by-rwan.glitch.me/api/v1/users/login")
    //     .then((res) => {
    //       const user = res.data.find((user) => user.email === formData.email);
    //       if (user) {
    //         if (user.password === formData.password) {
    //           login();
    //           <div className=" toast alert alert-success">
    //           <span>Login Successful</span>
    //         </div>;
    //           navigate("/home"); // Redirect to home page after successful login
    //         } else {
    //           validationErrors.password = "Wrong Email or Password";
    //           validationErrors.email = "Wrong Email or Password";
    //         }
    //       } else {
    //         validationErrors.email = "Wrong Email or Password";
    //       }
    //       setErrors(validationErrors);
    //     })
    //     .catch((err) => console.log(err));
    // }

    // console.log(formData);
    if (Object.keys(validationErrors).length === 0) {
      try {
        const res = await axios.post(
          "https://react-blog-api-by-rwan.glitch.me/api/v1/users/login",
          formData
        );
        console.log(res.data);

        // If successful, store the token and log in the user
        localStorage.setItem("token", res.data.token); // Store token in localStorage
        login(res.data.token, res.data.user);
        //const user = res.data.user;
        //login(user); // Log in the user by updating the context4

        console.log(res.data.token);
        // Show success notification and redirect
        alert("Login Successful");
        console.log("hi");
        navigate("/home");
      } catch (error) {
        // Show error notification if the login fails
        alert("Login failed");
        console.log("Login error:", error);
      }
}
  };

  return (
    <>
      <div className="flex items-center justify-center min-h-screen">
        <div className="bg-customBlue w-full max-w-md p-8 shadow- rounded-lg transform transition-transform hover:scale-105 duration-300 ease-in-out">
       
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="flex justify-center align-middle">
            <img className="w-40" src={logoo} alt="" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-bold">
                Email
              </label>
              <input
                type="email"
                id="email"
                onChange={(event) =>
                  setFormData({ ...formData, email: event.target.value })
                }
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-gray-600  sm:text-sm"
                placeholder="Enter your email"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
              )}
            </div>

            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-sm font-bold"
              >
                Password
              </label>
              <input
                onChange={(event) =>
                  setFormData({ ...formData, password: event.target.value })
                }
                type="password"
                id="password"
                className={`mt-1 block w-full px-3 py-2 rounded-md shadow-sm focus:outline-none focus:border-gray-600  sm:text-sm ${
                  errors.password ? "border-red-500" : ""
                }`}
                placeholder="Password"
              />
              {errors.password && (
                <span className="text-red-500">{errors.password}</span>
              )}
            </div>

            <button
              type="submit"
              className="w-full glass py-2 px-4  text-xl font-bold rounded-md shadow-sm hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-offset-2  transition-transform transform hover:scale-105 duration-300 ease-in-out"
            >
              Log in
            </button>
            <p className="p-5">
              Already have account?{" "}
              <Link to="/register" className="text-orange-950 font-bold">
                Register Now
              </Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
