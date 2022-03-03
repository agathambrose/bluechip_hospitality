import Head from "next/head";
import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import type { NextPage } from "next";

const Home: NextPage = () => {
	return (
		<div>
			<Head>
				<title>Bluechip - Home</title>
			</Head>
			<Navbar home={"home"} />
			<div className="font-NotoSerif">
				<div data-aos="fade-up">
					<div className="flex object-fill w-full h-[600px] bg-gray-500 bg-home-hero md:bg-home-hero-md lg:bg-home-hero-lg bg-no-repeat bg-cover justify-start relative"></div>
					<div className="text-white absolute top-[22rem] md:left-12 left-5">
						<h1 className="font-black text-4xl md:text-6xl w-3/5">
							Blue Chip Hospitality
						</h1>
						<h3 className="font-semibold md:text-3xl text-sm mt-1">
							Lorem ipsum dolor sit amet
						</h3>
					</div>
				</div>
				<div className="w-full bg-gradient-to-b from-transparent via-white to-white h-[200px] absolute md:block lg:block xl:block 2xl:block hidden md:top-[28rem]"></div>
				<div className="flex flex-col relative w-full h-full">
					<div className="relative">
						<div className="w-full from-transparent via-white to-white absolute -top-20">
							<div className="flex-col relative hidden md:flex lg:flex">
								<div className="w-full flex justify-center" data-aos="fade-up">
									<div className="md:flex w-4/5 justify-center items-center lg:px-10 md:px-3 pt-4 hidden">
										<div className="relative flex lg:justify-center mr-8">
											<div className="relative my-8 lg:my-0 lg:w-[400px] md:w-[260px] flex justify-center lg:h-[400px] md:h-[350px]">
												<div className="lg:h-[400px] lg:w-[400px] md:w-[290px] md:h[380px] z-10 top-3 absolute">
													<Image
														src={"/assets/images/gardenimage.png"}
														alt="garden image"
														width="400px"
														height="380px"
														className="rounded-2xl absolute z-10"
													/>
													<div className="h-[100px] w-[150px] rounded-tl-2xl z-[1] absolute md:-top-2 lg:-top-2 md:-left-2 lg:-left-2 opacity-30 bg-gradient-to-tr from-primary-color via-primary-color to-white shadow-2xl shadow-white"></div>
												</div>
											</div>
										</div>
										<div className="flex flex-col justify-start lg:w-5/6">
											<div className="flex justify-center w-full">
												<div>
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
														<p className="text-gray-600 xl:4/5 text-xl">
															Blue Chip Hospitality Limited (“Blue Chip”) is a
															hospitality and entertainment company in Ghana in
															the hospitality industry and operating in the food
															and beverage space. Blue Chip provides balanced
															hospitality solutions for a variety of
															sustainability challenges facing the hospitality
															industry in Ghana.
														</p>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div
									className="w-full flex justify-center h-[600px]"
									data-aos="fade-in"
								>
									<div className="w-4/5 md:w-11/12 lg:w-4/5 relative">
										<div
											className="w-3/5 md:2/5 text-white absolute md:-top-16 lg:top-5 left-10"
											data-aos="fade-down-left"
										>
											<h3 className="text-4xl font-black text-secondary-color">
												Our Vision
											</h3>
											<p className="text-gray-600 lg:w-3/5 md:w-8/12 text-lg">
												To be an African powerhouse in hospitality and
												entertainment across Africa.
											</p>
										</div>
										<div
											className="w-2/5 absolute right-0 bottom-14"
											data-aos="fade-up-right"
										>
											<h3 className="text-4xl font-black text-secondary-color">
												Our Mission
											</h3>
											<p className="text-gray-600 text-lg md:pr-3">
												To be the most professional hospitality establishments
												in Ghana with excellent service ambiance and an
												unbeatable experience.
											</p>
										</div>
										<div
											className="h-[250px] w-[400px] absolute top-0 right-0 z-10"
											data-aos="fade-right"
										>
											<div className="relative md:flex hidden">
												<div className="w-[350px] h-[300px] z-10 top-2 absolute md:left-14 md:block lg:hidden">
													<Image
														src={"/assets/images/darknight.png"}
														alt="dark night image"
														width="330px"
														height="260px"
														className="rounded-2xl"
													/>
												</div>
												<div className="lg:w-[380px] lg:h-[250px] xl:w-[600px] xl:h-[300px] z-10 xl:right-0 top-2 absolute md:hidden lg:block rounded-2xl">
													<Image
														src={"/assets/images/darknight.png"}
														alt="dark night image"
														width="800px"
														height="500px"
														className="rounded-2xl"
													/>
												</div>
												<div className="h-[100px] w-[100px] rounded-tl-2xl z-[1] absolute top-1 lg:-left-1 xl:-left-[12.8rem] md:left-[3.3rem] opacity-30 bg-gradient-to-tr from-primary-color via-primary-color to-white shadow-2xl shadow-white"></div>
											</div>
										</div>
										<div
											className="h-[250px] w-[350px]  absolute bottom-0 left-0 z-20"
											data-aos="fade-left"
										>
											<div className="relative md:flex hidden">
												<div className="w-[350px] h-[300px] z-10 top-0 absolute md:left-14 md:block lg:hidden">
													<Image
														src={"/assets/images/champagne.png"}
														alt="champagne image"
														width="330px"
														height="260px"
														className="rounded-2xl"
													/>
												</div>
												<div className="lg:w-[380px] lg:h-[250px] xl:w-[450px] xl:h-[300px] xl:left-10 lg:left-10 z-10 top-0 absolute md:hidden lg:block rounded-2xl">
													<Image
														src={"/assets/images/champagne.png"}
														alt="champagne image"
														width="450px"
														height="300px"
														className="rounded-2xl"
													/>
												</div>
												<div className="h-[100px] w-[100px] rounded-tl-2xl z-[1] absolute -top-1 md:left-[3.3rem] lg:left-9 xl:left-9 opacity-30 bg-gradient-to-tr from-primary-color via-primary-color to-white shadow-2xl shadow-white"></div>
											</div>
										</div>
										<div
											className="h-[250px] w-[400px] absolute top-[6rem] z-10 left-64"
											data-aos="fade-in"
										>
											<div className="relative md:flex hidden">
												<div className="w-[350px] h-[300px] z-10 -top-1 absolute md:left-0 md:block lg:hidden">
													<Image
														src={"/assets/images/barstools.png"}
														alt="barstools image"
														width="330px"
														height="260px"
														className="rounded-2xl"
													/>
												</div>
												<div className="lg:w-[400px] lg:h-[280px] xl:w-[500px] xl:h-[300px] xl:right-0 z-10 top-20 absolute md:hidden lg:block rounded-2xl">
													<Image
														src={"/assets/images/barstools.png"}
														alt="barstools image"
														width="500px"
														height="350px"
														className="rounded-2xl"
													/>
												</div>
												<div className="h-[100px] w-[100px] rounded-tl-2xl z-[1] absolute -top-1 md:-top-2 lg:-top-1 md:-left-1 opacity-30 xl:-left-[6.5rem] xl:top-[4.6rem] bg-gradient-to-tr from-primary-color via-primary-color to-white shadow-2xl shadow-white"></div>
											</div>
										</div>
									</div>
								</div>
								<div className="flex flex-col justify-center items-center xl:mt-8 py-8">
									<div
										className="h-1 rounded-full mt-4 w-[250px] bg-primary-color"
										data-aos="fade-left"
									></div>
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
									<div
										className="rounded-full h-1 w-[200px] bg-primary-color"
										data-aos="fade-right"
									></div>
								</div>
								<div
									className="flex flex-col justify-center items-center"
									data-aos="fade-in"
								>
									<div className="flex justify-center items-center py-5">
										<div className="w-[150px] lg:w-[200px] xl:w-[250px] xl:h-[300px] lg:h-[250px] rounded-md flex relative mr-4">
											<Image
												src={"/assets/images/bloombar.png"}
												alt="bloombar image"
												width={250}
												height={300}
												className="rounded-2xl"
											/>
											<div className="absolute bottom-2 md:right-[2.5rem] lg:right-14 xl:right-20 text-lg text-white font-semibold">
												<p>Bloom bar</p>
											</div>
										</div>
										<div className="w-[150px] lg:w-[200px] xl:w-[250px] xl:h-[300px] lg:h-[250px] rounded-md flex relative mr-4">
											<Image
												src={"/assets/images/eastend.png"}
												alt="eastend image"
												width={250}
												height={300}
												className="rounded-2xl"
											/>
											<div className="absolute bottom-2 md:right-[2.6rem] lg:right-16 xl:right-[5.5rem] text-white text-lg font-semibold">
												<p>East End</p>
											</div>
										</div>
										<div className="w-[150px] lg:w-[200px] xl:w-[250px] xl:h-[300px] lg:h-[250px] rounded-md flex relative mr-4">
											<Image
												src={"/assets/images/avenue.png"}
												alt="avenue image"
												width={250}
												height={300}
												className="rounded-2xl"
											/>
											<div className="absolute bottom-2 md:right-12 lg:right-[4.5rem] xl:right-[6rem] text-lg text-white font-semibold">
												<p>Avenue</p>
											</div>
										</div>
										<div className="w-[150px] lg:w-[200px] xl:w-[250px] xl:h-[300px] lg:h-[250px] rounded-md flex relative">
											<Image
												src={"/assets/images/scorch.png"}
												alt="scorch image"
												width={250}
												height={300}
												className="rounded-2xl"
											/>
											<div className="absolute bottom-2 md:right-12 text-lg lg:right-[4.5rem] xl:right-[5.5rem] text-white font-semibold">
												<p>Scorch</p>
											</div>
										</div>
									</div>
									<div
										className="rounded-full h-1 w-[400px] bg-primary-color my-8"
										data-aos="fade-left"
									></div>
								</div>
								<div data-aos="fade-up">
									<Footer />
								</div>
							</div>
						</div>
						<div className="px-4 py-5 font-NotoSerif block md:hidden">
							<div className="flex justify-center w-full">
								<div data-aos="fade-up">
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
									<div data-aos="fade-right">
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
								<div
									className="relative h-[330px] w-[270px]"
									data-aos="fade-in"
								>
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
								<h3
									className="text-3xl font-black text-secondary-color"
									data-aos="fade-right"
								>
									Our Vision
								</h3>
								<p
									className="text-gray-600 lg:w-3/5 md:w-11/12 text-base"
									data-aos="fade-right"
								>
									To be an African powerhouse in hospitality and entertainment
									across Africa.
								</p>
							</div>
							<div className="h-[300px]">
								<div className="flex justify-end absolute right-3">
									<div
										className="relative h-[250px] w-[210px]"
										data-aos="fade-in"
									>
										<div className="z-10 absolute top-2 -left-0">
											<Image
												src={"/assets/images/darknight.png"}
												alt="dark night image"
												width="210px"
												height="220px"
												className="rounded-2xl"
											/>
										</div>
										<div className="h-[80px] w-[100px] rounded-tl-2xl z-[1] absolute top-0 -left-2  opacity-30 bg-gradient-to-tr from-primary-color via-primary-color to-white shadow-2xl shadow-white"></div>
									</div>
								</div>
								<div className="flex justify-start absolute left-5 mt-20">
									<div
										className="relative h-[250px] w-[210px]"
										data-aos="fade-in"
									>
										<div className="z-10 absolute top-2 -left-0">
											<Image
												src={"/assets/images/barstools.png"}
												alt="barstools image"
												width="210px"
												height="220px"
												className="rounded-2xl"
											/>
										</div>
										<div className="h-[80px] w-[100px] rounded-tl-2xl z-[1] absolute top-0 -left-2  opacity-30 bg-gradient-to-tr from-primary-color via-primary-color to-white shadow-2xl shadow-white"></div>
									</div>
								</div>
							</div>
							<div className="text-gray-600 my-8">
								<h3
									className="text-3xl text-center font-black text-secondary-color mb-2"
									data-aos="fade-in"
								>
									Our Mission
								</h3>
								<p
									className="text-gray-600 text-center text-base"
									data-aos="fade-in"
								>
									To be the most professional hospitality establishments in
									Ghana with excellent service ambiance and an unbeatable
									experience.
								</p>
							</div>
							<div className="flex flex-col justify-center items-center py-4">
								<div className="h-1 rounded-full w-[200px] bg-primary-color"></div>
								<div
									className="flex flex-col py-5 justify-center items-center"
									data-aos="fade-in"
								>
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
								<div
									className="w-[200px] rounded-md flex relative"
									data-aos="fade-in"
								>
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
								<div
									className="w-[200px] rounded-md flex relative"
									data-aos="fade-right"
								>
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
								<div
									className="w-[200px] rounded-md flex relative"
									data-aos="fade-in"
								>
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
								<div
									className="w-[200px] rounded-md flex relative"
									data-aos="fade-up"
								>
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
						<div className="md:hidden block" data-aos="fade-in">
							<Footer />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
