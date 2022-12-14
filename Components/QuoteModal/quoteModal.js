import Image from 'next/image';
import React from 'react';
import { BsCheckCircleFill } from "react-icons/bs";
const QuoteModal = () => {
    return (
        <div>
            <input type="checkbox" id="my-modal-3" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <div className='mb-5'>
                        <Image
                            src="/logo/header-logo.png"
                            alt="Picture of the author"
                            width={150}
                            height={150}
                        ></Image>
                    </div>
                    <h2 className='text-2xl font-bold my-5'>ABOUT US</h2>
                    <p className='mb-5'>consectetur adipisicing elit, sed do eiusmod tempor incididunt laboret dolore magna aliqua. Ut enim minim veniam quis nostrud exercitation ullamco laboris.</p>
                    <h2 className='text-2xl font-bold'>
                        GET A FREE QUOTE
                    </h2>

                    <form className='flex flex-col gap-5 my-5'>
                        <input type="text" placeholder="Your Name" className="input input-bordered w-full text-white" />
                        <input type="text" placeholder="Email" className="input input-bordered w-full " />
                        <input type="text" placeholder="Phone" className="input input-bordered w-full " />
                        <input type="text" placeholder="Subject" className="input input-bordered w-full " />
                        <textarea className="textarea textarea-bordered w-full h-40" placeholder="Message"></textarea>
                    </form>
                    <div>
                        <button
                            href="/donate"
                            className="flex items-center justify-center gap-2 bg-red-600 text-white py-4 px-5 rounded-lg"
                        >
                            <BsCheckCircleFill /> SEND MESSAGE
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default QuoteModal;