import { Lobster } from '@next/font/google';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelopeOpen } from 'react-icons/fa';
const lobster = Lobster({
	weight: ['400'],
	subsets: ['latin']
});

const Contact = () => {
	return (
		<div className=" text-center py-12 lg:w-[1140px] mx-auto">
			<div
				id="contactInfo"
				class="my-8 grid lg:grid-cols-3 gap-1 justify-evenly p-6"
			>
				{/* Input form side */}
				<div class="bg-white col-span-2 rounded-lg lg:pr-12">
					<div className=" mb-6 text-start">
						<h1
							className={`${lobster.className} text-lg md:text-2xl text-red-500 font-bold`}
						>
							Support LoveIcon With Heart!
						</h1>
						<h2 className="text-5xl text-gray-800 font-bold py-5">
							Get In Touch With Us
						</h2>
						<p className="text-lg">
							We are here to answer your questions. If you have any questions
							please leave us a message. We will contact with you as soon as
							possible.
						</p>

						<div className="text-start py-12">
							<form>
								<div>
									<div className="grid md:grid-cols-2 gap-6 font-semibold">
										<div className="form-control ">
											<input
												type="text"
												placeholder="Your Name"
												className="input input-bordered"
											/>
										</div>
										<div className="form-control ">
											<input
												type="email"
												placeholder="Email"
												className="input input-bordered"
											/>
										</div>
										<div className="form-control ">
											<input
												type="text"
												placeholder="Phone"
												className="input input-bordered"
											/>
										</div>
										<div className="form-control ">
											<input
												type="email"
												placeholder="Subject"
												className="input input-bordered"
											/>
										</div>
									</div>

									<textarea
										className="textarea textarea-bordered w-full h-32 mt-8 font-semibold"
										placeholder="Message....."
									></textarea>
									<div className="mt-6">
										<button className="btn btn-lg border-0 bg-red-600">
											SEND MESSAGE
										</button>
									</div>
								</div>
							</form>
						</div>
					</div>
				</div>

				{/* Right side information */}

				<div class="bg-gray-200 rounded-lg md:p-8 text-start ">
					<div className="bg-white p-6">
						<div className="flex justify-between mt-6">
							<h4 className="flex items-center font-bold text-2xl">
								<span className="mr-2 bg-red-600 text-white p-2 rounded">
									<FaMapMarkerAlt />
								</span>
								Visit Office
							</h4>
						</div>
						<p className="py-4 font-semibold">
							83 Andy Street, Madison <br /> New Jersey - 78002
						</p>
						<hr />
					</div>

					<div className="bg-white p-6">
						<div className="flex justify-between ">
							<h4 className="flex items-center font-bold text-2xl">
								<span className="mr-2 bg-red-600 text-white p-2 rounded">
									<FaPhoneAlt />
								</span>
								Phone
							</h4>
						</div>
						<p className="py-4 font-semibold">
							Support +1 700 888 1234 <br /> Events +1 700 888 1200
						</p>
						<hr />
					</div>
					<div className="bg-white p-6">
						<div className="flex justify-between ">
							<h4 className="flex items-center font-bold text-2xl">
								<span className="mr-2 bg-red-600 text-white p-2 rounded">
									<FaEnvelopeOpen />
								</span>
								Email
							</h4>
						</div>
						<p className="py-4 font-semibold">
							info@loveandcare.org <br /> support@loveandcare.org
						</p>
						<hr />
					</div>
				</div>
			</div>

			<div></div>
		</div>
	);
};

export default Contact;
