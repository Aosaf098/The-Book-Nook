import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "./ui/button";
import { Checkbox } from "./ui/checkbox";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/Firebase/firebase.init";
import { FiEyeOff, FiEye } from "react-icons/fi";

const LogIn = ({ handleSignUpActive }) => {

  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessmessage] = useState(false);
  const [eyeOpen, setEyeOpen] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    const logEmail = e.target.email.value;
    const logPassword = e.target.password.value;
    const logAcceptTerms = e.target.terms[1].checked;

    setErrorMessage("");
    setSuccessmessage(false);

    if (!logAcceptTerms) {
        setErrorMessage('Please Accept our terms & Conditions')
        return
    }

    console.log(logEmail, logPassword, logAcceptTerms);

    signInWithEmailAndPassword(auth, logEmail, logPassword)
      .then((res) => {
        console.log(res.user);
        setSuccessmessage(true);
      })
      .catch((error) => {
        console.log("ERROR", error.message);
        setErrorMessage(error.message);
        setSuccessmessage(false);
      });
  };

  const passwordEye = () => {
    setEyeOpen(!eyeOpen);
  };

  return (
    <>
      <form
        onSubmit={handleLogin}
        className="w-full flex flex-col items-center gap-10 relative lg:py-0 py-2"
      >
        <h1 className="font-sora text-3xl lg:text-4xl">Log In</h1>
        <div className="w-full flex flex-col items-center gap-8 relative">
          <Input
            className="w-[90%] lg:w-3/5 font-sora font-bold"
            type="email"
            name="email"
            placeholder="Email"
          />
          <Input
            className="w-[90%] lg:w-3/5 font-sora font-bold"
            type={eyeOpen ? "text" : "password"}
            name="password"
            placeholder="Password"
          />
          <button
            onClick={passwordEye}
            className="absolute lg:right-[120px] right-8 top-[76px] lg:top-[78px]"
          >
            {eyeOpen ? <FiEye size={18} /> : <FiEyeOff size={18} />}
          </button>
        </div>
        <div className="absolute top-[190px] lg:left-[100px] left-4">
            <a href="#" className="text-[12px] font-sora">Forget Passowrd?</a>
        </div>
        <div className="flex items-center space-x-2 mt-4">
          <Checkbox id="terms" name="terms" />
          <label
            htmlFor="terms"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Accept terms and conditions
          </label>
        </div>
        {errorMessage && <p className="text-red-500 text-sm">{errorMessage}</p>}
        {successMessage && (
          <p className="text-green-500 text-sm">Successfully Logged In</p>
        )}
        <div>
          <Button>Continue</Button>
        </div>

        <p className="font-sora">
          Don't have an account?{" "}
          <a
            onClick={handleSignUpActive}
            className="border-b-2 border-solid border-black"
            href="#"
          >
            Sign Up
          </a>
        </p>
      </form>
    </>
  );
};

export default LogIn;
