import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "./ui/button";

const LogIn = ({ handleSignUpActive }) => {
  return (
    <>
      <form className="w-full flex flex-col items-center gap-10">
        <h1 className="font-sora text-3xl lg:text-4xl">Log In</h1>
        <Input
          className="w-[90%] lg:w-3/5 font-sora font-bold"
          type="email"
          placeholder="Email"
        />
        <Input
          className="w-[90%] lg:w-3/5 font-sora font-bold"
          type="password"
          placeholder="Password"
        />
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
