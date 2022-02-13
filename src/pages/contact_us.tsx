import Head from "next/head";
import Navbar from "../components/Navbar";

const ContactUS = () => {
	return (
		<div>
			<Head>
				<title>Bluechip - Home</title>
			</Head>
			<Navbar contact_us={"contact us"} />
		</div>
	);
};

export default ContactUS;
