import Head from "next/head";
import Navbar from "../components/Navbar";

const Services = () => {
	return (
		<div>
			<Head>
				<title>Bluechip - Home</title>
			</Head>
			<Navbar services={"services"} />
		</div>
	);
};

export default Services;
