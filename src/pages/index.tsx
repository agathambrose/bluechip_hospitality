import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Navbar from "../components/Navbar";
import { useEffect } from "react";
import { useRouter } from "next/router";
import Footer from "../components/Footer";

const Home: NextPage = () => {
	const router = useRouter();
	useEffect(() => {
		router.prefetch("/");
		router.prefetch("/about");
		router.prefetch("/services");
		router.prefetch("/portfolio");
		router.prefetch("/contact_us");
		router.prefetch("/team");
	});
	return (
		<div>
			<Head>
				<title>Bluechip - Home</title>
			</Head>
			<Navbar home={"home"} />
			<div className="font-NotoSerif">
				<div>
					<div className="flex object-fill w-full h-[600px] bg-gray-500 bg-home-hero md:bg-home-hero-md lg:bg-home-hero-lg bg-no-repeat bg-cover justify-start relative"></div>
					<div className="text-white absolute top-[22rem] md:left-12 left-5">
						<h1 className="font-black text-4xl md:text-5xl w-3/5">
							Blue Chip Hospitality
						</h1>
						<h3 className="font-semibold md:text-2xl text-sm mt-1">
							Lorem ipsum dolor sit amet
						</h3>
					</div>
				</div>
				<div className="w-full bg-gradient-to-b from-transparent via-white to-white h-[200px] absolute md:block hidden -bottom-10"></div>
				<div className="flex flex-col relative w-full h-full">
					<div className="relative">
						<div className="w-full from-transparent via-white to-white absolute -top-20">
							<div className="flex-col relative hidden md:flex lg:flex">
								<div className="md:flex w-full justify-center pt-4 hidden">
									<div className="here relative w-full flex lg:justify-center h-[400px]">
										<div className="w-[300px] h-[300px] z-10 top-3 md:absolute md:right-6 md:block lg:hidden">
											<Image
												src={"/assets/images/gardenimage.png"}
												alt="garden image"
												width="270px"
												height="330px"
												className="rounded-2xl"
											/>
										</div>
										<div className="w-[300px] h-[300px] z-10 top-2 lg:absolute md:right-4 lg:right-[6.6rem] md:hidden lg:block rounded-2xl">
											<Image
												src={"/assets/images/gardenimage.png"}
												alt="garden image"
												width="350px"
												height="380px"
												className="rounded-2xl"
											/>
										</div>
										<div className="h-[100px] w-[150px]  rounded-tl-2xl z-[1] absolute top-0 lg:left-[13.5rem] md:left-12 opacity-30 bg-gradient-to-tr from-primary-color via-primary-color to-white shadow-2xl shadow-white"></div>
									</div>
									<div className="flex justify-center w-full">
										<div className="">
											<div>
												<h3 className="text-3xl md:text-4xl font-black text-secondary-color">
													A Glimpse
												</h3>
												<h3 className="text-3xl md:text-4xl font-black text-secondary-color">
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
													beverage space. Blue Chip provides balanced
													hospitality solutions for a variety of sustainability
													challenges facing the hospitality industry in Ghana.
												</p>
											</div>
										</div>
									</div>
								</div>
								<div className="relative min-h-[500px]">
									<div className="hidden absolute -top-10 lg:left-60 md:left-20 md:block text-gray-600 lg:w-2/5 md:w-2/5">
										<h3 className="text-4xl font-black text-secondary-color">
											Our Vision
										</h3>
										<p className="text-gray-600 lg:w-3/5 md:w-11/12 text-lg">
											To be an African powerhouse in hospitality and
											entertainment across Africa.
										</p>
									</div>
									<div className="absolute z-10  md:top-0 lg:-bottom-20 lg:right-[19rem] md:right-12">
										<div className="relative h-[280px] w-[380px] md:flex hidden">
											<div className="w-[350px] h-[300px] z-10 top-2 absolute md:left-14 md:block lg:hidden">
												<Image
													src={"/assets/images/darknight.png"}
													alt="dark night image"
													width="330px"
													height="260px"
													className="rounded-2xl"
												/>
											</div>
											<div className="w-[380px] h-[250px] z-10 top-2 absolute lg:left-14 md:hidden lg:block rounded-2xl">
												<Image
													src={"/assets/images/darknight.png"}
													alt="dark night image"
													width="370px"
													height="280px"
													className="rounded-2xl"
												/>
											</div>
											<div className="h-[100px] w-[100px] rounded-tl-2xl z-[1] absolute top-0 lg:right-[103px] md:left-12 opacity-30 bg-gradient-to-tr from-primary-color via-primary-color to-white shadow-2xl shadow-white"></div>
										</div>
									</div>
									<div className="absolute z-20 md:top-36 lg:top-32 lg:left-80 md:left-36">
										<div className="relative h-[280px] w-[400px] md:flex hidden">
											<div className="w-[300px] h-[300px] z-10 top-2 absolute md:left-14 md:block lg:hidden">
												<Image
													src={"/assets/images/barstools.png"}
													alt="barstools image"
													width="280px"
													height="240px"
													className="rounded-2xl"
												/>
											</div>
											<div className="w-[350px] h-[250px] z-10 top-2 absolute lg:left-14 md:hidden lg:block rounded-2xl">
												<Image
													src={"/assets/images/barstools.png"}
													alt="barstools image"
													width="330px"
													height="230px"
													className="rounded-2xl"
												/>
											</div>
											<div className="h-[100px] w-[100px] rounded-tl-2xl z-[1] absolute top-0 lg:right-[103px] md:left-12 opacity-30 bg-gradient-to-tr from-primary-color via-primary-color to-white shadow-2xl shadow-white"></div>
										</div>
									</div>
									<div className="absolute z-30 md:top-64 lg:-bottom-80 lg:left-[10.5rem] md:left-8">
										<div className="relative h-[280px] w-[380px] md:flex hidden">
											<div className="w-[300px] h-[300px] z-10 top-2 absolute md:left-14 md:block lg:hidden">
												<Image
													src={"/assets/images/champagne.png"}
													alt="champagne image"
													width="230px"
													height="200px"
													className="rounded-2xl"
												/>
											</div>
											<div className="w-[280px] h-[250px] z-10 top-2 absolute lg:left-14 md:hidden lg:block rounded-2xl">
												<Image
													src={"/assets/images/champagne.png"}
													alt="champagne image"
													width="250px"
													height="230px"
													className="rounded-2xl"
												/>
											</div>
											<div className="h-[100px] w-[100px] rounded-tl-2xl z-[1] absolute top-0 lg:right-[103px] md:left-12 opacity-30 bg-gradient-to-tr from-primary-color via-primary-color to-white shadow-2xl shadow-white"></div>
										</div>
									</div>
									<div className="hidden absolute lg:bottom-5 md:bottom-12 md:right-2 lg:right-2 md:block text-gray-600 lg:w-2/5 md:w-1/3">
										<h3 className="text-4xl font-black text-secondary-color">
											Our Mission
										</h3>
										<p className="text-gray-600 lg:w-3/5 md:w-11/12 text-lg">
											To be the most professional hospitality establishments in
											Ghana with excellent service ambiance and an unbeatable
											experience.
										</p>
									</div>
								</div>
								<div className="flex flex-col justify-center items-center py-8">
									<div className="h-1 rounded-full w-[250px] bg-primary-color"></div>
									<div className="flex flex-col py-5 justify-center items-center">
										<h3 className="text-4xl font-black text-secondary-color">
											Our Brands
										</h3>
										<p className="text-gray-600 text-center mt-4 lg:w-3/5 md:w-11/12 text-lg">
											Lorem ipsum dolor sit amet, consectetur adipiscing elit.
											Mattis nibh mi, et ipsum mattis dui. Scelerisque et
											iaculis mattis quis aliquet eget.
										</p>
									</div>
									<div className="rounded-full h-1 w-[200px] bg-primary-color"></div>
								</div>
								<div className="flex flex-col justify-center items-center">
									<div className="flex justify-center items-center py-5">
										<div className="w-[150px] rounded-md flex relative mr-4">
											<Image
												src={"/assets/images/bloombar.png"}
												alt="bloombar image"
												width={150}
												height={200}
												className="rounded-2xl"
											/>
											<div className="absolute bottom-2 md:right-[2.5rem] lg:right-9 text-lg text-white font-semibold">
												<p>Bloom bar</p>
											</div>
										</div>
										<div className="w-[150px] rounded-md flex relative mr-5">
											<Image
												src={"/assets/images/eastend.png"}
												alt="eastend image"
												width={150}
												height={200}
												className="rounded-2xl"
											/>
											<div className="absolute bottom-2 md:right-[2.6rem] lg:right-10 text-white text-lg font-semibold">
												<p>East End</p>
											</div>
										</div>
										<div className="w-[150px] rounded-md flex relative mr-5">
											<Image
												src={"/assets/images/avenue.png"}
												alt="avenue image"
												width={150}
												height={200}
												className="rounded-2xl"
											/>
											<div className="absolute bottom-2 md:right-12 lg:right-[2.9rem] text-lg text-white font-semibold">
												<p>Avenue</p>
											</div>
										</div>
										<div className="w-[150px] rounded-md flex relative">
											<Image
												src={"/assets/images/scorch.png"}
												alt="scorch image"
												width={150}
												height={200}
												className="rounded-2xl"
											/>
											<div className="absolute bottom-2 md:right-12 text-lg lg:right-[2.9rem] text-white font-semibold">
												<p>Scorch</p>
											</div>
										</div>
									</div>
									<div className="rounded-full h-1 w-[400px] bg-primary-color my-8"></div>
								</div>
								<Footer />
							</div>
						</div>
						<div className="px-4 py-5 font-NotoSerif block md:hidden">
							<div className="flex justify-center w-full">
								<div>
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
											<p className="text-base">Luxury</p>
										</div>
										<div className="flex items-center">
											<div className="h-3 w-3 rounded-full bg-primary-color flex items-center"></div>
										</div>
										<div>
											<p className="text-base">Ambience</p>
										</div>
										<div>
											<div className="h-3 w-3 rounded-full bg-primary-color flex items-center"></div>
										</div>
										<div>
											<p className="text-base">Great Dishes</p>
										</div>
									</div>
									<div>
										<p className="text-gray-600 lg:w-3/5 md:w-11/12 text-base">
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
							<div className="flex justify-center mt-10">
								<div className="relative h-[330px] w-[270px]">
									<div className=" z-10 absolute top-2 -left-0">
										<Image
											src={"/assets/images/gardenimage.png"}
											alt="garden image"
											width="270px"
											height="330px"
											className="rounded-2xl"
										/>
									</div>
									<div className="h-[100px] w-[150px] rounded-tl-2xl z-[1] absolute top-0 -left-2  opacity-30 bg-gradient-to-tr from-primary-color via-primary-color to-white shadow-2xl shadow-white"></div>
								</div>
							</div>
							<div className="text-gray-600 my-8">
								<h3 className="text-3xl font-black text-secondary-color">
									Our Vision
								</h3>
								<p className="text-gray-600 lg:w-3/5 md:w-11/12 text-base">
									To be an African powerhouse in hospitality and entertainment
									across Africa.
								</p>
							</div>
							<div className="h-[300px]">
								<div className="flex justify-end absolute right-0">
									<div className="relative h-[250px] w-[200px]">
										<div className=" z-10 absolute top-2 -left-0">
											<Image
												src={"/assets/images/darknight.png"}
												alt="dark night image"
												width="200px"
												height="220px"
												className="rounded-2xl"
											/>
										</div>
										<div className="h-[80px] w-[100px] rounded-tl-2xl z-[1] absolute top-0 -left-2  opacity-30 bg-gradient-to-tr from-primary-color via-primary-color to-white shadow-2xl shadow-white"></div>
									</div>
								</div>
								<div className="flex justify-start absolute left-0 mt-20">
									<div className="relative h-[250px] w-[200px]">
										<div className=" z-10 absolute top-2 -left-0">
											<Image
												src={"/assets/images/barstools.png"}
												alt="barstools image"
												width="200px"
												height="220px"
												className="rounded-2xl"
											/>
										</div>
										<div className="h-[80px] w-[100px] rounded-tl-2xl z-[1] absolute top-0 -left-2  opacity-30 bg-gradient-to-tr from-primary-color via-primary-color to-white shadow-2xl shadow-white"></div>
									</div>
								</div>
							</div>
							<div className="text-gray-600 my-8">
								<h3 className="text-3xl text-center font-black text-secondary-color mb-2">
									Our Mission
								</h3>
								<p className="text-gray-600 text-center text-base">
									To be the most professional hospitality establishments in
									Ghana with excellent service ambiance and an unbeatable
									experience.
								</p>
							</div>
							<div className="flex flex-col justify-center items-center py-4">
								<div className="h-1 rounded-full w-[200px] bg-primary-color"></div>
								<div className="flex flex-col py-5 justify-center items-center">
									<h3 className="text-3xl font-black text-secondary-color">
										Our Brands
									</h3>
									<p className="text-gray-600 text-center mt-4 text-base">
										Lorem ipsum dolor sit amet, consectetur adipiscing elit.
										Mattis nibh mi, et ipsum mattis dui. Scelerisque et iaculis
										mattis quis aliquet eget.
									</p>
								</div>
								<div className="rounded-full h-1 w-[150px] bg-primary-color"></div>
							</div>
							<div className="w-full flex flex-col justify-center items-center space-y-4 mt-4">
								<div className="w-[200px] rounded-md flex relative">
									<Image
										src={"/assets/images/bloombar.png"}
										alt="bloombar image"
										width={200}
										height={200}
										className="rounded-2xl"
									/>
									<div className="absolute bottom-2 left-[3.8rem] text-lg text-white font-semibold">
										<p>Bloom bar</p>
									</div>
								</div>
								<div className="w-[200px] rounded-md flex relative">
									<Image
										src={"/assets/images/eastend.png"}
										alt="eastend image"
										width={200}
										height={200}
										className="rounded-2xl"
									/>
									<div className="absolute bottom-2 left-[3.8rem] text-lg text-white font-semibold">
										<p>East End</p>
									</div>
								</div>
								<div className="w-[200px] rounded-md flex relative">
									<Image
										src={"/assets/images/avenue.png"}
										alt="avenue image"
										width={200}
										height={200}
										className="rounded-2xl"
									/>
									<div className="absolute bottom-2 left-[4.2rem] text-lg text-white font-semibold">
										<p>Avenue</p>
									</div>
								</div>
								<div className="w-[200px] rounded-md flex relative">
									<Image
										src={"/assets/images/scorch.png"}
										alt="scorch image"
										width={200}
										height={200}
										className="rounded-2xl"
									/>
									<div className="absolute bottom-2 left-[4.5rem] text-lg text-white font-semibold">
										<p>Scorch</p>
									</div>
								</div>
								<div className="rounded-full h-1 w-[200px] bg-primary-color"></div>
							</div>
						</div>
							<Footer/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
