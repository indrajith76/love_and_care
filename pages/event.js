import Head from 'next/head';
import React from 'react';
import Challenge from '../Components/Event/Challenge/challenge';
import Person from '../Components/Event/Person/person';
import Search from '../Components/Event/Search/search';
import Programme from '../Components/Event/Programme/programme';
import WhyDonate from '../Components/Event/WhyDonate/whyDonate';
import { Footer } from '../Components/Footer';
import Header from '../Components/Header/Header';
import Donate from '../Components/Event/Donate/donate';
import Upcoming from '../Components/Event/Upcoming/upcoming';
import QuoteModal from '../Components/QuoteModal/QuoteModal';


const Event = () => {
    return (
        <>
            <Head>
                <link rel="shortcut icon" href="/logo/favicon.png" />
                <title>Events | Love&Care</title>
            </Head>
            <Header />
            <div className='lg:grid grid-cols-[2fr,1fr] max-w-[1400px] mx-auto'>
                <div className='py-20 px-5 lg:pr-10 lg:pl-24'>
                    <Programme></Programme>
                    <WhyDonate></WhyDonate>
                    <Challenge></Challenge>
                </div>
                <div className=' bg-slate-100 h-fit pt-20 pb-10 px-5 lg:pl-10 lg:pr-24'>
                    <Person></Person>
                    <Search></Search>
                    <Donate></Donate>
                    <Upcoming></Upcoming>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Event;