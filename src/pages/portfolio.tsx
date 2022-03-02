import Head from "next/head";
import Navbar from "../components/Navbar";
import Image from "next/image";
import Footer from "../components/Footer";

const Portfolio = () => {
	return (
		<div>
			<Head>
				<title>Bluechip - Portfolio</title>
			</Head>
			<Navbar portfolio={"portfolio"} />
			<div className="font-NotoSerif">
				<div>
					<div className="relative" data-aos="fade-up">
						<div className="flex w-full h-[600px] bg-gray-500 bg-portfolio-hero md:bg-portfolio-hero-md lg:bg-portfolio-hero-lg bg-no-repeat bg-cover justify-start relative"></div>
						<div className="text-white absolute bottom-20 md:left-24 left-10">
							<h1 className="font-black md:text-6xl text-4xl w-3/5">
								Blue Chip Portfolio
							</h1>
						</div>
					</div>
					<div className="absolute top-0 md:left-20 left-5">
						<div className="h-[550px] w-[220px] border-l border-b border-white "></div>
					</div>
				</div>
				<div>
					<div className="px-4 pt-4">
						<div className="md:hidden" data-aos="fade-in">
							<div className="relative my-8 px-5 md:px-0 lg:my-0 w-full flex justify-center h-[250px]">
								<div className="h-[250px] block md:hidden z-10 top-3 absolute">
									<Image
										src={"/assets/images/cocktail.png"}
										alt="cocktail image"
										width="320px"
										height="290px"
										className="rounded-2xl absolute z-10"
									/>
									<div className="h-[100px] w-[150px] rounded-tl-2xl z-[1] absolute -top-2 -left-2 opacity-30 bg-gradient-to-tr from-primary-color via-primary-color to-white shadow-2xl shadow-white"></div>
								</div>
							</div>
							<div className="flex flex-col space-y-2 justify-center px-4">
								<h3 className="text-3xl md:text-4xl text-left font-black text-secondary-color mt-10">
									Bloom Bar
								</h3>
								<p className="text-gray-600 md:text-lg text-base w-11/12">
									Bloom Bar Limited, incorporated in November 2016, is currently
									Blue Chip’s most established and successful brand since it
									started operations in 2017. Bloom Bar is an affordable luxury
									outdoor bar for individuals to meet with their friends and
									colleagues to get pre-game cocktails and start their nightlife
									entertainment. It has evolved over the years from being just a
									pre-game cocktail bar to also a space where corporate clients
									meet with their colleagues after working hours for meetings,
									food, beverages and entrainment. Bloom Bar has become known as
									the blueprint for premium feel to outdoor bars and best
									nightlife venue in Ghana. The space can fit up to 650
									customers comfortably and a maximum of 900 customers. Bloom
									Bar receives an average of 2,250 customers per week with each
									customer spending an average of GH¢125.
								</p>
							</div>
						</div>
						<div
							className="md:flex w-full justify-center items-center md:px-2 pt-4 hidden"
							data-aos="fade-in"
						>
							<div className="relative flex lg:justify-center mr-8">
								<div className="relative my-8 lg:my-0 lg:w-[400px] md:w-[350px] flex justify-center lg:h-[350px] md:h-[350px]">
									<div className="lg:h-[320px] lg:w-[400px] md:w-[300px] md:h[360px] z-10 top-3 absolute">
										<Image
											src={"/assets/images/cocktail.png"}
											alt="cocktail image"
											width="400px"
											height="380px"
											className="rounded-2xl absolute z-10"
										/>
										<div className="h-[100px] w-[150px] rounded-tl-2xl z-[1] absolute -top-2 -left-3 md:-left-2 opacity-30 bg-gradient-to-tr from-primary-color via-primary-color to-white shadow-2xl shadow-white"></div>
									</div>
								</div>
							</div>
							<div className="flex flex-col space-y-2 justify-start lg:w-4/6">
								<h3 className="text-3xl md:text-4xl font-black text-secondary-color">
									Bloom Bar
								</h3>
								<p className="text-gray-600 text-lg">
									Bloom Bar Limited, incorporated in November 2016, is currently
									Blue Chip’s most established and successful brand since it
									started operations in 2017. Bloom Bar is an affordable luxury
									outdoor bar for individuals to meet with their friends and
									colleagues to get pre-game cocktails and start their nightlife
									entertainment. It has evolved over the years from being just a
									pre-game cocktail bar to also a space where corporate clients
									meet with their colleagues after working hours for meetings,
									food, beverages and entrainment. Bloom Bar has become known as
									the blueprint for premium feel to outdoor bars and best
									nightlife venue in Ghana. The space can fit up to 650
									customers comfortably and a maximum of 900 customers. Bloom
									Bar receives an average of 2,250 customers per week with each
									customer spending an average of GH¢125.
								</p>
							</div>
						</div>
					</div>

					<div className="px-4 md:hidden block">
						<div className="md:hidden" data-aos="fade-in">
							<div className="relative my-8 px-5 md:px-0 lg:my-0 w-full flex justify-center h-[290px]">
								<div className="h-[600px] block md:hidden z-10 top-3 absolute">
									<Image
										src={"/assets/images/foodbowl.png"}
										alt="foodbowl image"
										width="310px"
										height="290px"
										className="rounded-2xl absolute z-10"
									/>
									<div className="h-[100px] w-[150px] rounded-tl-2xl z-[1] absolute -top-2 -left-2 opacity-30 bg-gradient-to-tr from-primary-color via-primary-color to-white shadow-2xl shadow-white"></div>
								</div>
							</div>
							<div className="flex flex-col space-y-2 justify-center px-4">
								<h3 className="text-3xl md:text-4xl font-black text-secondary-color">
									East End
								</h3>
								<p className="text-gray-600 md:text-lg text-base w-11/12">
									East End Hospitality Limited, incorporated in September 2020,
									is a bistro restaurant in Ghana and the second establishment
									of Blue Chip. East End bistro pairs cuisine and a unique
									ambiance that does not only represent the modern Ghanaian but
									also a highlights the Ghanaian culture that will make you
									embrace all your traditions as you dine. East Ends’ vision is
									to be one of the best restaurants in the world hence striving
									for the world class attitude. East End seeks to provide its
									customers with an affordable casual and comfortable experience
									at a restaurant whiles making memories. East End has a diverse
									client base, ranging between the ages of 16 to 55 years old.
									The East End space has a capacity of 180 customers. East End
									receives an average of 560 customers per week with each
									customer spending an average of GH₵ 125.
								</p>
							</div>
						</div>
					</div>
					<div
						className="px-4 md:block hidden py-12 relative"
						data-aos="fade-right"
					>
						<div className="md:flex w-full justify-center items-center lg:px-10 md:px-3 pt-4 hidden">
							<div className="flex flex-col mr-8 space-y-2 justify-start lg:w-4/6">
								<h3 className="text-3xl md:text-4xl font-black text-secondary-color">
									East End
								</h3>
								<p className="text-gray-600 text-lg">
									East End Hospitality Limited, incorporated in September 2020,
									is a bistro restaurant in Ghana and the second establishment
									of Blue Chip. East End bistro pairs cuisine and a unique
									ambiance that does not only represent the modern Ghanaian but
									also a highlights the Ghanaian culture that will make you
									embrace all your traditions as you dine. East Ends’ vision is
									to be one of the best restaurants in the world hence striving
									for the world class attitude. East End seeks to provide its
									customers with an affordable casual and comfortable experience
									at a restaurant whiles making memories. East End has a diverse
									client base, ranging between the ages of 16 to 55 years old.
									The East End space has a capacity of 180 customers. East End
									receives an average of 560 customers per week with each
									customer spending an average of GH₵ 125.
								</p>
							</div>
							<div className="relative flex lg:justify-center">
								<div className="relative my-8 lg:my-0 lg:w-[400px] md:w-[350px] flex justify-center lg:h-[400px] md:h-[350px]">
									<div className="lg:h-[400px] lg:w-[400px] md:w-[350px] md:h[380px] z-10 top-3 absolute">
										<Image
											src={"/assets/images/foodbowl.png"}
											alt="foodbowl image"
											width="400px"
											height="380px"
											className="rounded-2xl absolute z-10"
										/>
										<div className="h-[100px] w-[150px] rounded-tl-3xl z-[1] absolute -top-2 md:-left-2 lg:-left-2 opacity-30 bg-gradient-to-tr from-primary-color via-primary-color to-white shadow-2xl shadow-white"></div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="px-4 pt-4">
						<div className="md:hidden" data-aos="fade-up">
							<div className="relative my-8 px-5 md:px-0 lg:my-0 w-full flex justify-center h-[250px]">
								<div className="h-[250px] block md:hidden z-10 top-3 absolute">
									<Image
										src={"/assets/images/blueavenue.png"}
										alt="blueavenue image"
										width="310px"
										height="290px"
										className="rounded-2xl absolute z-10"
									/>
									<div className="h-[100px] w-[150px] rounded-tl-2xl z-[1] absolute -top-2 -left-2 opacity-30 bg-gradient-to-tr from-primary-color via-primary-color to-white shadow-2xl shadow-white"></div>
								</div>
							</div>
							<div className="flex flex-col space-y-2 justify-center px-4">
								<h3 className="text-3xl mt-9 md:text-4xl font-black text-secondary-color">
									Avenue
								</h3>
								<p className="text-gray-600 md:text-lg text-base w-11/12">
									Avenue Entertainment Centre Limited, incorporated in March
									2020, is a live entertainment restaurant/bar and will be Blue
									Chip’s third establishment. The Avenue brand focuses on
									selling entertainment with a bar, food service that centres on
									appetizers, and games to provide its customers with a vibe
									dining experience. Through our exciting drinks and food menu,
									Avenue will fuse other activities with the bar to engage
									guests such as live musicals, stand-up comedy, spoken word,
									magic and circus shows. Entertainment activities will also be
									streamed live on YouTube. Avenue will cater to the middle- and
									upper-class section of the Ghanaian society between the ages
									of 16 and 55 years. The Avenue Space occupies two floors can
									comfortably accommodate up to 800 guests.
								</p>
							</div>
						</div>
						<div
							className="md:flex w-full justify-center items-center md:px-2 hidden"
							data-aos="fade-up"
						>
							<div className="relative flex lg:justify-center mr-8">
								<div className="relative my-8 lg:my-0 lg:w-[400px] md:w-[350px] flex justify-center lg:h-[350px] md:h-[350px]">
									<div className="lg:h-[320px] lg:w-[400px] md:w-[350px] md:h[360px] z-10 top-3 absolute">
										<Image
											src={"/assets/images/blueavenue.png"}
											alt="blueavenue image"
											width="400px"
											height="350px"
											className="rounded-2xl absolute z-10"
										/>
										<div className="h-[100px] w-[150px] rounded-tl-2xl z-[1] absolute -top-2 -left-3 md:-left-2 opacity-30 bg-gradient-to-tr from-primary-color via-primary-color to-white shadow-2xl shadow-white"></div>
									</div>
								</div>
							</div>
							<div className="flex flex-col space-y-2 justify-start lg:w-4/6">
								<h3 className="text-3xl md:text-4xl font-black text-secondary-color">
									Avenue
								</h3>
								<p className="text-gray-600 text-lg">
									Avenue Entertainment Centre Limited, incorporated in March
									2020, is a live entertainment restaurant/bar and will be Blue
									Chip’s third establishment. The Avenue brand focuses on
									selling entertainment with a bar, food service that centres on
									appetizers, and games to provide its customers with a vibe
									dining experience. Through our exciting drinks and food menu,
									Avenue will fuse other activities with the bar to engage
									guests such as live musicals, stand-up comedy, spoken word,
									magic and circus shows. Entertainment activities will also be
									streamed live on YouTube. Avenue will cater to the middle- and
									upper-class section of the Ghanaian society between the ages
									of 16 and 55 years. The Avenue Space occupies two floors can
									comfortably accommodate up to 800 guests.
								</p>
							</div>
						</div>
					</div>
					<div className="px-4 md:hidden block">
						<div className="md:hidden mb-8" data-aos="fade-down">
							<div className="relative my-8 px-5 md:px-0 lg:my-0 w-full flex justify-center h-[290px]">
								<div className="h-[300px] w-[500px] md:block hidden z-10 top-3 absolute">
									<Image
										src={"/assets/images/pyramid.png"}
										alt="pyramid image"
										width="500px"
										height="300px"
										className="rounded-2xl absolute z-10"
									/>
									<div className="h-[100px] w-[150px] rounded-tl-2xl z-[1] absolute -top-2 -left-3 opacity-30 bg-gradient-to-tr from-primary-color via-primary-color to-white shadow-2xl shadow-white"></div>
								</div>
								<div className="h-[600px] block md:hidden z-10 top-3 absolute">
									<Image
										src={"/assets/images/mocktail.png"}
										alt="mocktail image"
										width="310px"
										height="290px"
										className="rounded-2xl absolute z-10"
									/>
									<div className="h-[100px] w-[150px] rounded-tl-2xl z-[1] absolute -top-2 -left-2 opacity-30 bg-gradient-to-tr from-primary-color via-primary-color to-white shadow-2xl shadow-white"></div>
								</div>
							</div>
							<div className="flex flex-col space-y-2 justify-center px-4">
								<h3 className="text-3xl md:text-4xl font-black text-secondary-color">
									Scorch
								</h3>
								<p className="text-gray-600 md:text-lg text-base w-11/12">
									Scorch Restaurant Limited, incorporated in March 2020, is a
									rodizio concept restaurant and will be Blue Chip’s forth
									establishment. Scorch is a rodizio concept restaurant with a
									local twist to meet the needs of Ghanaians. Scotch will serve
									a blend of fine dining meals in a relaxed and elegant
									environment. It seeks to bring its customers an unforgettable
									premium experience. Scorch will cater to the middle- and
									upper-class section of the Ghanaian society between the ages
									of 16 to 55 years old with our services. The restaurant
									occupies one floor and can seat up to 450 customers.
								</p>
							</div>
						</div>
					</div>
					<div className="px-2 md:block hidden my-16">
						<div
							className="md:flex w-full justify-center items-center lg:px-10 md:px-3 pt-4 hidden"
							data-aos="fade-right-up"
						>
							<div className="flex flex-col mr-8 space-y-2 justify-start lg:w-4/6">
								<h3 className="text-3xl md:text-4xl font-black text-secondary-color">
									Scorch
								</h3>
								<p className="text-gray-600 text-lg">
									Scorch Restaurant Limited, incorporated in March 2020, is a
									rodizio concept restaurant and will be Blue Chip’s forth
									establishment. Scorch is a rodizio concept restaurant with a
									local twist to meet the needs of Ghanaians. Scotch will serve
									a blend of fine dining meals in a relaxed and elegant
									environment. It seeks to bring its customers an unforgettable
									premium experience. Scorch will cater to the middle- and
									upper-class section of the Ghanaian society between the ages
									of 16 to 55 years old with our services. The restaurant
									occupies one floor and can seat up to 450 customers.
								</p>
							</div>
							<div className="relative flex lg:justify-center">
								<div className="relative my-8 lg:my-0 lg:w-[400px] md:w-[350px] flex justify-center lg:h-[400px] md:h-[350px]">
									<div className="lg:h-[400px] lg:w-[400px] md:w-[350px] md:h[380px] z-10 top-3 absolute">
										<Image
											src={"/assets/images/mocktail.png"}
											alt="mocktail image"
											width="400px"
											height="380px"
											className="rounded-2xl absolute z-10"
										/>
										<div className="h-[100px] w-[150px] rounded-tl-3xl z-[1] absolute -top-2 md:-left-2 lg:-left-2 opacity-30 bg-gradient-to-tr from-primary-color via-primary-color to-white shadow-2xl shadow-white"></div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div data-aos="fade-up">
					<Footer />
				</div>
			</div>
		</div>
	);
};

export default Portfolio;
