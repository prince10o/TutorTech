import React from "react";

export const NewsLetter = () => {
  return (
    <div className="w-full bg bg-[#2699fb] p-4">
      <div className="max-w-[1240px] mx-auto md:flex justify-between py-[50px]">
        <div className="m-2">
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold text-white">
            Want to learn latest I.T skills?
          </h1>
          <span className="text-white">
            Sign up to our newsletter and stay up to date.
          </span>
        </div>
        <div className="">
          <input
            type="text"
            className=" rounded p-3 mr-2 text-slate-600 mb-2"
            placeholder="Email"
          />
          <button className="bg-[black] text-white rounded p-3">
            Notify Me
          </button>
          <br />
          <p className="text-white">
            We care bout the protection of your data. Read our <br />{" "}
            <a href="/" className="text-black">
              {" "}
              Privacy Policy{" "}
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};
