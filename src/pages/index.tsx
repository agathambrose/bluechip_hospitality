import type { NextPage } from 'next'
import Head from 'next/head'
import Image from "next/image";
import Navbar from "../components/Navbar";

const Home: NextPage = () => {
	return (
		<div>
			<Head>
				<title>Bluechip - Home</title>
			</Head>
			<Navbar home={"home"} />
			<div className='font-NotoSerif'>
				<div className="relative">
					<div className="flex object-fill w-full h-[600px] bg-gray-500 bg-home-hero md:bg-home-hero-md lg:bg-home-hero-lg bg-no-repeat bg-cover justify-start relative"></div>
					<div className="text-white absolute bottom-32 md:left-24 left-5">
						<h1 className="font-black text-4xl md:text-5xl w-3/5">
							Blue Chip Hospitality
						</h1>
						<h3 className="font-semibold md:text-2xl text-sm mt-1">
							Lorem ipsum dolor sit amet
						</h3>
					</div>
				</div>
				<div className="flex w-full bg-gray-200 px-10">
					<div className="relative my-3">
						<p>Picture</p>
					</div>
					<div>
						<h2>A Glimpse Inside Blue Chip</h2>
						<div className="flex items-center space-x-3">
							<div>
								<p>Luxury</p>
							</div>{" "}
							<div className="h-2 w-2 bg-primary-color rounded-full"></div>{" "}
							<div>
								<p>Ambiance</p>
							</div>{" "}
							<div className="h-2 w-2 bg-primary-color rounded-full"></div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home
