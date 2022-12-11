import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import Banner from '../Components/Banner/banner';
import CharityDifference from '../Components/Charity_With_Difference/CharityDifference';
import Contribute from '../Components/Contribute/Contribute';
import OurMission from '../Components/OurMission/ourMission';
import GetInspire from '../Components/GetInspire/getInspire';

export default function Home() {
	useEffect(() => {
		Aos.init({
			duration: 1500
		});
	}, []);
	return (
		<div>
			<Banner></Banner>
			<CharityDifference></CharityDifference>
			<Contribute></Contribute>
			<OurMission></OurMission>
			<GetInspire></GetInspire>
			<h1>This is Saurav Mondal</h1>
			<h1>This is Samrat Joydhar</h1>
			<h1>This is Shohug Mahbub</h1>
		</div>
	);
}
