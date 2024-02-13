import React from "react";
import Header from "./Header";
const Login = () => {
  return (
    <div className="">
      <Header />
      <div className="absolute bg-no-repeat backdrop-contrast-50 brightness-50 ">
        <img
          className="bg"
          src="https://wallpaper.dog/large/20526896.jpg"
          alt="bg image"
        ></img>
      </div>
      <form className="absolute my-[160px] mx-auto right-0 left-0 h-[510px] p-12 bg-black w-4/12 text-white bg-opacity-75 rounded-md">
        <h1 className="text-4xl  py-2 ">Sign In</h1>
        <input
          type="text"
          placeholder="Email Id or Phone number"
          className="p-2 my-6 w-full bg-gray-950 border-none  rounded-md bg-opacity-75"
        ></input>
        <input
          className="p-2 my-6 w-full bg-gray-950 border-none  rounded-md bg-opacity-75"
          type="password"
          placeholder="Password"
        ></input>
        <button className="p-4 my-4 bg-red-600 w-full hover:bg-red-700 rounded-md ">
          Sign In
        </button>
        <span>
          <h3 className="p-2">New to Movie-Adda? Sign up now.</h3>
          <h3 className="p-2">
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot.
            <a
              href="https://policies.google.com/privacy"
              className="text-blue-600"
            >
              <h3>Learn More</h3>
            </a>
          </h3>
        </span>
      </form>
    </div>
  );
};

export default Login;
