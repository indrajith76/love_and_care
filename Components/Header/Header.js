import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import {
	BsCheckCircleFill,
	BsFacebook,
	BsInstagram,
	BsLinkedin,
	BsTelephoneFill,
	BsTwitter
} from 'react-icons/bs';
import { ImLocation } from 'react-icons/im';

const Header = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const navitems = (
		<>
			<li>
				<Link href="/">HOME</Link>
			</li>
			<li>
				<Link href="/">ABOUT</Link>
			</li>
			<li>
				<Link href="/event">EVENTS</Link>
			</li>
			<li>
				<Link href="/donations">DONATION</Link>
			</li>
			<li>
				<Link href="/blog">BLOG</Link>
			</li>
			<li>
				<Link href="/contact">CONTACT</Link>
			</li>
			<li>
				<Link
					href="/donate"
					className="flex items-center justify-center gap-2 bg-red-600 text-white py-4 px-5 rounded-lg"
				>
					<BsCheckCircleFill /> DONATE NOW
				</Link>
			</li>
			<li>
				<label htmlFor="my-modal-3" ><div className='grid grid-cols-3 w-8 h-8 cursor-pointer'>
					<p className='h-2 w-2 rounded-full bg-cyan-600'></p>
					<p className='h-2 w-2 rounded-full bg-cyan-600'></p>
					<p className='h-2 w-2 rounded-full bg-cyan-600'></p>
					<p className='h-2 w-2 rounded-full bg-cyan-600'></p>
					<p className='h-2 w-2 rounded-full bg-cyan-600'></p>
					<p className='h-2 w-2 rounded-full bg-cyan-600'></p>
					<p className='h-2 w-2 rounded-full bg-cyan-600'></p>
					<p className='h-2 w-2 rounded-full bg-cyan-600'></p>
					<p className='h-2 w-2 rounded-full bg-cyan-600'></p>
				</div></label>

			</li>
		</>
	);
	return (
		<>
			<div className="bg-slate-700 hidden lg:block sticky -top-0">
				<div className="flex flex-col lg:flex-row lg:justify-between container mx-auto py-3 px-5">
					<div className="flex justify-center items-center gap-5">
						<Link className="font-bold text-lg" href="">
							Follow Us
						</Link>
						<span className="text-slate-500">|</span>
						<Link href="">
							<BsFacebook />
						</Link>
						<span className="text-slate-500">|</span>
						<Link href="">
							<BsTwitter />
						</Link>
						<span className="text-slate-500">|</span>
						<Link href="">
							<BsLinkedin />
						</Link>
						<span className="text-slate-500">|</span>
						<Link href="">
							<BsInstagram />
						</Link>
					</div>
					<div className="flex justify-center items-center gap-5">
						<Link
							className="flex items-center gap-2 font-semibold text-lg"
							href=""
						>
							<BsTelephoneFill /> 11987654321
						</Link>
						<span className="text-slate-500">|</span>
						<Link
							className="flex items-center gap-2 font-semibold text-lg"
							href=""
						>
							<ImLocation /> 83 Andy St. Madison NJ 78002
						</Link>
					</div>
				</div>
			</div>
			<div className="sticky top-0 z-40 bg-white">
				<div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
					<div className="relative flex items-center justify-between">
						<a
							href="/"
							aria-label="Company"
							title="Company"
							className="inline-flex items-center"
						>
							<Image
								src="/logo/header-logo.png"
								alt="Picture of the author"
								width={250}
								height={250}
							/>
						</a>
						<ul className="flex items-center hidden space-x-8 lg:flex text-slate-800 font-semibold">
							{navitems}
						</ul>
						<div className="lg:hidden">
							<button
								aria-label="Open Menu"
								title="Open Menu"
								className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50"
								onClick={() => setIsMenuOpen(true)}
							>
								<svg className="w-5 text-gray-600" viewBox="0 0 24 24">
									<path
										fill="currentColor"
										d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
									/>
									<path
										fill="currentColor"
										d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
									/>
									<path
										fill="currentColor"
										d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
									/>
								</svg>
							</button>
							{isMenuOpen && (
								<div className="absolute top-0 left-0 w-full z-30">
									<div className="p-5 bg-white border rounded shadow-sm">
										<div className="flex items-center justify-between mb-4">
											<div>
												<Link href="/">
													<Image
														src="/logo/header-logo.png"
														alt="Picture of the author"
														width={150}
														height={150}
													></Image>
												</Link>
											</div>
											<div>
												<button
													aria-label="Close Menu"
													title="Close Menu"
													className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
													onClick={() => setIsMenuOpen(false)}
												>
													<svg
														className="w-5 text-gray-600"
														viewBox="0 0 24 24"
													>
														<path
															fill="currentColor"
															d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
														/>
													</svg>
												</button>
											</div>
										</div>
										<nav className="text-slate-800">
											<ul className="space-y-4">{navitems}</ul>
										</nav>
									</div>
								</div>
							)}
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Header;
