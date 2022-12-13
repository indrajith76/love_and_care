
import Image from 'next/image';
import img1 from '../../../public/EventImg/challenge.png'
import img2 from '../../../public/EventImg/ev3.jpg'

const Challenge = () => {
    return (
        <div className='my-12'>

            <div className="flex flex-col lg:flex-row gap-5">
                <div className='lg:w-1/2'>
                    <div className="relative mb-5">
                        <h2 className="text-2xl lg:text-3xl font-bold">The Challenge</h2>
                        <Image className="absolute -top-2 -left-4 w-16 opacity-10" src={img1}></Image>
                    </div>
                    <p className='text-lg'>Coronavirus infection is a serious hazard to the world's population. SARS (severe acute respiratory syndrome) is a serious consequence that can arise in patients who have been infected with the coronavirus.</p>
                    <p className='my-5 text-lg'>COVID-19 is more prone to the propagation of the virus in nations with a high population density than in countries with a lower population density. As a result, defeating the Corona virus is a major challenge for us.</p>
                </div>
                <div className="lg:w-2/5">
                    <Image className="w-full" src={img2}></Image>
                </div>
            </div>
            <p className='text-lg mt-5'>So we have to make sure the social distancing, social service, testing service and make the coordination better between people. That’s our biggest challenge to make sure.</p>
        </div>
    );
};

export default Challenge;