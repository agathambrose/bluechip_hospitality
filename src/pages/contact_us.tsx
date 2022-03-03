import Head from "next/head";
import Link from "next/link";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const ContactUS = () => {
	return (
		<div>
			<Head>
				<title>Bluechip - Contact Us</title>
			</Head>
			<Navbar contact_us={"contact us"} />
			<div className="font-NotoSerif">
				<div className="relative" data-aos="fade-up">
					<div
						className="flex object-fill w-full h-[500px] bg-gray-500 md:bg-contact-hero-md bg-contact-hero lg:bg-contact-hero-lg bg-no-repeat bg-cover justify-start relative"
						data-aos="fade-in"
					></div>
					<div className="text-white absolute bottom-40 lg:bottom-48 md:left-16 left-10">
						<h1 className="font-black md:text-6xl lg:text-7xl text-4xl w-full">
							Contact Us
						</h1>
					</div>
					<div className="absolute top-0 md:left-10 left-5">
						<div className="h-[350px] lg:h-[320px] w-[220px] border-l border-b border-white"></div>
					</div>
					<div className="absolute bottom-5 md:left-10 left-5">
						<div className="w-[200px] h-1 rounded-md bg-gray-200"></div>
						<p className="text-white text-sm md:text-base lg:text-lg w-9/12 md:w-2/5 lg:w-2/6 my-3">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis
							nibh mi, et ipsum mattis dui. Scelerisque et iaculis mattis quis
							aliquet eget.{" "}
						</p>
						<div className="w-[150px] h-1 rounded-md bg-gray-200"></div>
					</div>
				</div>
				<div>
					<div
						className="container px-5 py-24 flex sm:flex-nowrap flex-wrap justify-center items-center"
						data-aos="fade-in"
					>
						<div className="lg:w-2/4 shadow-md border border-gray-800 bg-gray-500 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-center relative">
							<iframe
								title="map"
								className="absolute inset-0"
								frameBorder="0"
								marginHeight={0}
								marginWidth={0}
								scrolling="no"
								src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3971.083765959774!2d-0.1825589861793951!3d5.554600635210417!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf907bb3a06cbb%3A0x744dd672c8729bc3!2sTroas%20St%2C%20Accra!5e0!3m2!1sen!2sgh!4v1645998463788!5m2!1sen!2sgh"
								width="600"
								height="450"
								allowFullScreen={false}
								loading="lazy"
								style={{ filter: "grayscale(1) contrast(1.2) opacity(0.16)" }}
							></iframe>
							<div className="bg-secondary-color relative flex flex-wrap py-6 rounded shadow-md">
								<div className="lg:w-1/2 px-6">
									<h2 className="title-font font-semibold text-white tracking-widest text-xs">
										ADDRESS
									</h2>
									<Link href={"https://goo.gl/maps/5SecDfNjXbr4MNi6A"}>
										<a
											target={"_blank"}
											className="hover:text-white text-gray-400"
										>
											<p className="mt-1 text-gray-400 hover:text-white">
												House Number F330/2, Troas Street, Near Simbins
												Furniture, Osu, Accra, Ghana.
											</p>
										</a>
									</Link>
								</div>
								<div className="lg:w-2/3 px-6 mt-4 lg:mt-0">
									<h2 className="title-font font-semibold text-white tracking-widest text-xs">
										EMAIL
									</h2>
									<a
										href="mailto:kofi.maafo@bloombargh.com"
										className="text-pink-400 leading-relaxed"
									>
										kofi.maafo@bloombargh.com
									</a>
									<h2 className="title-font font-semibold text-white tracking-widest text-xs mt-4">
										PHONE
									</h2>
									<p className="leading-relaxed text-gray-300">
										+233 55 249 8524
									</p>
								</div>
							</div>
						</div>
					</div>
					<div data-aos="fade-up">
						<Footer />
					</div>
				</div>
			</div>
		</div>
	);
};

export default ContactUS;
