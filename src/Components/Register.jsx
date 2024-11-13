import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "./ui/button";
import { auth } from "@/Firebase/firebase.init";
import { createUserWithEmailAndPassword } from "firebase/auth";

const Register = ({ handleSignInActive }) => {

    const [errorMessage, setErrorMessage] = useState('')

    const handleRegister = e => {
        e.preventDefault()
        // const registerName = e.target.name.value
        const registerMail = e.target.email.value
        const registerPassword = e.target.password.value
        console.log(registerMail, registerPassword)

        setErrorMessage('')

        createUserWithEmailAndPassword(auth, registerMail, registerPassword)
        .then(result => {
            console.log(result.user)
        })
        .catch(error => {
            console.log("ERROR", error)
            setErrorMessage(error.message)
        })
    }

  return (
    <>
      <form onSubmit={handleRegister} className="w-full flex flex-col items-center gap-10">
        <h1 className="font-sora text-4xl">Register</h1>
        {/* <Input
          className="w-3/5 font-sora font-bold"
          name="name"
          type="name"
          placeholder="Username"
        /> */}
        <Input
          className="w-3/5 font-sora font-bold"
          name="email"
          type="email"
          placeholder="Email"
        />
        <Input
          className="w-3/5 font-sora font-bold"
          name="password"
          type="password"
          placeholder="Password"
        />
        {
            errorMessage && <p className="text-red-500">{errorMessage}</p>
        }
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
