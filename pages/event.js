import React from 'react';
import Challenge from '../Components/Event/Challenge/challenge';
import Programme from '../Components/Event/Programme/programme';
import WhyDonate from '../Components/Event/WhyDonate/whyDonate';

const Event = () => {
    return (
        <div className='lg:grid grid-cols-[2fr,1fr]'>
            <div className='py-20 px-5 lg:pr-10 lg:pl-24'>
                <Programme></Programme>
                <WhyDonate></WhyDonate>
                <Challenge></Challenge>
            </div>
            <div className=' bg-slate-100 h-fit px-10 py-20'>
                <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium numquam nemo cumque consectetur dolorem omnis, ex quidem adipisci recusandae nihil quo accusantium saepe eos aliquam facilis beatae rerum qui. Provident?</div>
            </div>
        </div>
    );
};

export default Event;