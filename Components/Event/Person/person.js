import Image from "next/image";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";
import person from '../../../public/EventImg/person.jpg'

const Person = () => {
    return (
        <div className="text-slate-800 bg-white p-10 border-b-2 border-b-cyan-900 hover:border-b-red-700">
            <div className="card">
                <figure>
                    <Image className="w-36 h-36 rounded-full" src={person}></Image>
                </figure>
                <div className=" items-center text-center">
                    <h2 className="text-2xl font-bold text-center mt-10 mb-5">Saima Hayden</h2>
                    <p>Nostrud aliquip exrcitation laboris
                        nisiut temp duis autey. Lorem unt
                        ipsum sit amet elit dolor.</p>
                    <div className="flex gap-3 items-center justify-center mt-10">
                        <p className="p-2 border rounded-lg hover:bg-yellow-500"><FaFacebook></FaFacebook></p>
                        <p className="p-2 border rounded-lg hover:bg-yellow-500"><FaTwitter></FaTwitter></p>
                        <p className="p-2 border rounded-lg hover:bg-yellow-500"><FaLinkedin></FaLinkedin></p>
                        <p className="p-2 border rounded-lg hover:bg-yellow-500"><FaInstagram></FaInstagram></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Person;