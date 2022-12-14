import React from "react";
import GirlWithMask from "../../public/BlogImg/girl-with-mask.png";
import Logo from "../../public/BlogImg/logo.png";
import HandHeart from "../../public/BlogImg/hand-heart.png";

import styles from "../../styles/CommonBanner.module.css";
import Image from "next/image";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaSearch,
  FaTwitch,
} from "react-icons/fa";

const BlogAside = () => {
  return (
    <div>
      <div className="text-center bg-white mx-10 p-8 mt-28 hover:border-b-4 border-gray-600 duration-100">
        <div className="avatar">
          <div className="w-36 rounded-full">
            <Image src={GirlWithMask} width={150} height={150} alt=""></Image>
          </div>
        </div>
        <h3 className="text-2xl font-bold mt-5">Saima Hayden</h3>
        <p className="mt-5">
          Nostrud aliquip exrcitation laboris nisiut temp duis autey. Lorem unt
          ipsum sit amet elit dolor.
        </p>
        <div className="flex gap-4 justify-around mt-5">
          <p className="border-2 border-gray-400 rounded-md p-2">
            <FaFacebook />
          </p>
          <p className="border-2 border-gray-400 rounded-md p-2">
            <FaTwitch />
          </p>
          <p className="border-2 border-gray-400 rounded-md p-2">
            <FaLinkedin />
          </p>
          <p className="border-2 border-gray-400 rounded-md p-2">
            <FaInstagram />
          </p>
        </div>
      </div>
      <div className="bg-white mx-10 p-8 mt-10 hover:border-b-4 border-gray-600 duration-100">
        <h3 className="text-2xl font-bold mb-5">Search</h3>
        <div className="form-control">
          <label className="input-group">
            <input
              type="text"
              placeholder="Search..."
              className="input input-bordered bg-white w-full"
            />
            <span className="bg-red-600 text-white ">
              <FaSearch />
            </span>
          </label>
        </div>
      </div>
      <div className="bg-white mx-10 p-8 mt-10 hover:border-b-4 border-gray-600 duration-100">
        <h3 className="text-2xl font-bold mb-5">Tags</h3>
        <div className="flex flex-wrap gap-2">
          <span className="bg-gray-500 text-white px-3 py-1 rounded-md">
            Charity
          </span>
          <span className="bg-gray-500 text-white px-3 py-1 rounded-md">
            Coaching
          </span>
          <span className="bg-gray-500 text-white px-3 py-1 rounded-md">
            Covid-19
          </span>
          <span className="bg-gray-500 text-white px-3 py-1 rounded-md">
            EDUCATION
          </span>
          <span className="bg-gray-500 text-white px-3 py-1 rounded-md">
            Events
          </span>
        </div>
      </div>
      <div className="bg-white mx-10 p-8 mt-10 hover:border-b-4 border-gray-600 duration-100">
        <h3 className="text-2xl font-bold mb-5">Categories</h3>
        <div>
          <li className="mb-4 hover:text-red-500">Charity</li>
          <li className="mb-4 hover:text-red-500">Coaching</li>
          <li className="mb-4 hover:text-red-500">Covid-19</li>
          <li className="mb-4 hover:text-red-500">EDUCATION</li>
          <li className="mb-4 hover:text-red-500">Events</li>
        </div>
      </div>
      <div
        className={`${styles.educationHealth} text-center p-10 mx-10 my-10 text-white`}
      >
        <div className="w-20 mx-auto">
          <Image src={Logo} width={150} height={150} alt=""></Image>
        </div>
        <h5 className="font-semibold my-2">Small Donations Bigger Impact</h5>
        <h3 className="text-2xl font-bold mb-4">
          Education Health for Every Child
        </h3>
        <div className="mx-auto w-32">
          <Image src={HandHeart} width={150} height={150} alt=""></Image>
        </div>
        <button className="btn btn-error font-bold text-white">
          DONATE NOW
        </button>
      </div>
    </div>
  );
};

export default BlogAside;
