import React from "react";
import supportPartnerBg from "../../public/supportPartner/supportPartnerBg.png";
import brand1 from "../../public/supportPartner/brand1.png";
import brand2 from "../../public/supportPartner/brand2.png";
import brand3 from "../../public/supportPartner/brand3.png";
import brand4 from "../../public/supportPartner/brand4.png";
import giantPlusIcon from "../../public/newsAndHappinessImg/giant-plus-icon.png";
import Image from "next/image";
import { FaCheck } from "react-icons/fa";
import "swiper/css/effect-coverflow";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";

const SupportPartner = () => {
  return (
    <div className="">
      <div className="relative w-11/12 max-w-[1140px] mx-auto my-28">
        <div className="h-20 w-20 p-2 animate-pulse rounded-md">
          <Image
            className="absolute -left-40"
            src={supportPartnerBg}
            width={360}
            height={360}
            alt=""
          ></Image>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center mb-14">
          <div className="text-center md:text-left mb-5 md:mb-0">
            <h3 className="relative text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold animate-bounce">
              Become Support Partner
              <div className="absolute hidden md:block right-0 -top-10 h-24 w-24 text-blue-500 animate-spin rounded-md text-9xl">
                <Image
                  className="w-full h-full -rotate-[19deg]"
                  src={giantPlusIcon}
                  width={520}
                  height={200}
                  alt=""
                ></Image>
              </div>
            </h3>
            <h4 className="text-sm sm:text-lg md:text-xl lg:text-2xl mt-3 hover:tracking-wide duration-300">
              Provide financing support to help individuals build livelihoods
            </h4>
          </div>
          <button className="btn bg-red-600 ho text-white font-bold">
            <span className="mr-2">
              <FaCheck />
            </span>
            GET IN TOUCH
          </button>
        </div>
        <div>
          <Swiper
            // breakpoints={{
            //   0: { slidesPerView: 2, spaceBetween: 30 },
            //   768: { slidesPerView: 4, spaceBetween: 30 },
            // }}
            slidesPerView={4}
            spaceBetween={30}
            slidesPerGroup={1}
            loop={true}
            autoplay={{
              delay: 1500,
            }}
            // loopFillGroupWithBlank={true}
            // // pagination={{
            // //   clickable: true,
            // // }}
            // // navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper mb-20"
          >
            <SwiperSlide className="flex justify-center">
              <Image
                className="duration-500 transform hover:scale-110 w-full"
                src={brand1}
                width={520}
                height={200}
                alt=""
              ></Image>
            </SwiperSlide>
            <SwiperSlide className="flex justify-center">
              <Image
                className="duration-500 transform hover:scale-110 w-full"
                src={brand2}
                width={520}
                height={200}
                alt=""
              ></Image>
            </SwiperSlide>
            <SwiperSlide className="flex justify-center">
              <Image
                className="duration-500 transform hover:scale-110 w-full"
                src={brand3}
                width={520}
                height={200}
                alt=""
              ></Image>
            </SwiperSlide>
            <SwiperSlide className="flex justify-center">
              <Image
                className="duration-500 transform hover:scale-110 w-full"
                src={brand4}
                width={520}
                height={200}
                alt=""
              ></Image>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default SupportPartner;
