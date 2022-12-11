import { Lobster } from '@next/font/google'

const lobster = Lobster({
    weight: ['400'],
    subsets: ['latin'],
})

const Contribute = () => {
    return (
        <div data-aos="fade-up" className="px-4 py-16  bg-slate-200 w-full mx-auto  md:px-24 lg:px-8 lg:py-24 ">
            <div className="grid gap-12 row-gap-8 lg:grid-cols-2 container mx-auto">
                <div className="relative p-5">
                    <img
                        className="rounded-full ml-10"
                        src="https://loveicon.smartdemowp.com/wp-content/uploads/2021/06/causes-style1_image-1.jpg"
                        alt=""
                    />
                    <img
                        className="rounded-full absolute top-0 border-8 hover:animate-spin"
                        src="https://loveicon.smartdemowp.com/wp-content/uploads/2021/06/causes-style1_image-2.jpg"
                        alt=""
                    />
                    <img
                        className="rounded-full absolute top-10 right-5"
                        src="https://loveicon.smartdemowp.com/wp-content/uploads/2021/06/causes-style1_image-3.jpg"
                        alt=""
                    />
                    <img
                        className="rounded-full absolute bottom-10 right-5  hover:scale-110 transition duration-1000 ease-in-out"
                        src="https://loveicon.smartdemowp.com/wp-content/uploads/2021/06/causes-style1_image-4.jpg"
                        alt=""
                    />
                    <img
                        data-aos="fade-right"
                        className="rounded-full absolute left-10 bottom-10"
                        src="https://loveicon.smartdemowp.com/wp-content/uploads/2021/06/thm-shape-7.png"
                        alt=""
                    />
                </div>
                <div className="flex flex-col justify-center ml-5">
                    <div className="max-w-xl mb-6">
                        <h1 className={`${lobster.className} text-lg md:text-2xl text-red-500 font-bold`}>Help With Featured Cause</h1>
                        <h2 className="text-2xl md:text-5xl mt-5  text-gray-800 font-black">
                            Contribute for the <br />
                            differently abled
                        </h2>
                        <p className="text-base mt-5 text-gray-400 md:text-lg">
                            The great journey to end poverty for good begins with a child. Due to natural disasters and man made disasters so many people are suffering so help to recover them....
                        </p>
                    </div>
                    <div className="w-full grid gap-8 row-gap-8 sm:grid-cols-2">
                        <div className="mt-6">
                            <div className="border-l border-orange-500">
                                <progress className="progress progress-success w-80" value="0" max="100"></progress>
                            </div>
                            <span className="text-gray-700 mt-3 text-lg font-semibold">Target: $5,000.00</span>
                        </div>
                        <div className="flex justify-center items-center">
                            <h1 className="text-6xl font-bold text-green-400">0%</h1>
                            <h1 className="text-gray-600 font-semibold ml-5">Pledged So Far</h1>
                        </div>
                    </div>
                    <div className="mt-12">
                        <button className="btn bg-red-600 text-white border-none  text-md font-bold">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8 ">
                                <path className="" strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span className="ml-3">Donate Now</span>
                        </button>
                        <button className="btn ml-5 bg-gray-500 hover:bg-none text-white border-none  text-md font-bold">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-8 h-8 ">
                                <path stroke-linecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                <path stroke-linecap="round" strokeLinejoin="round" d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z" />
                            </svg>
                            <span className="ml-3">Cause Video</span>
                        </button>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contribute;