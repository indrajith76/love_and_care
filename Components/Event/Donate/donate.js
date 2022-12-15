import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import logo from '../../../public/EventImg/logo.png'
import hand from '../../../public/EventImg/hand.png'

const Donate = () => {
    return (
        <div style={{ background: 'url(https://i.ibb.co/XWwp2Mv/donateBg.jpg)' }} className=" my-16 py-10 px-5 text-white text-center  border-b-2 border-b-cyan-900 hover:border-b-red-700">
            <div className='flex items-center justify-center  my-5'>
                <Image className='h-24 w-24' src={logo}></Image>
            </div>
            <p>Small Donations Bigger Impact</p>
            <h2 className='text-3xl font-bold'>Education Health for Every Child</h2>
            <div className='flex items-center justify-center  mt-5 -mb-3'>
                <Image className='h-28 w-28' src={hand}></Image>
            </div>
            <div className="card-actions justify-center mb-5">
                <Link
                    href="/"
                    className="flex items-center justify-center font-bold gap-2 bg-red-600 text-white py-4 px-5 rounded-lg"
                >
                    DONATE NOW
                </Link>
            </div>
        </div>
    );
};

export default Donate;