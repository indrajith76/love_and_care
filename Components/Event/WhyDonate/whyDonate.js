import Image from "next/image";
import whyBG from '../../../public/EventImg/whyBG.png'
import change1 from '../../../public/EventImg/change.png'
import change2 from '../../../public/EventImg/change1.png'
import strength1 from '../../../public/EventImg/strength.png'
import strength2 from '../../../public/EventImg/strength1.png'
import donate1 from '../../../public/EventImg/donate.png'
import donate2 from '../../../public/EventImg/donate1.png'
import inspiration1 from '../../../public/EventImg/inspiration.png'
import inspiration2 from '../../../public/EventImg/inspiration1.png'


const WhyDonate = () => {
    return (
        <div className="text-slate-800">
            <div className="relative">
                <h2 className="text-2xl lg:text-3xl font-bold">Why Donate with LoveIcon</h2>
                <Image className="absolute -top-2 -left-4 w-12 opacity-10" src={whyBG}></Image>
            </div>
            <p className="mb-5 py-1 text-lg">
                The COVID-19 epidemic is a once-in-a-generation event that will take the best of humanity to conquer. Your contribution to this fund will help with both short- and long-term relief.
            </p>

            <div className="lg:grid grid-cols-2">
                <div className="flex gap-12  my-5">
                    <div className="p-5 relative w-24" >
                        <Image className="absolute" src={change1}></Image>
                        <Image className="absolute z-10  top-3 left-7" src={change2}></Image>
                    </div>
                    <div>
                        <h3 className="text-2xl font-bold mb-3">A Real Change</h3>
                        <p>Those who are not able to build we try to give them a home which is a real challenge for us.</p>
                    </div>
                </div>
                <div className="flex gap-12 my-5">
                    <div className="p-5 relative w-24" >
                        <Image className="absolute" src={strength1}></Image>
                        <Image className="absolute top-4 left-5 " src={strength2}></Image>
                    </div>
                    <div>
                        <h3 className="text-2xl font-bold mb-3">With Big Strength</h3>
                        <p>It takes nothing to join the crowd, it takes everything to stand alone. So be a fountain not a drain.</p>
                    </div>
                </div>
                <div className="flex  gap-12 my-5 ">
                    <div className="p-5 relative w-24" >
                        <Image className="absolute" src={donate1}></Image>
                        <Image className="absolute top-2 left-5 " src={donate2}></Image>
                    </div>
                    <div>
                        <h3 className="text-2xl font-bold mb-3">Donate and Help</h3>
                        <p>Your Small Donations Make A Bigger Impact On Someone's Life, So please donate and help us.</p>
                    </div>
                </div>
                <div className="flex gap-12 my-5 ">
                    <div className="p-5 relative w-24" >
                        <Image className="absolute" src={inspiration1}></Image>
                        <Image className="absolute top-3 left-5 " src={inspiration2}></Image>
                    </div>
                    <div>
                        <h3 className="text-2xl font-bold mb-3">Full Inspiration</h3>
                        <p>We admire your compassion and commitment to assisting others. You are always willing to help us</p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default WhyDonate;