import Image from "next/image";
import event1 from '../../../public/EventImg/ev2.jpg'
import event2 from '../../../public/EventImg/red.png'
import event3 from '../../../public/EventImg/date.png'
import event4 from '../../../public/EventImg/yellow.png'
import event5 from '../../../public/EventImg/location.png'
import Link from "next/link";
import { BsCheckCircleFill } from "react-icons/bs"
import styles from "../../../styles/CommonBanner.module.css";



const Programme = () => {

    const bg = {
        backgroundImage: "url(/../../../../public/EventImg/red.png)"
    }


    return (
        <div className="text-slate-800">
            <div className={`card rounded-none text-slate-800 shadow-md ${styles.newsAndHappinessBox}`}>
                <div className="relative">
                    <figure><Image className={`image-full ${styles.cardImage}`} src={event1}></Image></figure>
                    <div className="absolute flex items-center justify-center top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden opacity-0 transition duration-300 ease-in-out bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:opacity-70">
                        <span className="text-9xl">+</span>
                    </div>
                    <button className=" px-4 py-1 text-white font-semi-bold absolute left-10 bottom-10 rounded-2xl bg-purple-600">HEALTH</button>
                </div>
                <div className="card-body my-10">
                    <h2 className="text-2xl lg:text-4xl font-bold">The Human rights and democracy programme</h2>
                    <div className="flex flex-col lg:flex-row justify-start gap-10 items-center my-10">
                        <div className="flex items-center justify-around bg-[#f9f9f9] p-5">
                            <div className="p-5 relative" >
                                <Image className="-mr-2 " src={event2}></Image>
                                <Image className="absolute top-7 left-10 w-10" src={event3}></Image>
                            </div>
                            <div>
                                <h5 className="text-2xl font-semi-bold">Event Date</h5>
                                <p>April 29</p>
                                <p>08:00am</p>
                            </div>
                        </div>
                        <div className="flex items-center justify-around bg-[#f9f9f9] p-5">
                            <div className="p-5 relative" >
                                <Image className="-mr-2" src={event4}></Image>
                                <Image className="absolute top-7 left-10 w-10" src={event5}></Image>
                            </div>
                            <div>
                                <h3 className="text-2xl font-semi-bold">Event Location</h3>
                                <p>83 Andy Street</p>
                                <p>Madison - 78002</p>
                            </div>
                        </div>
                    </div>
                    <div className="card-actions justify-start">
                        <Link
                            href="/"
                            className="flex items-center justify-center font-bold gap-2 bg-red-600 text-white py-4 px-5 rounded-lg"
                        >
                            <BsCheckCircleFill /> JOIN THIS EVENT
                        </Link>
                    </div>
                </div>
            </div>
            <div className="my-12">
                <p className="my-5 py-1 text-lg">
                    The FCO's Human Rights and Democracy Programme (HRDP) is an annual fund committed to promoting human rights and democracy efforts around the world. It aims to strengthen governments' and civil society's capacity to promote and protect human rights through focused programs.
                </p>
                <p className=" text-lg">
                    Because the HRDP is a strategic initiative, we carefully consider each bid for its impact and alignment with both the HRDP's overarching plan and our country's human rights agenda.
                </p>
            </div>
        </div >
    );
};

export default Programme;