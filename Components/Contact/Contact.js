import { Lobster } from '@next/font/google';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelopeOpen } from 'react-icons/fa';
const lobster = Lobster({
	weight: ['400'],
	subsets: ['latin']
});

const Contact = () => {
	return (
		<>
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
							<h2 className="text-5xl text-slate-800 font-bold py-5">
								Get In Touch With Us
							</h2>
							<p className="text-lg text-slate-800">
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
													class="bg-white text-slate-800"
													type="text"
													placeholder="Your Name"
													className="input input-bordered"
												/>
											</div>
											<div className="form-control ">
												<input
													class="bg-white text-slate-800"
													type="email"
													placeholder="Email"
													className="input input-bordered"
												/>
											</div>
											<div className="form-control ">
												<input
													class="bg-white text-slate-800"
													type="text"
													placeholder="Phone"
													className="input input-bordered"
												/>
											</div>
											<div className="form-control ">
												<input
													class="bg-white text-slate-800"
													type="email"
													placeholder="Subject"
													className="input input-bordered"
												/>
											</div>
										</div>

										<textarea
											className="textarea textarea-bordered w-full h-32 mt-8 font-semibold bg-white text-slate-800"
											placeholder="Message....."
										></textarea>
										<div className="mt-6">
											<button className="btn btn-lg border-0 bg-red-600 text-white">
												SEND MESSAGE
											</button>
										</div>
									</div>
								</form>
							</div>
						</div>
					</div>

					{/* Right side information */}

					<div class="bg-gray-200 rounded-lg md:p-8 text-start">
						<div className="bg-white p-6">
							<div className="flex justify-between mt-6">
								<h4 className="flex items-center font-bold text-2xl text-slate-800">
									<span className="mr-2 bg-red-600 text-white p-2 rounded">
										<FaMapMarkerAlt />
									</span>
									Visit Office
								</h4>
							</div>
							<p className="py-4 font-semibold text-slate-800">
								83 Andy Street, Madison <br /> New Jersey - 78002
							</p>
							<hr />
						</div>

						<div className="bg-white p-6">
							<div className="flex justify-between ">
								<h4 className="flex items-center font-bold text-2xl text-slate-800">
									<span className="mr-2 bg-red-600 text-white p-2 rounded">
										<FaPhoneAlt />
									</span>
									Phone
								</h4>
							</div>
							<p className="py-4 font-semibold text-slate-800">
								Support +1 700 888 1234 <br /> Events +1 700 888 1200
							</p>
							<hr />
						</div>
						<div className="bg-white p-6">
							<div className="flex justify-between ">
								<h4 className="flex items-center font-bold text-2xl text-slate-800">
									<span className="mr-2 bg-red-600 text-white p-2 rounded">
										<FaEnvelopeOpen />
									</span>
									Email
								</h4>
							</div>
							<p className="py-4 font-semibold text-slate-800">
								info@loveandcare.org <br /> support@loveandcare.org
							</p>
							<hr />
						</div>
					</div>
				</div>
			</div>
			<iframe
				src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29248.661152995424!2d89.82368693782733!3d23.601368844479545!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fe2534aaa4fc7f%3A0x4daf43ffdb19a28e!2sFaridpur!5e0!3m2!1sen!2sbd!4v1671042986207!5m2!1sen!2sbd"
				// style="border:0;"
				style={{ border: 0 }}
				allowfullscreen=""
				loading="lazy"
				referrerpolicy="no-referrer-when-downgrade"
				className="w-full h-[100vh]"
			></iframe>
		</>
	);
};

export default Contact;
