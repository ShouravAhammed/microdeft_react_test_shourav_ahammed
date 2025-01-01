import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { IoIosEye, IoIosEyeOff } from "react-icons/io";

const Login = () => {
  const [show, setShow] = useState(false);
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // Form submission handler
  const onSubmit = async (formData) => {
    try {
      const response = await axios.post(
        "https://react-interview.crd4lc.easypanel.host/api/login",
        formData,
        {
          headers: { Accept: "application/json" },
        }
      );
      console.log("Login successful", response.data);

      // Extract token from response
      const token = response?.data?.data?.token;

      if (token) {
        // Set token in cookies
        Cookies.set("token", token, { expires: 7, secure: true });
        console.log("Token stored in cookies");

        // Redirect to home page
        navigate("/");
      } else {
        console.warn("Token not found in response.");
      }
    } catch (error) {
      console.error("Error logging in", error.response?.data);
    }
  };

  return (
    <div className="h-screen max-w-7xl mx-auto flex justify-center items-center p-4">
      <div className="p-6 shadow-lg shadow-[#D3373C33] rounded-xl lg:w-[30%] md:w-[50%] w-full bg-white">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <h3 className="text-center font-semibold text-[#444444] text-[40px] pb-4">
            Login Now
          </h3>
          <div className="space-y-2">
            <label className="text-base font-semibold text-[#444444]">
              Email
            </label>
            <input
              type="email"
              className="border border-[#E8E8E8] rounded-md p-2 w-full text-base text-[#444444] hover:border-[#D3373C] focus:border-[#D3373C] duration-300"
              placeholder="Type here"
              {...register("email", {
                required: "Email is required",
              })}
            />
            {errors.email && (
              <span className="text-xs font-bold text-red-500">
                {errors.email.message}
              </span>
            )}
          </div>
          <div className="space-y-2">
            <label className="text-base font-semibold text-[#444444]">
              Password
            </label>
            <div className="relative">
              <input
                type={show ? "text" : "password"}
                className="border border-[#E8E8E8] rounded-md p-2 w-full text-base text-[#444444] hover:border-[#D3373C] focus:border-[#D3373C] duration-300"
                placeholder="Enter your password"
                {...register("password", { required: "Password is required" })}
                onChange={(e) => setPassword(e.target.value)}
              />
              {password.length > 0 && (
                <span
                  className="absolute right-3 top-2 cursor-pointer"
                  onClick={() => setShow(!show)}
                >
                  {show ? (
                    <IoIosEyeOff className="text-2xl text-[#444444]" />
                  ) : (
                    <IoIosEye className="text-2xl text-[#444444]" />
                  )}
                </span>
              )}
            </div>
            {errors.password && (
              <span className="text-xs font-bold text-red-600">
                {errors.password.message}
              </span>
            )}
          </div>
          <div className="w-full my-4">
            <button
              type="submit"
              className="relative w-full inline-flex items-center justify-start px-8 py-2 overflow-hidden font-semibold transition-all bg-[#D3373C] rounded-md group"
            >
              <span className="relative w-full text-center text-white transition-colors duration-100 ease-in-out group-hover:text-white">
                Login now
              </span>
            </button>
          </div>
        </form>
        <p className="text-[#737373] font-normal text-base text-center pt-5">
          <small>Don't have an account?</small>{" "}
          <Link className="text-[#D3373C] font-bold" to={"/register"}>
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
