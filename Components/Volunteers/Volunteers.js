import { Lobster } from '@next/font/google'

const lobster = Lobster({
    weight: ['400'],
    subsets: ['latin'],
})

const Volunteers = () => {

    const styling = {
        backgroundImage: `url('https://loveicon.smartdemowp.com/wp-content/uploads/2021/06/loveicon.png')`,
        width: "30%",
        height: "50px",
        margin: "0 auto"

    }
    return (
        <div  className="bg-white px-4 py-16 mx-auto w-full md:px-24 lg:px-8 lg:py-20">
            <div className="relative  mb-8 mx-auto text-center md:mb-20 w-full">
                <div style={styling}></div>
                <p className={`${lobster.className} absolute top-5 left-0.5 italic right-0.5  text-red-500 text-md md:text-2xl font-semibold tracking-wide uppercase `}>
                    We Change Your Life & World
                </p>
                <p className=" mt-4 md-mt-6 text-gray-900 font-black text-2xl md:text-5xl">
                    Meet Our Volunteers
                </p>
            </div>
            <div data-aos="fade-up" className="grid gap-6 row-gap-5 mb-8 lg:grid-cols-4 sm:row-gap-6 sm:grid-cols-2">
                <a className="relative" href="/" aria-label="View Item">
                    <div className="relative w-72 h-72 overflow-hidden transition duration-200 transform rounded-full shadow-lg  hover:shadow-2xl">
                        <img
                            className="object-cover hover:scale-110 transition duration-300 ease-in-out"
                            src="https://media.discordapp.net/attachments/1050645620626563089/1051479691401379880/FaizulOsmanWithoutBackground.png?width=327&height=406"
                            alt=""
                        />
                        <div className="absolute inset-0  flex justify-center items-center m-6 rounded-full  transition-opacity duration-200 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                            <div>
                                <button class="bg-slate-300 text-black hover:text-white hover:bg-orange-400 px-4 py-2 font-semibold inline-flex items-center space-x-2 rounded">
                                    <svg class="w-5 h-5 fill-current " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
                                </button>
                                <button class="bg-slate-300 text-black hover:text-white hover:bg-orange-400 ml-2 px-4 py-2 font-semibold inline-flex items-center space-x-2 rounded">
                                    <svg class="w-5 h-5 fill-current" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" /></svg>
                                    
                                </button>
                                <button class="bg-slate-300 text-black hover:text-white hover:bg-orange-400 ml-2 px-4 py-2 font-semibold inline-flex items-center space-x-2 rounded">
                                    <svg class="w-5 h-5 fill-current" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z" /></svg>
                                    
                                </button>
                            </div>
                        </div>
                    </div>
                    <img className="absolute border-8 bottom-28 left-[105px] bg-white rounded-full p-5 " src="https://loveicon.smartdemowp.com/wp-content/uploads/2021/06/thm-shape-4.png" alt="" />
                    <div className="mt-20 text-center">
                        <h1 className="text-gray-800 text-2xl font-bold">Faizul Osman</h1>
                        <h1 className="text-gray-600 text-xl">Volunteer</h1>
                    </div>
                </a>
                <a className="relative" href="/" aria-label="View Item">
                    <div className="relative w-72 h-72 overflow-hidden transition duration-200 transform rounded-full shadow-lg  hover:shadow-2xl">
                        <img
                            className="object-cover h-full  hover:scale-110 transition duration-300 ease-in-out"
                            src="https://i.ibb.co/7Xp3Lnr/ALm5wu0-L0-U16la-Hy1-UWh-UJcj-BTJHz-C1-QA1vmse-T5mmk7-BQ-s96-c.jpg"
                            alt=""
                        />
                        <div className="absolute inset-0  flex justify-center items-center m-6 rounded-full  transition-opacity duration-200 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                            <div>
                                <button class="bg-slate-300 text-black hover:text-white hover:bg-orange-400 px-4 py-2 font-semibold inline-flex items-center space-x-2 rounded">
                                    <svg class="w-5 h-5 fill-current " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
                                </button>
                                <button class="bg-slate-300 text-black hover:text-white hover:bg-orange-400 ml-2 px-4 py-2 font-semibold inline-flex items-center space-x-2 rounded">
                                    <svg class="w-5 h-5 fill-current" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" /></svg>
                                    
                                </button>
                                <button class="bg-slate-300 text-black hover:text-white hover:bg-orange-400 ml-2 px-4 py-2 font-semibold inline-flex items-center space-x-2 rounded">
                                    <svg class="w-5 h-5 fill-current" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z" /></svg>
                                    
                                </button>
                            </div>
                        </div>
                    </div>
                    <img className="absolute border-8 bottom-28 left-[105px] bg-white rounded-full p-5 " src="https://loveicon.smartdemowp.com/wp-content/uploads/2021/06/thm-shape-4.png" alt="" />
                    <div className="mt-20 text-center">
                        <h1 className="text-gray-800 text-2xl font-bold">Indrajith Ghoswami</h1>
                        <h1 className="text-gray-600 text-xl">Volunteer</h1>
                    </div>
                </a>
                <a className="relative" href="/" aria-label="View Item">
                    <div className="relative w-72 h-72 overflow-hidden transition duration-200 transform rounded-full shadow-lg  hover:shadow-2xl">
                        <img
                            className="object-cover   hover:scale-110 transition duration-300 ease-in-out"
                            src="https://media.discordapp.net/attachments/1050645620626563089/1051470728836415488/sauravMondal.jpg?width=343&height=406"
                            alt=""
                        />
                        <div className="absolute inset-0  flex justify-center items-center m-6 rounded-full  transition-opacity duration-200 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                            <div>
                                <button class="bg-slate-300 text-black hover:text-white hover:bg-orange-400 px-4 py-2 font-semibold inline-flex items-center space-x-2 rounded">
                                    <svg class="w-5 h-5 fill-current " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
                                </button>
                                <button class="bg-slate-300 text-black hover:text-white hover:bg-orange-400 ml-2 px-4 py-2 font-semibold inline-flex items-center space-x-2 rounded">
                                    <svg class="w-5 h-5 fill-current" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" /></svg>
                                    
                                </button>
                                <button class="bg-slate-300 text-black hover:text-white hover:bg-orange-400 ml-2 px-4 py-2 font-semibold inline-flex items-center space-x-2 rounded">
                                    <svg class="w-5 h-5 fill-current" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z" /></svg>
                                    
                                </button>
                            </div>
                        </div>
                    </div>
                    <img className="absolute border-8 bottom-28 left-[105px] bg-white rounded-full p-5 " src="https://loveicon.smartdemowp.com/wp-content/uploads/2021/06/thm-shape-4.png" alt="" />
                    <div className="mt-20 text-center">
                        <h1 className="text-gray-800 text-2xl font-bold">Saurav Mondol</h1>
                        <h1 className="text-gray-600 text-xl">Volunteer</h1>
                    </div>
                </a>
                <a className="relative" href="/" aria-label="View Item">
                    <div className="relative w-72 h-72 overflow-hidden transition duration-200 transform rounded-full shadow-lg  hover:shadow-2xl">
                        <img
                            className="object-cover  hover:scale-110 transition duration-300 ease-in-out"
                            src="https://i.ibb.co/PrVVm0X/Samrat.png"
                            alt=""
                        />
                        <div className="absolute inset-0  flex justify-center items-center m-6 rounded-full  transition-opacity duration-200 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                            <div>
                                <button class="bg-slate-300 text-black hover:text-white hover:bg-orange-400 px-4 py-2 font-semibold inline-flex items-center space-x-2 rounded">
                                    <svg class="w-5 h-5 fill-current " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
                                </button>
                                <button class="bg-slate-300 text-black hover:text-white hover:bg-orange-400 ml-2 px-4 py-2 font-semibold inline-flex items-center space-x-2 rounded">
                                    <svg class="w-5 h-5 fill-current" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" /></svg>
                                    
                                </button>
                                <button class="bg-slate-300 text-black hover:text-white hover:bg-orange-400 ml-2 px-4 py-2 font-semibold inline-flex items-center space-x-2 rounded">
                                    <svg class="w-5 h-5 fill-current" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z" /></svg>
                                    
                                </button>
                            </div>
                        </div>
                    </div>
                    <img className="absolute border-8 bottom-28 left-[105px] bg-white rounded-full p-5 " src="https://loveicon.smartdemowp.com/wp-content/uploads/2021/06/thm-shape-4.png" alt="" />
                    <div className="mt-20 text-center">
                        <h1 className="text-gray-800 text-2xl font-bold">Samrat Joydhar</h1>
                        <h1 className="text-gray-600 text-xl">Volunteer</h1>
                    </div>
                </a>
            </div>
        </div>
    );
};

export default Volunteers;