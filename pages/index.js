import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Banner from "../Components/Banner/banner";
import CharityDifference from "../Components/Charity_With_Difference/CharityDifference";
import Contribute from "../Components/Contribute/Contribute";


export default function Home() {
	useEffect(() =>{
		Aos.init({
			duration : 1500
		});
	}, [])
	return (
		<div>
			<Banner></Banner>
			<CharityDifference></CharityDifference>
			<Contribute></Contribute>
			<h1>This is Saurav Mondal</h1>
			<h1>This is Samrat Joydhar</h1>
			<h1>This is Shohug Mahbub</h1>
		</div>
	);
}