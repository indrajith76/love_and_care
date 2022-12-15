import Image from 'next/image';
import React from 'react';
import img1 from '../../../public/EventImg/img1.jpg'
import img2 from '../../../public/EventImg/img2.jpg'
import img3 from '../../../public/EventImg/img3.webp'
import { FaLink } from "react-icons/fa";

const Upcoming = () => {
    return (
        <div className='p-5 bg-white  border-b-2 border-b-cyan-900 hover:border-b-red-700'>
            <div className="flex items-center justify-around my-5">
                <div className="w-20 h-20 relative" >
                    <Image className="w-20 h-20" src={img2}></Image>
                    <div className="absolute flex items-center justify-center top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden opacity-0 transition duration-300 ease-in-out bg-black hover:opacity-100">
                        <span className="text-xl text-white"><FaLink></FaLink></span>
                    </div>
                </div>
                <div className='w-1/2'>
                    <h3 className=" font-bold">Fully Inspiration Charity</h3>
                    <p className='text-red-600'>Aug 1, 2023</p>
                </div>
            </div>
            <hr />
            <div className="flex items-center justify-around my-5">
                <div className="w-20 h-20 relative" >
                    <Image className="w-20 h-20" src={img1}></Image>
                    <div className="absolute flex items-center justify-center top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden opacity-0 transition duration-300 ease-in-out bg-black hover:opacity-100">
                        <span className="text-xl text-white"><FaLink></FaLink></span>
                    </div>
                </div>
                <div className='w-1/2'>
                    <h3 className="font-bold">Help with Global Charity</h3>
                    <p className='text-red-600'>Aug 1, 2023</p>
                </div>
            </div>
            <hr />
            <div className="flex items-center justify-around my-5">
                <div className="w-20 h-20 relative" >
                    <Image className="w-20 h-20" src={img3}></Image>
                    <div className="absolute flex items-center justify-center top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden opacity-0 transition duration-300 ease-in-out bg-black hover:opacity-100">
                        <span className="text-xl text-white"><FaLink></FaLink></span>
                    </div>
                </div>
                <div className='w-1/2'>
                    <h3 className="font-bold">Help with Global Charity</h3>
                    <p className='text-red-600'>Aug 1, 2023</p>
                </div>
            </div>
        </div>
    );
};

export default Upcoming;