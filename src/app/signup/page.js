"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { UserAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import Spinner from "../components/Spinner";

function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { user, signUp } = UserAuth();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 400);
  }, []);

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signUp(email, password);
      router.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="min-h-2/3 p-10 flex items-center justify-center  bg-[#fefae0] dark:bg-gray-900">
      {loading ? (
        <Spinner />
      ) : (
        <>
          <form
            className="p-8 rounded shadow-lg w-96 border-2"
            onSubmit={handleSubmit}
          >
            <h2 className="text-2xl font-bold mb-4">Sign Up</h2>

            <div className="mb-4">
              <label
                className="block text-gray-700 dark:text-white text-sm font-bold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:text-white leading-tight focus:outline-none focus:shadow-outline"
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 dark:text-white text-sm font-bold mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <input
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:text-white leading-tight focus:outline-none focus:shadow-outline"
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className="flex items-center justify-between">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Sign Up
              </button>
            </div>
            <h1 className=" mt-4 text-sm">
              Don't have any account yet?{" "}
              <Link href={"/login"} className="text-md font-semibold">
                Log In
              </Link>
            </h1>
          </form>
        </>
      )}
    </div>
  );
}

export default SignUp;
