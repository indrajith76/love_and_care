import Image from 'next/image';

import features1 from '../../public/getInspire/features-1.jpg';
import features2 from '../../public/getInspire/features-2.jpg';
import features3 from '../../public/getInspire/features-3.jpg';
import features4 from '../../public/getInspire/thm-shape-12.png';

const getInspire = () => {
	return (
		<div className="text-center py-12 m-auto container">
			<div className="grid md:grid-cols-3 sm:grid-cols-1 ">
				<figure className="relative overflow-hidden">
					<Image
						className="cardImage h-full w-full duration-500 transform hover:scale-125"
						src={features1}
						width={520}
						height={400}
						alt=""
					></Image>
					<div className="absolute  sm:left-7 top-0 text-center px-6 py-3 block z-20">
						<h2 className="card-title text-4xl pt-24 font-bold py-3 text-white">
							We Fight Illiteracy
						</h2>
						<h2 className="card-title text-2xl text-white">
							Community of diverse people
						</h2>
					</div>

					<div className="absolute flex items-center justify-center top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden opacity-0 transition duration-300 ease-in-out bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:opacity-70 z-10"></div>
				</figure>

				<figure className="relative">
					<Image
						className="cardImage h-full w-full  duration-500 transform hover:scale-125"
						src={features2}
						width={520}
						height={400}
						alt=""
					></Image>
					<div className="absolute  sm:left-7 top-0 text-center px-6 py-3 block z-20">
						<h2 className="card-title text-4xl pt-24 font-bold text-white">
							We Fight Illiteracy
						</h2>
						<h2 className="card-title text-white text-2xl">
							Community of diverse people
						</h2>
					</div>

					<div className="absolute flex items-center justify-center top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden opacity-0 transition duration-300 ease-in-out bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:opacity-70 z-10"></div>
				</figure>

				<figure className="relative ">
					<Image
						className="cardImage h-full w-full  duration-500 transform hover:scale-125"
						src={features3}
						width={520}
						height={400}
						alt=""
					></Image>
					<div className="absolute sm:left-7 top-0 text-center px-6 py-3 block z-20">
						<h2 className="card-title  text-4xl pt-24 font-bold text-white">
							We Fight Illiteracy
						</h2>
						<h2 className="card-title text-white text-2xl">
							Community of diverse people
						</h2>
					</div>

					<div className="absolute  flex items-center justify-center top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden opacity-0  transition duration-300 ease-in-out bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:opacity-70 z-10"></div>
				</figure>
			</div>
		</div>
	);
};

export default getInspire;
