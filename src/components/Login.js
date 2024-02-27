import React, { useRef } from "react";
import Header from "./Header";
import { useState } from "react";
import checkValidateData from "../utils/validate";
import { auth } from "../utils/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { AVATAR, BG_IMG } from "../utils/constants";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMsg, setErrorMsg] = useState();
  const email = useRef(null);
  const password = useRef(null);
  const navigate = useNavigate();
  const user = useRef(null);
  const dispatch = useDispatch();
  const handleButtonClick = () => {
    //Validate Form data
    // console.log(email);
    // console.log(password);
    const msg = checkValidateData(
      email.current.value,
      password.current.value
      // user.current.value
    );
    setErrorMsg(msg);
    //Error has ocurred
    if (msg) return;

    if (!isSignInForm) {
      //Sign Up logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          console.log(user);
          updateProfile(user, {
            displayName: user.current.value,
            photoURL: AVATAR,
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
              navigate("/browse");
            })
            .catch((error) => {
              setErrorMsg(error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // ..
          setErrorMsg(errorCode + "-" + errorMessage);
        });
    } else {
      //Sign In logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          // ...
          // console.log(user);
          navigate("/browse");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMsg(errorCode + "-" + errorMessage);
        });
    }
  };

  const toggleSignUpForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div className="">
      <Header />
      <div className="absolute w-screen  backdrop-contrast-50 brightness-50 ">
        <img className="mt-[1px] " src={BG_IMG} alt="bg image"></img>
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute my-[120px] mx-auto right-0 left-0 h-[510px] p-12 bg-black w-4/12 text-white bg-opacity-75 rounded-md"
      >
        <h1 className="text-3xl   ">{isSignInForm ? "Sign In" : "Sign Up"}</h1>
        {/* User  */}
        {!isSignInForm && (
          <input
            ref={user}
            type="text"
            placeholder="Username"
            className="p-2 my-3 w-full bg-gray-950 border-none  rounded-md bg-opacity-75"
          ></input>
        )}
        {/* Email */}
        <input
          //UseRef Hook reference passing
          ref={email}
          type="text"
          placeholder="Email Id or Phone number"
          className="p-2 my-3 w-full bg-gray-950 border-none  rounded-md bg-opacity-75"
        ></input>
        {/* Password */}
        <input
          //UseRef Hook reference passing
          ref={password}
          className="p-2 my-3 w-full bg-gray-950 border-none  rounded-md bg-opacity-75"
          type="password"
          placeholder="Password"
        ></input>
        <p className=" text-red-500">{errorMsg}</p>
        <button
          className="p-4 my-4 bg-red-600 w-full hover:bg-red-700 rounded-md "
          onClick={handleButtonClick}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <span>
          <h3 className="p-2 cursor-pointer " onClick={toggleSignUpForm}>
            {isSignInForm
              ? "New to Movie-Adda? Sign Up now."
              : "Already Registered ? Sign In now"}
          </h3>
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
