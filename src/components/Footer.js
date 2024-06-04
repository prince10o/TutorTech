import React from "react";
import { FaFacebookSquare } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";

export const Footer = () => {
  return (
    <div className="w-full mx-auto py-16 px-4 md:grid lg:grid-cols-3 gap-8  bg-[#2699fb]">
      <div>
        <h1 className="w-full text-3xl font-bold text-black px-4">
          WsCube Tech.
        </h1>
        <p className="py-4 px-4">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id odit
          ullam iste repellat consequatur libero reiciendis, blanditiis
          accusantium.
        </p>
        <div className="flex justify-between md:w-[75%] my-6 cursor-pointer px-4">
          <FaFacebookSquare size={30} />
          <BsInstagram size={30} />
          <FaXTwitter size={30} />
          <FaGithub size={30} />
        </div>
      </div>
      <div className="lg:col-span-2 flex justify-between mt-6 px-10">
        <div>
          <h6 className=" font-bold text-black cursor-pointer">Solutions</h6>
          <ul>
            <li className="py-2 text-sm cursor-pointer">Analytics</li>
            <li className="py-2 text-sm cursor-pointer">Marketing</li>
            <li className="py-2 text-sm cursor-pointer">Commerce</li>
            <li className="py-2 text-sm cursor-pointer">Insights</li>
          </ul>
        </div>
        <div>
          <h6 className=" font-bold text-black cursor-pointer">Support</h6>
          <ul>
            <li className="py-2 text-sm cursor-pointer">Pricing</li>
            <li className="py-2 text-sm cursor-pointer">Documentation</li>
            <li className="py-2 text-sm cursor-pointer">Guides</li>
            <li className="py-2 text-sm cursor-pointer">API Status</li>
          </ul>
        </div>
        <div>
          <h6 className=" font-bold text-black cursor-pointer">Company</h6>
          <ul>
            <li className="py-2 text-sm cursor-pointer">About</li>
            <li className="py-2 text-sm cursor-pointer">Blog</li>
            <li className="py-2 text-sm cursor-pointer">Jobs</li>
            <li className="py-2 text-sm cursor-pointer">Press</li>
            <li className="py-2 text-sm cursor-pointer">Careers</li>
          </ul>
        </div>
        <div>
          <h6 className=" text-black cursor-pointer font-bold">Legal</h6>
          <ul>
            <li className="py-2 text-sm cursor-pointer">Claim</li>
            <li className="py-2 text-sm cursor-pointer">Policy</li>
            <li className="py-2 text-sm cursor-pointer">Terms</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
