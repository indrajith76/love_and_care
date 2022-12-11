import { ImQuotesLeft } from "react-icons/im";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCreative } from "swiper";
import "swiper/css";
import SwiperCore, { Autoplay } from "swiper";
import styles from '../../styles/Review.module.css';

const Reviews = () => {
    SwiperCore.use(Autoplay)
    return (
        <div className="lg:px-12 my-12 max-w-[1140px]">
            <Swiper
                grabCursor={true}
                effect={"creative"}
                creativeEffect={{
                    prev: {
                        shadow: true,
                        translate: [0, 0, -400],
                    },
                    next: {
                        translate: ["100%", 0, 0],
                    },
                }}
                modules={[EffectCreative]}
                loop={true}
                autoplay={{
                    delay: 2000
                }}
            >
                <SwiperSlide>
                    <div className={styles.reviewContainer}>
                        <div className="lg:flex  items-center gap-10 w-full lg:px-12">
                            <div>
                                <figure className="rounded-full h-52 w-52"><img className="rounded-full h-52 w-52" src="ReviewImg/ch1.jpg" alt="Child" /></figure>
                            </div>
                            <div >
                                <p className="text-5xl "><ImQuotesLeft className="text-red-600"></ImQuotesLeft></p>
                                <h2 className="text-3xl font-semibold my-5 text-blue-400">Power to create opportunities</h2>
                                <p> Love&Care has provided their Non Profit service approximately 25 years and I see that they provide their service with more trust and honesty to change for a better future and make people happy.  </p>
                                <h3 className="text-xl font-bold mt-5">David V. Hickson</h3>
                                <p className="text-sm">NewYork, USA</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={styles.reviewContainer}>
                        <div className="lg:flex  items-center  gap-20 w-full lg:px-12">
                            <div>
                                <figure className="rounded-full h-52 w-52"><img className="rounded-full h-52 w-52" src="ReviewImg/ch2.jpg" alt="Child" /></figure>
                            </div>
                            <div >
                                <p className="text-5xl "><ImQuotesLeft className="text-red-600"></ImQuotesLeft></p>
                                <h2 className="text-3xl font-semibold my-5 text-blue-400">Power to create opportunities</h2>
                                <p> They are giving their service 24/7 to help the people who are needy. Once I informed them that A man was in trouble. They helped that man within 1 hr and solved that problem and I was impressed. </p>
                                <h3 className="text-xl font-bold mt-5">David V. Hickson</h3>
                                <p className="text-sm">NewYork, USA</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={styles.reviewContainer}>
                        <div className="lg:flex  items-center gap-10 w-full  lg:px-12">
                            <div>
                                <figure className="rounded-full h-52 w-52"><img className="rounded-full h-52 w-52" src="ReviewImg/ch3.jpg" alt="Child" /></figure>
                            </div>
                            <div >
                                <p className="text-5xl "><ImQuotesLeft className="text-red-600"></ImQuotesLeft></p>
                                <h2 className="text-3xl font-semibold my-5 text-blue-400">Power to create opportunities</h2>
                                <p>Compared to the other organizations in the world I have seen that the service Love&Care provides is safe and their service much better than the other care organizations in the world. </p>
                                <h3 className="text-xl font-bold mt-5">David V. Hickson</h3>
                                <p className="text-sm">NewYork, USA</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>


            </Swiper>
        </div>
    );
};

export default Reviews;