"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { toast } from "react-hot-toast";

export default function SignupPage() {
  const router = useRouter();
  const [user, setUser] = React.useState({
    email: "",
    password: "",
    username: "",
  });
  const [buttonDisabled, setButtonDisabled] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  useEffect(() => {
    if (
      user.email.length > 0 &&
      user.password.length > 0 &&
      user.username.length > 0
    ) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [user]);

  return (
    <div className="bg-[#f0f4f5]">
      <div className="flex flex-col items-center justify-center min-h-screen py-2 mx-auto  w-[300px] text-[#291d89]">
        <h1>{loading ? "Processing" : "Signup"}</h1>
        <hr />
        <label htmlFor="username" className="mr-auto text-[#291d89]">
          username
        </label>
        <input
          className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black w-full"
          id="username"
          type="text"
          value={user.username}
          onChange={(e) => setUser({ ...user, username: e.target.value })}
          placeholder="username"
        />
        <label htmlFor="email" className="mr-auto text-[#291d89]">
          email
        </label>
        <input
          className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black w-full"
          id="email"
          type="text"
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
          placeholder="email"
        />
        <label htmlFor="password" className="mr-auto text-[#291d89]">
          password
        </label>
        <input
          className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black w-full"
          id="password"
          type="password"
          value={user.password}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
          placeholder="password"
        />
        <button
          onClick={() => router.push("/")}
          className={`${
            buttonDisabled ? "opacity-50" : ""
          } btn-primary !px-[150px]`}
        >
          {"Signup"}
        </button>
        {/* <Link href="/login" className="text-[#291d89] mt-[8px]">
          Visit login page
        </Link> */}
      </div>
    </div>
  );
}
