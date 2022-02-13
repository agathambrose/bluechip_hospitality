import Head from "next/head";
import Image from "next/image";
import Navbar from "../components/Navbar";

const About = () => {
	return (
		<div>
			<Head>
				<title>Bluechip - About</title>
			</Head>
			<Navbar about={"about"} />
		</div>
	);
};

export default About