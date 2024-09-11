import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import logoo from "../Components/images/logoo-removebg-preview.png"


function Register() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    let validationErrors = {};

    if (!formData.firstName) {
      validationErrors.firstName = "First name is required";
    }

    if (!formData.lastName) {
      validationErrors.lastName = "Last name is required";
    }

    if (!formData.email) {
      validationErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      validationErrors.email = "Email is not valid";
    }

    if (!formData.password) {
      validationErrors.password = "Password is required";
    } else if (formData.password.length < 8) {
      validationErrors.password =
        "Password length must be at least 8 characters";
    }

    if (formData.confirmPassword !== formData.password) {
      validationErrors.confirmPassword = "Passwords do not match";
    }

    setErrors(validationErrors);

    // check if email already exist
    if (Object.keys(validationErrors).length === 0) {
      // axios
      //   .get("http://localhost:3000/users")
      //   .then((res) => {
      //     const userExists = res.data.some(
      //       (user) => user.email === formData.email
      //     );
      //     if (userExists) {
      //       validationErrors.email = "Email already exists";
      //       setErrors(validationErrors);
      //     } else {
            axios
              .post("https://react-blog-api-by-rwan.glitch.me/api/v1/users/signup", formData)
              .then((res) => {
                console.log(res);
                <div className="alert alert-success">
                  <span>Registration Successful</span>
                </div>;
                navigate("/log");
              })
              .catch((err) => console.log(err));
          }
        // })
        // .catch((err) => console.log(err));
    

    console.log(formData);
  };

  return (
    <div className="flex items-center justify-center min-h-screen ">
      <div className=" bg-customBlue w-full max-w-md p-8 shadow- rounded-lg transform transition-transform hover:scale-105 duration-300 ease-in-out">
       
        <form className="space-y-4" onSubmit={handleSubmit}>
        <div className="flex justify-center align-middle">

        <img  className="w-40"src={logoo} alt="" />
        </div>
          <div>
            <label htmlFor="firstName" className="block text-sm font-bold">
              First name
            </label>
            <input
              type="text"
              id="firstName"
              onChange={(event) =>
                setFormData({ ...formData, firstName: event.target.value })
              }
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-gray-600  sm:text-sm"
              placeholder="First name"
            />
            {errors.firstName && (
              <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>
            )}
          </div>

          <div>
            <label htmlFor="lastName" className="block text-sm font-bold">
              Last name
            </label>
            <input
              type="text"
              id="lastName"
              onChange={(event) =>
                setFormData({ ...formData, lastName: event.target.value })
              }
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-gray-600  sm:text-sm"
              placeholder="Last name"
            />
            {errors.lastName && (
              <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>
            )}
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-bold">
              Email
            </label>
            <input
              onChange={(event) =>
                setFormData({ ...formData, email: event.target.value })
              }
              type="email"
              id="email"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-gray-600  sm:text-sm"
              placeholder="john.doe@example.com"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-bold">
              Password
            </label>
            <input
              type="password"
              id="password"
              onChange={(event) =>
                setFormData({ ...formData, password: event.target.value })
              }
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-gray-600  sm:text-sm"
              placeholder="********"
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">{errors.password}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="confirmPassword"
              className="block text-sm font-bold"
            >
              Confirm Password
            </label>
            <input
              onChange={(event) =>
                setFormData({
                  ...formData,
                  confirmPassword: event.target.value,
                })
              }
              type="password"
              id="confirmPassword"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-gray-600  sm:text-sm"
              placeholder="********"
            />
            {errors.confirmPassword && (
              <p className="text-red-500 text-sm mt-1">
                {errors.confirmPassword}
              </p>
            )}
          </div>

          <div>
            <button
              type="submit"
              className="w-full py-2 px-4 glass text-xl font-bold rounded-md shadow-sm hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:border-gray-600 transition-transform transform hover:scale-105 duration-300 ease-in-out"
            >
              Register
            </button>
            <p className="p-5">
              Already have account?{" "}
              <Link to="/log" className="text-orange-950 font-bold">
                Login Now
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
