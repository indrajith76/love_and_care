import React from "react";
import Image from "next/image";
import styles from "../../styles/CommonBanner.module.css";
import {
  FaCalendar,
  FaCheckCircle,
  FaComment,
  FaUserCircle,
} from "react-icons/fa";

const SingleBlog = ({ blog }) => {
  const { img, category, title, date, description } = blog;
  console.log(blog);
  return (
    <div className="text-black mb-12">
      <div>
        <div
          className={`${styles.newsAndHappinessBox} card rounded-none card-compact shadow-lg`}
        >
          <figure className="relative">
            <Image
              className={`${styles.cardImage} w-full duration-500 transform hover:scale-125`}
              src={img}
              width={520}
              height={200}
              alt=""
            ></Image>
            <div className="absolute flex items-center justify-center top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden opacity-0 transition duration-300 ease-in-out bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:opacity-70">
              <span className="text-9xl">+</span>
            </div>
          </figure>
          <div className="px-10 py-12">
            <div className="badge bg-[#922ecb] text-white border-none px-6 py-5 mb-5">
              {category}
            </div>
            <h2 className="text-3xl font-bold mb-5 hover:text-red-500">
              {title}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
              <div className="flex items-center gap-3">
                <div className="text-4xl text-gray-600">
                  <FaUserCircle />
                </div>
                Admin
              </div>
              <div className="flex items-center gap-3">
                <div className="text-xl text-red-400">
                  <FaCalendar />
                </div>
                {date}
              </div>
              <div className="flex items-center gap-3">
                <div className="text-xl text-red-400">
                  <FaComment />
                </div>
                0 Comments
              </div>
            </div>
            <hr />
            <p className="mt-7 mb-8 text-lg">{description}</p>
            <div className="mt-6">
              <button className="btn btn-outline hover:bg-red-500 hover:text-white flex gap-2">
                <FaCheckCircle />
                READ MORE
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleBlog;
