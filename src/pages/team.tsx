import Head from "next/head";
import Navbar from "../components/Navbar";

const Team = () => {
	return (
		<div>
			<Head>
				<title>Bluechip - Home</title>
			</Head>
			<Navbar team={"team"} />
		</div>
	);
};

export default Team;
