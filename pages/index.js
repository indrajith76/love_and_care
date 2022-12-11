import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Banner from "../Components/Banner/banner";
import CharityDifference from "../Components/Charity_With_Difference/CharityDifference";
import Contribute from "../Components/Contribute/Contribute";
import { Footer } from "../Components/Footer";
import Header from "../Components/Header/Header";
import Reviews from "../Components/Reviews/reviews";


export default function Home() {
	useEffect(() =>{
		Aos.init({
			duration : 1500
		});
	}, [])
	return (
		<div>
			<Header></Header>
			<Banner></Banner>
			<CharityDifference></CharityDifference>
			<Contribute></Contribute>
			<Reviews></Reviews>
			<Footer/>
		</div>
	);
}