import Image from 'next/image';
import mission1 from '../../public/OurMissionImg/mission1.jpg';
import mission2 from '../../public/OurMissionImg/logo.png';
import mission3 from '../../public/OurMissionImg/mission-goal-shape-1.png';
import mission4 from '../../public/OurMissionImg/mission-goal-shape-2.png';
import mission5 from '../../public/OurMissionImg/mission-goal-shape-3.png';
import { FaUser, FaBeer, FaBong, FaHeart } from 'react-icons/fa';
const ourMission = () => {
	return (
		<div className=" text-center py-12 md:w-[1140px]  m-auto">
			<h2 className="text-2xl text-red-700">We Change Your Life & World</h2>
			<h2 className="text-5xl font-bold py-5">Our Mission & Goals</h2>

			<div className="grid md:grid-cols-2 sm:grid-cols-1 py-6 text-start">
				<div>
					<Image className="img-fluid w-full" src={mission1}></Image>
				</div>

				<div className=" md:-ml-24">
					<div className="card bg-base-100 shadow-xl py-12 rounded rounded-0">
						<div className="card-body">
							<div className="flex ">
								<Image className="mx-4" src={mission2}></Image>
								<h2 className="card-title sm:text-3xl font-bold text-start">
									Small Donations Make Bigger Impact On Someone’s Life, Act
									Today!
								</h2>
							</div>

							<h3 className="text-xl py-4">
								Our mission is to make the world a better place for everyone.
								Everyone has their rights equally and we want to make sure that
								people can get food, education, treatment and accommodation for
								everyone who is living in poverty.
							</h3>
							<div className="grid md:grid-cols-3  sm:grid-cols-1 gap-2  justify-items-center items-center text-center">
								<div>
									<figure>
										<Image src={mission3}></Image>
									</figure>
									<div className="">
										<h2 className="">
											<FaUser className="-mt-8 ml-16"></FaUser>
										</h2>
									</div>
									<h2 className="text-2xl font-bold py-6">Home Shelter</h2>
								</div>
								<div>
									<figure>
										<Image src={mission4}></Image>
									</figure>
									<div>
										<h2 className="-mt-7">
											<FaBong className="-mt-8 ml-20"></FaBong>
										</h2>
									</div>
									<h2 className="text-2xl font-bold py-6">Water And Food</h2>
								</div>
								<div>
									<figure>
										<Image src={mission5}></Image>
									</figure>
									<div className="">
										<h2 className="-mt-7">
											<FaHeart className="-mt-8 ml-20"></FaHeart>
										</h2>
									</div>
									<h2 className="text-2xl font-bold py-6">Love The World</h2>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ourMission;
