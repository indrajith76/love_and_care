import React from "react";
import styles from "../../styles/CommonBanner.module.css";
import AnimationCircle from "../../public/BlogImg/animation-circle.png";
import Heart from "../../public/BlogImg/heart.png";
import Image from "next/image";

const CommonBanner = ({ title }) => {
  return (
    <div className={`${styles.commonBanner} text-black`}>
      <div className="commonBanner">
        <div className="relative w-11/12 max-w-[1140px] mx-auto">
          <h1 className="text-3xl sm:text-5xl pt-24 font-bold text-center">
            {title}
          </h1>
          <div className="absolute top-20 right-0 w-8 animate-spin rounded-md">
            <div className="animate-pulse">
              <Image
                src={AnimationCircle}
                width={56}
                height={56}
                alt=""
              ></Image>
            </div>
          </div>
          <div className="absolute left-0 top-52 h-24 w-14 md:w-24 text-blue-500 animate-bounce rounded-md text-9xl">
            <Image
              className="w-full h-full -rotate-[19deg]"
              src={Heart}
              width={520}
              height={200}
              alt=""
            ></Image>
          </div>
          <div className="flex justify-center">
            <span className={`${styles.borderRed} mx-0`}></span>
            <span className={`${styles.borderWhite} mx-0`}></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommonBanner;
