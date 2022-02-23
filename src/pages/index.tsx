import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Navbar from "../components/Navbar";

const Home: NextPage = () => {
	return (
		<div>
			<Head>
				<title>Bluechip - Home</title>
			</Head>
			<Navbar home={"home"} />
			<div className="font-NotoSerif">
				<div className="relative">
					<div className="flex object-fill w-full h-[600px] bg-gray-500 bg-home-hero md:bg-home-hero-md lg:bg-home-hero-lg bg-no-repeat bg-cover justify-start relative"></div>
					<div className="text-white absolute bottom-[158px] md:left-12 left-5">
						<h1 className="font-black text-4xl md:text-5xl w-3/5">
							Blue Chip Hospitality
						</h1>
						<h3 className="font-semibold md:text-2xl text-sm mt-1">
							Lorem ipsum dolor sit amet
						</h3>
					</div>
				</div>
				<div className="w-full   bg-gradient-to-b from-transparent via-white to-white h-[200px] absolute -bottom-10"></div>
				<div className="relative">
					<div className="from-transparent via-white to-white absolute -top-20">
						<div className="relative flex justify-center items-center">
							<div className="md:flex w-full justify-center pt-4 hidden">
								<div className="relative w-full flex lg:justify-center h-[400px]">
									<div className="w-[300px] h-[300px] z-10 top-3 absolute md:right-4 lg:right-[103px]">
										<Image
											src={"/assets/images/gardenimage.png"}
											alt="garden image"
											width="270px"
											height="330px"
											className="rounded-2xl"
										/>
									</div>
									<div className="box-shade h-[200px] w-[200px]  rounded-tl-2xl z-[1] absolute top-0 left-12 opacity-50 shadow-2xl shadow-white"></div>
								</div>
								<div className="flex justify-center w-full">
									<div className="">
										<div>
											<h3 className="text-4xl font-black text-secondary-color">
												A Glimpse
											</h3>
											<h3 className="text-4xl font-black text-secondary-color">
												Inside Blue Chip
											</h3>
										</div>
										<div className="flex items-center font-semibold space-x-2 text-primary-color my-2">
											<div>
												<p className="text-lg">Luxury</p>
											</div>
											<div className="flex items-center">
												<div className="h-3 w-3 rounded-full bg-primary-color flex items-center"></div>
											</div>
											<div>
												<p className="text-lg">Ambience</p>
											</div>
											<div>
												<div className="h-3 w-3 rounded-full bg-primary-color flex items-center"></div>
											</div>
											<div>
												<p className="text-lg">Great Dishes</p>
											</div>
										</div>
										<div>
											<p className="text-gray-600 lg:w-3/5 md:w-11/12 text-lg">
												Blue Chip Hospitality Limited (“Blue Chip”) is a
												hospitality and entertainment company in Ghana in the
												hospitality industry and operating in the food and
												beverage space. Blue Chip provides balanced hospitality
												solutions for a variety of sustainability challenges
												facing the hospitality industry in Ghana.
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
