import Image from 'next/image';

import features1 from '../../public/getInspire/features-1.jpg';
import features2 from '../../public/getInspire/features-2.jpg';
import features3 from '../../public/getInspire/features-3.jpg';

const getInspire = () => {
	return (
		<div className="text-center py-12 m-auto">
			<div className="grid md:grid-cols-3 sm:grid-cols-1 ">
				<div className="card  bg-base-100 shadow-xl  rounded-none image-full ">
					<figure>
						<Image className="img-fluid" src={features1}></Image>
					</figure>
					<div className="card-body items-center  text-center ">
						<h2 className="card-title text-4xl pt-24">Get Inspire And Help</h2>
						<h2 className="card-title">Community of diverse people</h2>
					</div>
				</div>
				<div className="card  bg-base-100 shadow-xl rounded-none  image-full md:my-4">
					<figure>
						<Image className="img-fluid" src={features2}></Image>
					</figure>
					<div className="card-body items-center  text-center ">
						<h2 className="card-title text-4xl pt-24">We Fight Illiteracy</h2>
						<h2 className="card-title">Community of diverse people</h2>
					</div>
				</div>
				<div className="card  bg-base-100 shadow-xl rounded   image-full">
					<figure>
						<Image className="img-fluid rounded" src={features3}></Image>
					</figure>
					<div className="card-body items-center  text-center ">
						<h2 className="card-title text-4xl pt-24">Connect with us</h2>
						<h2 className="card-title">Community of diverse people</h2>
					</div>
				</div>
				{/* w-11/12 max-w-[1140px] mx-auto */}

				{/* <div className="absolute flex items-center justify-center top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden opacity-0 transition duration-300 ease-in-out bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:opacity-70">
					<span className="text-9xl">+</span>
				</div> */}
			</div>
		</div>
	);
};

export default getInspire;
