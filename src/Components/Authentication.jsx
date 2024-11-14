import React, { useState } from "react";
import AuthImg from "../../public/authImg.png";
import "../index.css";
import { Button } from "./ui/button";
import LogIn from "./LogIn";
import Register from "./Register";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "@/Firebase/firebase.init";

const Authentication = () => {

  const googleProvider = new GoogleAuthProvider() 

  const [signInActive, setSignInActive] = useState(false);
  const [signUpActive, setSignUpActive] = useState(false);

  const handleSignInActive = () => {
    setSignInActive(true);
    setSignUpActive(false);
  };
  const handleSignUpActive = () => {
    setSignUpActive(true);
    setSignInActive(false);
  };

  const handleGoogleSignIn = () => {
    signInWithPopup(auth, googleProvider) 
        .then(result => {
            console.log(result.user)
        })
        .catch(error => console.log('ERROR', error))
  }

  return (
    <>
      <div className="w-full h-dvh lg:flex lg:justify-between">
        <div className="lg:w-[60%] h-full flex flex-col gap-4 items-center justify-center py-10 ">
          <h1 className="font-edu text-5xl lg:text-7xl text-center">The Book Nook</h1>
          <div className="w-full flex justify-center gap-6 lg:gap-32 my-10">
            <Button
              onClick={handleSignInActive}
              variant="secondary"
              className={`font-sora text-lg p-6 ${
                signInActive && "bg-black text-white"
              }`}
            >
              Sign In
            </Button>
            <Button
              onClick={handleSignUpActive}
              variant="secondary"
              className={`font-sora text-lg p-6 ${
                signUpActive && "bg-black text-white"
              }`}
            >
              Sign Up
            </Button>
          </div>
          <div className={`lg:w-1/2 bg-gray-100 rounded-2xl p-4 lg:p-10 ${signUpActive && 'hidden'}`}>
            {signInActive && <LogIn handleSignUpActive={handleSignUpActive} />}
          </div>
          <div className={`lg:w-1/2 bg-gray-100 rounded-2xl p-10 ${signInActive && 'hidden'}`}>{signUpActive && <Register handleSignInActive={handleSignInActive} />}</div>
          OR
          <hr className="w-1/2 border-black" />
          <div className="flex items-center flex-col gap-3">
            <h3 className="font-sora font-medium">Sign in with Socials</h3>
            <div className="flex items-center gap-8">
              <img
                onClick={handleGoogleSignIn}
                className="w-14 cursor-pointer rounded-[50%] hover:bg-slate-200"
                src="https://img.icons8.com/?size=80&id=hFJUPuQ-CF0p&format=png"
                alt=""
              />
              <img
                className="w-14 cursor-pointer"
                src="https://img.icons8.com/?size=48&id=ddJXF_L1PvL_&format=png"
                alt=""
              />
              <img
                className="w-14 cursor-pointer"
                src="https://img.icons8.com/?size=80&id=6BmXkftCQhH8&format=png"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="w-[40%] h-full object-contain hidden lg:block">
          <img
            className="w-full object-cover h-full filter brightness-125"
            src={AuthImg}
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default Authentication;
