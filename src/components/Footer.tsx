import Link from "next/link";
import Image from "next/image";

const Footer = () => {
	return (
		<div className="flex flex-col space-y-4 justify-center  w-full bg-secondary-color py-16 text-white">
			<div className="flex justify-between">
				<div className="flex justify-center w-full">
					<div className="w-[170px] h-[170px]">
						<Image
							src={"/assets/images/footerlogo.png"}
							alt="log image"
							width={170}
							height={170}
						/>
					</div>
				</div>
				<div className="w-full flex flex-col justify-center">
					<h4 className="text-4xl font-black">Blue Chip</h4>
					<h4 className="text-4xl font-black">Hospitality Limited</h4>
					<p className="lg:w-3/5 md:w-11/12 text-lg text-gray-400">
						House Number F330/2, Troas Street, Near Simbins Furniture, Osu,
						Accra, Ghana.
					</p>
				</div>
				<div className="w-full flex justify-center space-x-8">
					<div className="flex flex-col text-xl space-y-6">
						<div>
							<Link href="/about">
								<a>About</a>
							</Link>
						</div>
						<div>
							<Link href="/services">
								<a>Services</a>
							</Link>
						</div>
					</div>
					<div className="flex flex-col text-xl space-y-6">
						<div>
							<Link href="/portfolio">
								<a>Portfolio</a>
							</Link>
						</div>
						<div>
							<Link href="/team">
								<a>Team</a>
							</Link>
						</div>
					</div>
				</div>
			</div>
			<div className="text-center pt-12">
				<p>© 2022 Blue Chip Hospitality Limited. All rights reserved.</p>
			</div>
		</div>
	);
};

export default Footer;
