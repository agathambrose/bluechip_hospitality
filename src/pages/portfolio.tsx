import Head from "next/head";
import Navbar from "../components/Navbar";

const Portfolio = () => {
	return (
		<div>
			<Head>
				<title>Bluechip - Home</title>
			</Head>
			<Navbar portfolio={"portfolio"} />
			<div className="font-NotoSerif">
				<div className="relative">
					<div className="flex object-fill w-full h-[600px] bg-gray-500 bg-portfolio-hero md:bg-portfolio-hero-md lg:bg-portfolio-hero-lg bg-no-repeat bg-cover justify-start relative"></div>
					<div className="text-white absolute bottom-20 md:left-24 left-10">
						<h1 className="font-black md:text-6xl text-4xl w-3/5">
							Blue Chip Portfolio
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

export default Portfolio;
