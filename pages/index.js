import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Banner from "../Components/Banner/banner";
import CharityDifference from "../Components/Charity_With_Difference/CharityDifference";
import Contribute from "../Components/Contribute/Contribute";
import Volunteers from "../Components/Volunteers/Volunteers";


export default function Home() {
	useEffect(() =>{
		Aos.init({
			duration : 1000
		});
	}, [])
	return (
		<div>
			<Banner></Banner>
			<CharityDifference></CharityDifference>
			<Contribute></Contribute>
			<Volunteers></Volunteers>
		</div>
	);
}