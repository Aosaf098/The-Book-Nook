import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "./ui/button";
import { auth } from "@/Firebase/firebase.init";
import { createUserWithEmailAndPassword } from "firebase/auth";

const Register = ({ handleSignInActive }) => {
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessmessage] = useState(false);

  const handleRegister = (e) => {
    e.preventDefault();
    // const registerName = e.target.name.value
    const registerMail = e.target.email.value;
    const registerPassword = e.target.password.value;

    setErrorMessage("");
    setSuccessmessage(false);

    createUserWithEmailAndPassword(auth, registerMail, registerPassword)
      .then((result) => {
        console.log(result.user);
        setSuccessmessage(true);
      })
      .catch((error) => {
        console.log("ERROR", error);
        setErrorMessage(error.message);
        setSuccessmessage(false);
      });
  };

  const validatePassword = (password) => {
    const errors = [];

    if (password.length < 8) {
      errors.push("Password must be at least 8 characters long.");
    }
    if (!/[a-z]/.test(password)) {
      errors.push("Password must include at least one lowercase letter.");
    }
    if (!/[A-Z]/.test(password)) {
      errors.push("Password must include at least one uppercase letter.");
    }
    if (!/\d/.test(password)) {
      errors.push("Password must include at least one digit.");
    }
    if (!/[@$!%*?&]/.test(password)) {
      errors.push(
        "Password must include at least one special character (e.g., @$!%*?&)."
      );
    }

    if (errors.length > 0) {
      errors.forEach((error) => {setErrorMessage(`- ${error}`)
      console.log(`- ${error}`)
    });
      return false;
    } else {
      return true;
    }
  };

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleRegister;
          validatePassword(e.target.password.value);
        }}
        className="w-full flex flex-col items-center gap-10"
      >
        <h1 className="font-sora text-3xl lg:text-4xl">Register</h1>
        {/* <Input
          className="w-3/5 font-sora font-bold"
          name="name"
          type="name"
          placeholder="Username"
        /> */}
        <Input
          className="w-[90%] lg:w-3/5 font-sora font-bold"
          name="email"
          type="email"
          placeholder="Email"
        />
        <Input
          className="w-[90%] lg:w-3/5 font-sora font-bold"
          name="password"
          type="password"
          placeholder="Password"
        />
        {errorMessage && <p className="text-red-500">{errorMessage}</p>}
        {successMessage && (
          <p className="text-green-500">Successfully Registered</p>
        )}
        <div>
          <Button>Continue</Button>
        </div>
        <p className="font-sora">
          Already have an account?{" "}
          <a
            onClick={handleSignInActive}
            className="border-b-2 border-solid border-black"
            href="#"
          >
            Sign In
          </a>
        </p>
      </form>
    </>
  );
};

export default Register;
