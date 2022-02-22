import Head from "next/head";
import Navbar from "../components/Navbar";

const ContactUS = () => {
	return (
		<div>
			<Head>
				<title>Bluechip - Home</title>
			</Head>
			<Navbar contact_us={"contact us"} />
			<div className="font-NotoSerif">
				<div className="relative">
					<div className="flex object-fill w-full h-[500px] bg-gray-500 md:bg-contact-hero-md bg-contact-hero lg:bg-contact-hero-lg bg-no-repeat bg-cover justify-start relative"></div>
					<div className="text-white absolute bottom-40 md:left-16 left-10">
						<h1 className="font-black md:text-6xl text-4xl w-full">
							Contact Us
						</h1>
					</div>
					<div className="absolute top-0 md:left-10 left-5">
						<div className="h-[350px] w-[220px] border-l border-b border-white"></div>
					</div>
					<div className="absolute bottom-5 md:left-10 left-5">
						<div className="w-[200px] h-1 rounded-md bg-gray-200"></div>
						<p className="text-white text-sm w-4/5 md:w-3/5 lg:w-2/6 my-3">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis
							nibh mi, et ipsum mattis dui. Scelerisque et iaculis mattis quis
							aliquet eget.{" "}
						</p>
						<div className="w-[150px] h-1 rounded-md bg-gray-200"></div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ContactUS;
