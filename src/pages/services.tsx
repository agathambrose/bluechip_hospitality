import Head from "next/head";
import Image from "next/image";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Services = () => {
	return (
		<div>
			<Head>
				<title>Bluechip - Services</title>
			</Head>
			<Navbar services={"services"} />
			<div className="font-NotoSerif">
				<div>
					<div className="relative" data-aos="fade-up">
						<div className="flex object-fill w-full h-[600px] bg-gray-500 bg-services-hero md:bg-services-hero-md lg:bg-services-hero-lg bg-no-repeat bg-cover justify-start relative"></div>
						<div className="text-white absolute bottom-20 md:left-24 left-10">
							<h1 className="font-black md:text-6xl text-4xl w-3/5">
								Blue Chip Services
							</h1>
						</div>
					</div>
					<div className="absolute top-0 md:left-20 left-5">
						<div className="h-[530px] w-[220px] border-l border-b border-white "></div>
					</div>
				</div>
				<div className="px-4 pt-4">
					<div className="md:hidden" data-aos="fade-in">
						<div className="relative my-8 px-5 md:px-0 lg:my-0 w-full flex justify-center h-[330px]">
							<div className="md:hidden h-[1793px] w-[1px] bg-gray-400 top-24 absolute left-4"></div>
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
							<div className="h-[600px] block md:hidden top-0 absolute">
								<Image
									src={"/assets/images/pyramid.png"}
									alt="pyramid image"
									width="400px"
									height="350px"
									className="rounded-2xl absolute z-10"
								/>
								<div className="h-[100px] w-[150px] rounded-tl-2xl z-[1] absolute -top-2 -left-2 opacity-30 bg-gradient-to-tr from-primary-color via-primary-color to-white shadow-2xl shadow-white"></div>
							</div>
						</div>
						<div className="flex flex-col items-center space-y-2 justify-center">
							<h3 className="text-3xl md:text-4xl font-black text-secondary-color">
								Conceptualization
							</h3>
							<p className="text-gray-600 w-4/5 md:text-lg text-base">
								Blue Chip Hospitality has an experienced team that develops
								hospitality concepts with emphasis on bar and restaurant. With
								our service on developing concepts, we engage our clients to
								understand their idea of business direction, market target,
								experience to be created visually, audibly, emotionally and
								tangibly. Through this understanding we can help bring concept
								to life engaging all the five senses and develop business
								strategies .
							</p>
						</div>
					</div>
					<div className="md:flex w-full justify-center items-center lg:px-10 md:px-3 pt-4 hidden relative">
						<div
							className="h-[600px] w-[1px] bg-gray-400 bottom-5 md:top-20 lg:-top-6 absolute md:right-5 lg:right-10"
							data-aos="fade-in"
						></div>
						<div
							className="relative flex lg:justify-center mr-8"
							data-aos="fade-left"
						>
							<div className="relative my-8 lg:my-0 lg:w-[400px] md:w-[350px] flex justify-center lg:h-[400px] md:h-[350px]">
								<div className="lg:h-[400px] lg:w-[400px] md:w-[350px] md:h[380px] z-10 top-3 absolute">
									<Image
										src={"/assets/images/pyramid.png"}
										alt="pyramid image"
										width="400px"
										height="380px"
										className="rounded-2xl absolute z-10"
									/>
									<div className="h-[100px] w-[150px] rounded-tl-2xl z-[1] absolute -top-2 -left-3 md:left-0 opacity-30 bg-gradient-to-tr from-primary-color via-primary-color to-white shadow-2xl shadow-white"></div>
								</div>
							</div>
						</div>
						<div
							className="flex flex-col space-y-2 justify-start lg:w-4/6 mr-2 mt-3"
							data-aos="fade-in"
						>
							<h3 className="text-3xl md:text-4xl font-black text-secondary-color">
								Conceptualization
							</h3>
							<p className="text-gray-600 text-lg">
								Blue Chip Hospitality has an experienced team that develops
								hospitality concepts with emphasis on bar and restaurant. With
								our service on developing concepts, we engage our clients to
								understand their idea of business direction, market target,
								experience to be created visually, audibly, emotionally and
								tangibly. Through this understanding we can help bring concept
								to life engaging all the five senses and develop business
								strategies .
							</p>
						</div>
					</div>
				</div>
				<div className="px-4 md:hidden block">
					<div className="md:hidden" data-aos="fade-in">
						<div className="relative my-8 px-5 md:px-0 lg:my-0 w-full flex justify-center h-[290px]">
							<div className="h-[600px] block md:hidden top-3 absolute">
								<Image
									src={"/assets/images/skyscrapers.png"}
									alt="skyscrapers image"
									width="350px"
									height="300px"
									className="rounded-2xl absolute z-10"
								/>
								<div className="h-[100px] w-[150px] rounded-tl-2xl z-[1] absolute -top-2 -left-2 opacity-30 bg-gradient-to-tr from-primary-color via-primary-color to-white shadow-2xl shadow-white"></div>
							</div>
						</div>
						<div
							className="flex flex-col items-center space-y-2 justify-center"
							data-aos="fade-up"
						>
							<h3 className="text-3xl md:text-4xl font-black text-secondary-color mt-3">
								Construction
							</h3>
							<p className="text-gray-600 w-5/6 md:text-lg text-base">
								We have a team of builders and interior decorators to help make
								your setup more fluid. Building a restaurant and bar should be
								handled by a team that understand hospitality spatial design.
								How the space is designed to make operations efficient and yet
								visually appealing to guests is very crucial in modern
								hospitality. This type of design and construction is detailed
								with measurements and precision which should be handled but
								hospitality experts. Blue Chip Hospitality can help meet your
								construction and interior decor needs.
							</p>
						</div>
					</div>
				</div>
				<div className="px-4 md:block hidden" data-aos="fade-in">
					<div className="md:flex w-full justify-center items-center lg:px-10 md:px-3 pt-4 hidden relative">
						<div className="h-[1815px] w-[1px] bg-gray-400 bottom-5 md:top-20 lg:-top-6 absolute right-0 md:left-5 lg:left-14"></div>
						<div className="flex flex-col ml-6 mr-8 space-y-2 justify-start lg:w-3/6">
							<h3 className="text-3xl md:text-4xl font-black text-secondary-color">
								Construction
							</h3>
							<p className="text-gray-600 text-lg">
								We have a team of builders and interior decorators to help make
								your setup more fluid. Building a restaurant and bar should be
								handled by a team that understand hospitality spatial design.
								How the space is designed to make operations efficient and yet
								visually appealing to guests is very crucial in modern
								hospitality. This type of design and construction is detailed
								with measurements and precision which should be handled but
								hospitality experts. Blue Chip Hospitality can help meet your
								construction and interior decor needs.
							</p>
						</div>
						<div
							className="relative flex lg:justify-center"
							data-aos="fade-up-right"
						>
							<div className="relative my-8 lg:my-0 lg:w-[400px] md:w-[350px] flex justify-center lg:h-[400px] md:h-[350px]">
								<div className="lg:h-[400px] lg:w-[400px] md:w-[350px] md:h[380px] z-10 top-3 absolute">
									<Image
										src={"/assets/images/skyscrapers.png"}
										alt="skyscrapers image"
										width="400px"
										height="380px"
										className="rounded-2xl absolute z-10"
									/>
									<div className="h-[100px] w-[150px] rounded-tl-3xl z-[1] absolute -top-0 md:-left-1 lg:-left-2 opacity-30 bg-gradient-to-tr from-primary-color via-primary-color to-white shadow-2xl shadow-white"></div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="px-4 py-2 md:py-4 my-8 bg-blue-700">
					<div className="md:hidden mobile" data-aos="fade-in">
						<div className="relative px-5 md:px-0 lg:my-0 w-full flex justify-center h-[280px]">
							<div className="h-[400px] w-[500px] md:block hidden z-10 top-3 absolute">
								<Image
									src={"/assets/images/pyramid.png"}
									alt="pyramid image"
									width="500px"
									height="400px"
									className="rounded-2xl absolute z-10"
								/>
								<div className="h-[100px] w-[150px] rounded-tl-2xl z-[1] absolute -top-2 -left-3 opacity-30 bg-gradient-to-tr from-primary-color via-primary-color to-white shadow-2xl shadow-white"></div>
							</div>
							<div className="h-[520px] block md:hidden z-10 top-3 absolute">
								<Image
									src={"/assets/images/foodplate.png"}
									alt="food plate image"
									width="380px"
									height="280px"
									className="rounded-2xl absolute z-10"
								/>
								<div className="h-[100px] w-[150px] rounded-tl-2xl z-[1] absolute -top-2 -left-2 bg-gradient-to-tr from-primary-color via-primary-color to-white"></div>
							</div>
						</div>
						<div className="flex flex-col items-center space-y-2 justify-center mt-6">
							<h3 className="text-3xl md:text-4xl font-black text-white">
								Menu Development
							</h3>
							<p className="text-white w-5/6 md:text-lg text-base">
								Menu development is the key to the success for your restaurant
								and bar. This is the main product for revenue generation. Food
								and drinks have to be developed by professionals with recipes
								documents for restaurant owners. The type of food and drinks to
								be served influences a number of things for the restaurant. This
								includes, the type of bar station, glassware, bar equipment,
								plates for restaurant, kitchen equipment (heavy and small
								equipment) and kitchen setup.
							</p>
						</div>
					</div>
					<div
						className="md:flex w-full justify-center items-center lg:px-10 md:px-3 pt-4 hidden tablet-desktop"
						data-aos="fade-down-left"
					>
						<div className="relative flex lg:justify-center mr-8">
							<div className="relative my-8 lg:my-0 lg:w-[400px] md:w-[350px] flex justify-center lg:h-[400px] md:h-[350px]">
								<div className="lg:h-[400px] lg:w-[400px] md:w-[350px] md:h[380px] z-10 top-3 absolute">
									<Image
										src={"/assets/images/foodplate.png"}
										alt="food plate image"
										width="400px"
										height="380px"
										className="rounded-2xl absolute z-10"
									/>
									<div className="h-[100px] w-[150px] rounded-tl-2xl z-[1] absolute top-3 md:top-4 lg:-top-2 md:-left-2 bg-gradient-to-tr from-primary-color via-primary-color to-white shadow-white"></div>
								</div>
							</div>
						</div>
						<div
							className="flex flex-col space-y-2 justify-start lg:w-5/6"
							data-aos="fade-in"
						>
							<h3 className="text-3xl md:text-4xl font-black text-white">
								Menu Development
							</h3>
							<p className="text-white text-lg">
								Menu development is the key to the success for your restaurant
								and bar. This is the main product for revenue generation. Food
								and drinks have to be developed by professionals with recipes
								documents for restaurant owners. The type of food and drinks to
								be served influences a number of things for the restaurant. This
								includes, the type of bar station, glassware, bar equipment,
								plates for restaurant, kitchen equipment (heavy and small
								equipment) and kitchen setup.
							</p>
						</div>
					</div>
				</div>
				<div className="px-4 md:hidden block" data-aos="fade-down">
					<div className="md:hidden relative">
						<div className="md:hidden h-[1680px] w-[1px] bg-gray-400 top-24 absolute left-4"></div>
						<div className="relative my-8 px-5 md:px-0 lg:my-0 w-full flex justify-center h-[290px]">
							<div className="h-[550px] block md:hidden z-10 top-3 absolute">
								<Image
									src={"/assets/images/writingman.png"}
									alt="writing man image"
									width="380px"
									height="300px"
									className="rounded-2xl absolute z-10"
								/>
								<div className="h-[100px] w-[150px] rounded-tl-2xl z-[1] absolute -top-2 -left-2 opacity-30 bg-gradient-to-tr from-primary-color via-primary-color to-white shadow-2xl shadow-white"></div>
							</div>
						</div>
						<div
							className="flex flex-col items-center space-y-2 justify-center"
							data-aos="fade-up"
						>
							<h3 className="text-3xl md:text-4xl font-black text-secondary-color">
								Hiring and Training
							</h3>
							<p className="text-gray-600 w-5/6 md:text-lg text-base">
								Blue Chip Hospitality has an experienced team that develops
								hospitality concepts with emphasis on bar and restaurant. With
								our service on developing concepts, we engage our clients to
								understand their idea of business direction, market target,
								experience to be created visually, audibly, emotionally and
								tangibly. Through this understanding we can help bring concept
								to life engaging all the five senses and develop business
								strategies .
							</p>
						</div>
					</div>
				</div>
				<div className="px-4 md:block hidden" data-aos="fade-in">
					<div
						className="md:flex w-full justify-center items-center lg:px-10 md:px-3 pt-4 hidden"
						data-aos="fade-left"
					>
						<div className="flex flex-col ml-8 mr-8 space-y-2 justify-start lg:w-4/6">
							<h3 className="text-3xl md:text-4xl font-black text-secondary-color">
								Hiring and Training
							</h3>
							<p className="text-gray-600 text-lg">
								Blue Chip Hospitality has an experienced team that develops
								hospitality concepts with emphasis on bar and restaurant. With
								our service on developing concepts, we engage our clients to
								understand their idea of business direction, market target,
								experience to be created visually, audibly, emotionally and
								tangibly. Through this understanding we can help bring concept
								to life engaging all the five senses and develop business
								strategies .
							</p>
						</div>
						<div
							className="relative flex lg:justify-center"
							data-aos="fade-right"
						>
							<div className="relative my-8 lg:my-0 lg:w-[400px] md:w-[350px] flex justify-center lg:h-[400px] md:h-[350px]">
								<div className="lg:h-[400px] lg:w-[400px] md:w-[350px] md:h[380px] z-10 top-3 absolute">
									<Image
										src={"/assets/images/writingman.png"}
										alt="writing man image"
										width="400px"
										height="380px"
										className="rounded-2xl absolute z-10"
									/>
									<div className="h-[100px] w-[150px] rounded-tl-3xl z-[1] absolute md:-top-2 lg:-top-2 md:-left-2 lg:-left-2 opacity-30 bg-gradient-to-tr from-primary-color via-primary-color to-white shadow-2xl shadow-white"></div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="px-4 py-4">
					<div className="md:hidden" data-aos="fade-in">
						<div className="relative my-8 px-5 md:px-0 lg:my-0 w-full flex justify-center h-[280px]">
							<div className="h-[600px] block md:hidden z-10 top-3 absolute">
								<Image
									src={"/assets/images/brownchairs.png"}
									alt="brown chairs image"
									width="400px"
									height="300px"
									className="rounded-2xl absolute z-10"
								/>
								<div className="h-[100px] w-[150px] rounded-tl-2xl z-[1] absolute -top-2 -left-2 opacity-30 bg-gradient-to-tr from-primary-color via-primary-color to-white shadow-2xl shadow-white"></div>
							</div>
						</div>
						<div
							className="flex flex-col items-center space-y-2 justify-center"
							data-aos="fade-up"
						>
							<h3 className="text-3xl mt-4 md:text-4xl font-black text-secondary-color">
								Operations
							</h3>
							<p className="text-gray-600 w-5/6 md:text-lg text-base">
								Blue Chip provides structures, tools, and systems to run the
								entire operational line from Front-of-House to Back-of-House.
								There are a lot of parts in motion when running a restaurant or
								bar. Each part is extremely essential for the success of the
								other and for the business as a whole. There are two main parts,
								namely Front of House (FOH), which includes waiters, bartenders,
								bar managers, barbacks, supervisors, floor managers, food
								runners and cashiers. Back-of-House (BOH): Back-of-House staff
								includes kitchen offices, storage rooms, chef, procurement,
								accountants, etc.
							</p>
						</div>
					</div>
					<div
						className="md:flex w-full justify-center items-center lg:px-10 md:px-3 pt-4 hidden"
						data-aos="fade-in"
					>
						<div className="relative flex lg:justify-center mr-8">
							<div
								className="relative my-8 lg:my-0 lg:w-[400px] md:w-[350px] flex justify-center lg:h-[400px] md:h-[350px]"
								data-aos="fade-down-right"
							>
								<div className="lg:h-[400px] lg:w-[400px] md:w-[350px] md:h[380px] z-10 top-3 absolute">
									<Image
										src={"/assets/images/brownchairs.png"}
										alt="brown chairs image"
										width="400px"
										height="380px"
										className="rounded-2xl absolute z-10"
									/>
									<div className="h-[100px] w-[150px] rounded-tl-2xl z-[1] absolute md:-top-2 lg:-top-2 md:-left-2 lg:-left-2 opacity-30 bg-gradient-to-tr from-primary-color via-primary-color to-white shadow-2xl shadow-white"></div>
								</div>
							</div>
						</div>
						<div
							className="flex flex-col space-y-2 justify-start lg:w-5/6"
							data-aos="fade-up-left"
						>
							<h3 className="text-3xl md:text-4xl font-black text-secondary-color">
								Operations
							</h3>
							<p className="text-gray-600 text-lg">
								Blue Chip provides structures, tools, and systems to run the
								entire operational line from Front-of-House to Back-of-House.
								There are a lot of parts in motion when running a restaurant or
								bar. Each part is extremely essential for the success of the
								other and for the business as a whole. There are two main parts,
								namely Front of House (FOH), which includes waiters, bartenders,
								bar managers, barbacks, supervisors, floor managers, food
								runners and cashiers. Back-of-House (BOH): Back-of-House staff
								includes kitchen offices, storage rooms, chef, procurement,
								accountants, etc.
							</p>
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

export default Services;
