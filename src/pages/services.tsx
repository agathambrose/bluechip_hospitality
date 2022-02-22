import Head from "next/head";
import Image from "next/image";
import Navbar from "../components/Navbar";

const Services = () => {
	return (
		<div>
			<Head>
				<title>Bluechip - Services</title>
			</Head>
			<Navbar services={"services"} />
			<div className="font-NotoSerif">
				<div className="relative">
					<div className="flex object-fill w-full h-[500px] bg-gray-500 bg-services-hero bg-no-repeat bg-cover justify-start relative"></div>
					<div className="text-white absolute bottom-20 md:left-24 left-10">
						<h1 className="font-black md:text-6xl text-4xl w-3/5">
							Blue Chip Services
						</h1>
					</div>
				</div>
				<div className="absolute top-0 md:left-20 left-5">
					<div className="h-[430px] w-[220px] border-l border-b border-white "></div>
				</div>
			</div>
		</div>
	);
};

export default Services;
