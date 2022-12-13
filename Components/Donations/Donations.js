import React from 'react';
import { BsCheckCircleFill } from 'react-icons/bs';

const Donations = () => {
    return (
        <div className="flex flex-col-reverse md:flex-row-reverse shadow-2xl">
            <div className=" rounded-l-md bg-white w-full lg:w-[400px]">
                <div className="p-8">
                    <button className="btn btn-sm  btn-primary rounded-2xl">HUMANITARIAN</button>
                    <h1 className='mt-5 text-2xl font-bold text-gray-900'>Contribute for the Global Challenges</h1>
                    <p className='mt-5 text-lg text-gray-700'>In today's world many people die without eating and it's a...</p>
                    <div className="border-l border-orange-500 mt-5">
                        <progress className="progress progress-success " value="0" max="100"></progress>
                    </div>
                    <div className='mt-8 flex justify-between items-center'>
                        <div className='text-black'>
                            <h1 className="text-gray-600 font-medium">Achieved : $0.00</h1>
                            <h1 className="text-gray-600 font-medium">Target : $5,000.00</h1>
                        </div>
                        <div className="-mt-3">
                            <h1 className="text-3xl font-bold text-green-400">0%</h1>
                            <h1 className="text-gray-600 font-medium">Pledged So Far</h1>
                        </div>
                    </div>
                    <button className="w-full flex items-center mt-16  justify-center text-md uppercase font-bold gap-8 bg-slate-200 hover:bg-red-600 hover:text-white text-gray-700 py-4 px-5 rounded-lg">
                        <BsCheckCircleFill className='text-red-500 ' /> Donate Now
                    </button>
                </div>
            </div>
            <div className="flex  content-center justify-center rounded-r-md  w-full lg:w-[320px]  ">
                <img className="w-full bg-center bg-no-repeat bg-cover rounded-r-md" src="https://images.unsplash.com/photo-1618477460930-d8bffff64172?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8dm9sdW50ZWVyfGVufDB8MXwwfHw%3D&auto=format&fit=crop&w=500&q=60" />
            </div>
        </div>
    );
};

export default Donations;