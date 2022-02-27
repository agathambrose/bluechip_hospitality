import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const About = () => {
	const router = useRouter();
	useEffect(() => {
		router.prefetch("/");
	});
	return (
		<div>
			<Head>
				<title>Bluechip - About</title>
			</Head>
			<Navbar about={"about"} />
			<div className="font-NotoSerif">
				<div>
					<div className="relative">
						<div className="flex object-fill w-full h-[500px] bg-gray-500 bg-about-hero md:bg-about-hero-md lg:bg-about-hero-lg bg-no-repeat bg-cover justify-start relative"></div>
						<div className="text-white absolute bottom-20 md:left-24 left-10">
							<h1 className="font-black md:text-6xl text-4xl w-3/5">
								About Blue Chip
							</h1>
						</div>
					</div>
					<div className="absolute top-0 md:left-20 left-5">
						<div className="h-[430px] w-[220px] border-l border-b border-white "></div>
						<p className="text-white font-semibold text-sm">
							Here’s why we are the best option for you
						</p>
					</div>
				</div>
				<div className="px-4 font-NotoSerif">
					<div className="lg:hidden">
						<div className="relative my-8 px-5 md:px-0 lg:my-0 w-full flex justify-center h-[330px]">
							<div className="h-[300px] md:block hidden z-10 top-3 absolute">
								<Image
									src={"/assets/images/bluearea.png"}
									alt="bluearea image"
									width="600px"
									height="300px"
									className="rounded-2xl absolute z-10"
								/>
								<div className="h-[100px] w-[150px] rounded-tl-2xl z-[1] absolute -top-2 -left-3 opacity-30 bg-gradient-to-tr from-primary-color via-primary-color to-white shadow-2xl shadow-white"></div>
							</div>
							<div className="h-[600px] block md:hidden z-10 top-3 absolute">
								<Image
									src={"/assets/images/bluearea.png"}
									alt="bluearea image"
									width="600px"
									height="650px"
									className="rounded-2xl absolute z-10"
								/>
								<div className="h-[100px] w-[150px] rounded-tl-2xl z-[1] absolute -top-2 -left-2 opacity-30 bg-gradient-to-tr from-primary-color via-primary-color to-white shadow-2xl shadow-white"></div>
							</div>
						</div>
						<div className="flex justify-center">
							<p className="text-gray-600 text-center md:w-10/12 md:text-lg text-sm mt-6 md:mt-0">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor
								neque, volutpat morbi quam. Vulputate augue tempus vehicula
								euismod penatibus velit, eget. Egestas diam gravida tempus,
								magnis eget turpis orci tortor nascetur. Augue eu eget
								suspendisse consequat quis at. Arcu sagittis fames arcu, odio.
								Neque vel diam aliquam, consequat, sed. Sed proin eu arcu orci
								ultricies nunc. Ut sit purus suspendisse nibh purus placerat
								vestibulum. Cras donec fermentum porttitor quis lectus quam.
								Turpis pretium mattis purus a tortor. Cras.
							</p>
						</div>
					</div>
					<div className="lg:flex w-full justify-center items-center px-10 pt-4 hidden">
						<div className="relative flex lg:justify-center mr-8">
							<div className="relative my-8 lg:my-0 w-[400px] flex justify-center h-[400px]">
								<div className="h-[400px] z-10 top-3 absolute">
									<Image
										src={"/assets/images/bluearea.png"}
										alt="bluearea image"
										width="400px"
										height="380px"
										className="rounded-2xl absolute z-10"
									/>
									<div className="h-[100px] w-[150px] rounded-tl-2xl z-[1] absolute -top-2 -left-3 opacity-30 bg-gradient-to-tr from-primary-color via-primary-color to-white shadow-2xl shadow-white"></div>
								</div>
							</div>
						</div>
						<div className="flex justify-start w-2/6">
							<p className="text-gray-600 text-lg">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor
								neque, volutpat morbi quam. Vulputate augue tempus vehicula
								euismod penatibus velit, eget. Egestas diam gravida tempus,
								magnis eget turpis orci tortor nascetur. Augue eu eget
								suspendisse consequat quis at. Arcu sagittis fames arcu, odio.
								Neque vel diam aliquam, consequat, sed. Sed proin eu arcu orci
								ultricies nunc. Ut sit purus suspendisse nibh purus placerat
								vestibulum. Cras donec fermentum porttitor quis lectus quam.
								Turpis pretium mattis purus a tortor. Cras.
							</p>
						</div>
					</div>
					<div className="flex flex-col relative justify-center items-center py-8">
						<div className="flex flex-col p4-5 justify-center items-center">
							<h3 className="text-3xl md:text-4xl font-black text-secondary-color">
								Our Story
							</h3>
							<p className="text-gray-600 text-center mt-4 lg:w-4/5 md:w-10/12 md:text-lg text-sm">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit.
								Bibendum amet, hendrerit in sollicitudin faucibus aenean
								volutpat in vel. Pretium neque cursus scelerisque aliquet
								hendrerit adipiscing amet enim. Nunc blandit non ultrices
								imperdiet vitae. Et pulvinar lobortis lacus pulvinar adipiscing
								magnis tincidunt ipsum. Luctus turpis pharetra tempus in. Ut
								tellus id vestibulum aenean pretium nunc, elit. At vel, volutpat
								tempor pulvinar. Tortor facilisis viverra sit quam mauris. Diam
								tincidunt consectetur vestibulum et aenean sed et, molestie
								duis. Est ultricies aliquam tellus nec. Eu eget et quam ut
								dictumst risus enim lorem leo. Ultrices a sagittis fames odio.
								Platea enim in quis tincidunt commodo, id quis. Tincidunt
								interdum urna mauris pharetra, vitae. Tempus faucibus eros, arcu
								vestibulum ut convallis aenean nec commodo. In at iaculis nulla
								diam a viverra et. Enim.
							</p>
						</div>
						<div className="h-[360px] lg:[300px] w-[220px] bottom-5 md:top-20 lg:top-10 absolute right-0 md:right-5 lg:right-20 border-r border-b border-black "></div>
					</div>
				</div>
				<Footer />
			</div>
		</div>
	);
};

export default About;
