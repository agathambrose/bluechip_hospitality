import Head from "next/head";
import Navbar from "../components/Navbar";

const Portfolio = () => {
	return (
		<div>
			<Head>
				<title>Bluechip - Home</title>
			</Head>
			<Navbar portfolio={"portfolio"} />
		</div>
	);
};

export default Portfolio;
