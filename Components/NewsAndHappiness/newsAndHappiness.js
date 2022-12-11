import React from "react";
import giantPlusIcon from "../../public/newsAndHappinessImg/giant-plus-icon.png";
import newsAndHappinessImg1 from "../../public/newsAndHappinessImg/newsAndHappinessImg1.jpg";
import newsAndHappinessImg2 from "../../public/newsAndHappinessImg/newsAndHappinessImg2.jpg";
import newsAndHappinessImg3 from "../../public/newsAndHappinessImg/newsAndHappinessImg3.jpg";
import { FaUser, FaComment } from "react-icons/fa";
import Image from "next/image";

const NewsAndHappiness = () => {
  return (
    <div className="w-11/12 max-w-[1140px] mx-auto text-black">
      <div className="relative text-center mt-28 mb-14">
        <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl hover:tracking-widest duration-300 italic">
          We Change Your Life & World
        </h2>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-3 hover:tracking-widest duration-300">
          News & Happenings
        </h1>
        <div className="absolute right-0 top-0 h-24 w-24 text-blue-500 animate-bounce rounded-md text-9xl">
          <Image
            className="w-full h-full -rotate-[19deg]"
            src={giantPlusIcon}
            width={520}
            height={200}
            alt=""
          ></Image>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
        <div className="newsAndHappinessBox card rounded-none card-compact  shadow-xl">
          <figure className="relative">
            <Image
              className="cardImage w-full lg:max-h-[202px] duration-500 transform hover:scale-125"
              src={newsAndHappinessImg1}
              width={520}
              height={200}
              alt=""
            ></Image>
            <div className="absolute text-white z-10 left-0 bottom-0 text-center bg-blue-500 px-6 py-3">
              <span className="text-4xl font-bold">18</span> <br />
              JUNE
            </div>
            <div className="absolute flex items-center justify-center top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden opacity-0 transition duration-300 ease-in-out bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:opacity-70">
              <span className="text-9xl">+</span>
            </div>
          </figure>
          <div className="px-10 py-12">
            <h2 className="text-2xl font-bold">
              Directly support individuals Charity
            </h2>
            <p className="mt-3 mb-8 text-lg">
              Nostrud tem exrcitation duis laboris nisi ut aliquip sed duis aute
              cupidata con proident sunt culpa.
            </p>
            <hr />
            <div className="flex justify-between mt-6">
              <h4 className="flex items-center">
                <span className="mr-2 text-red-600">
                  <FaUser />
                </span>
                Admin
              </h4>
              <h4 className="flex items-center">
                <span className="mr-2 text-red-600">
                  <FaComment />
                </span>
                0 Comments
              </h4>
            </div>
          </div>
        </div>
        <div className="newsAndHappinessBox card rounded-none card-compact  shadow-xl">
          <figure className="relative">
            <Image
              className="cardImage w-full lg:max-h-[202px] duration-500 transform hover:scale-125"
              src={newsAndHappinessImg2}
              width={520}
              height={200}
              alt=""
            ></Image>
            <div className="absolute text-white z-10 left-0 bottom-0 text-center bg-blue-500 px-6 py-3">
              <span className="text-4xl font-bold">18</span> <br />
              JUNE
            </div>
            <div className="absolute flex items-center justify-center top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden opacity-0 transition duration-300 ease-in-out bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:opacity-70">
              <span className="text-9xl">+</span>
            </div>
          </figure>
          <div className="px-10 py-12">
            <h2 className="text-2xl font-bold">
              Start a fundraiser for yourself in World
            </h2>
            <p className="mt-3 mb-8 text-lg">
              Nostrud tem exrcitation duis laboris nisi ut aliquip sed duis aute
              cupidata con proident sunt culpa.
            </p>
            <hr />
            <div className="flex justify-between mt-6">
              <h4 className="flex items-center">
                <span className="mr-2 text-red-600">
                  <FaUser />
                </span>
                Admin
              </h4>
              <h4 className="flex items-center">
                <span className="mr-2 text-red-600">
                  <FaComment />
                </span>
                0 Comments
              </h4>
            </div>
          </div>
        </div>
        <div className="newsAndHappinessBox card rounded-none card-compact  shadow-xl">
          <figure className="relative">
            <Image
              className="cardImage w-full lg:max-h-[202px] duration-500 transform hover:scale-125"
              src={newsAndHappinessImg3}
              width={520}
              height={200}
              alt=""
            ></Image>
            <div className="absolute text-white z-10 left-0 bottom-0 text-center bg-blue-500 px-6 py-3">
              <span className="text-4xl font-bold">18</span> <br />
              JUNE
            </div>
            <div className="absolute flex items-center justify-center top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden opacity-0 transition duration-300 ease-in-out bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:opacity-70">
              <span className="text-9xl">+</span>
            </div>
          </figure>
          <div className="px-10 py-12">
            <h2 className="text-2xl font-bold">
              Directly support individuals Charity
            </h2>
            <p className="mt-3 mb-8 text-lg">
              Nostrud tem exrcitation duis laboris nisi ut aliquip sed duis aute
              cupidata con proident sunt culpa.
            </p>
            <hr />
            <div className="flex justify-between mt-6">
              <h4 className="flex items-center">
                <span className="mr-2 text-red-600">
                  <FaUser />
                </span>
                Admin
              </h4>
              <h4 className="flex items-center">
                <span className="mr-2 text-red-600">
                  <FaComment />
                </span>
                0 Comments
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsAndHappiness;
