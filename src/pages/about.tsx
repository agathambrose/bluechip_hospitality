import Head from "next/head";
import Navbar from "../components/Navbar"

const About = () => {
  return (
		<div>
			<Head>
				<title>Bluechip - About</title>
			</Head>
			<Navbar about={"about"} />
		</div>
	);
}

export default About