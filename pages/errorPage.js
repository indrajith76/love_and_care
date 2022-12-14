import Header from '../Components/Header/Header';
import Link from 'next/link';
// import '../styles/globals.css';
const errorPage = () => {
	return (
		<div>
			<Header></Header>
			<div className=" text-center py-12 lg:w-[1140px] mx-auto">
				<div className="text-center">
					<h2 className="md:text-3xl font-bold">PAGE NOT FOUND</h2>
					<h2
						style={{ fontSize: '200px' }}
						className="font-extrabold text-black-900 error"
					>
						404
					</h2>
					<p className="text-lg px-6">
						We are unable to find a page you are looking for, Try later or click
						the button.
					</p>
					<div className="mt-6">
						<Link href="/">
							<button className="btn btn-lg border-0 bg-red-600">
								BACK TO HOME
							</button>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default errorPage;
