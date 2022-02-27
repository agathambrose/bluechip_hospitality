import Head from "next/head";
import Navbar from "../components/Navbar";

const Team = () => {
	return (
		<div>
			<Head>
				<title>Bluechip - Team</title>
			</Head>
			<Navbar team={"team"} />
			<div className="font-NotoSerif">
				<div className="relative">
					<div className="flex object-fill w-full h-[500px] bg-gray-500 bg-team-hero md:bg-team-hero-md lg:bg-team-hero-lg bg-no-repeat bg-cover justify-start relative"></div>
					<div className="text-white absolute bottom-0 left-0 top-0 right-0">
						<h1 className="font-black md:text-6xl text-4xl w-3/5">
							Team
						</h1>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Team;
