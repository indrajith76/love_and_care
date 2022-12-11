import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade } from 'swiper';
import 'swiper/css';
import 'swiper/css/effect-fade';
import SwiperCore, { Autoplay } from "swiper";
import styles from '../../styles/Banner.module.css'


const Banner = () => {
    SwiperCore.use(Autoplay)
    return (
        <div >
            <Swiper
                slidesPerView={1}
                modules={[EffectFade]} effect="fade"
                loop={true}
                autoplay={{
                    delay: 2000
                }}
            >
                <SwiperSlide>
                    <div className={`${styles.slide1} max-h-[800px]`}>
                        <div className='lg:w-2/3 container mx-auto'>
                            <p className='lg:text-xl'>Change the life, Change the world</p>
                            <h2 className='text-3xl lg:text-8xl  font-bold'>Every Good <br /> Act Is A Charity</h2>
                            <hr className='border border-red-600 my-7' />
                            <p className='lg:text-2xl mb-5'>We've been tackling poverty in communities to build better lives</p>
                            <button className='btn text-white btn-warning mr-5 '>How We Help</button>
                            <button className='btn  text-white btn-error'>Support Us</button>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={`${styles.slide2} max-h-[800px]`}>
                        <div className='lg:w-2/3 container mx-auto'>
                            <p className='lg:text-xl'>Change the life, Change the world</p>
                            <h2 className='text-3xl lg:text-8xl  font-bold'>Every Good <br /> Act Is A Charity</h2>
                            <hr className='border border-red-600 my-7' />
                            <p className='lg:text-2xl mb-5'>We've been tackling poverty in communities to build better lives</p>
                            <button className='btn  text-white btn-warning mr-5 '>How We Help</button>
                            <button className='btn  text-white btn-error'>Support Us</button>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={`${styles.slide3} max-h-[800px]`}>
                        <div className='lg:w-2/3 container mx-auto'>
                            <p className='lg:text-xl'>Change the life, Change the world</p>
                            <h2 className='text-3xl lg:text-8xl font-bold'>Every Good <br /> Act Is A Charity</h2>
                            <hr className='border border-red-600 my-7' />
                            <p className='lg:text-2xl mb-5'>We've been tackling poverty in communities to build better lives</p>
                            <button className='btn  text-white btn-warning mr-5 '>How We Help</button>
                            <button className='btn  text-white btn-error'>Support Us</button>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Banner;