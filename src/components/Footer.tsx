import Link from "next/link";
import Image from "next/image";

const Footer = () => {
	return (
		<div className="md:flex md:flex-col py-6 px-3 md:p-0 md:space-y-4 md:justify-center w-full bg-secondary-color md:py-16 text-white">
			<div className="md:flex md:justify-between">
				<div className="md:flex md:justify-center md:w-full">
					<div className="w-[100px] h-[100px] md:w-[170px] md:h-[170px]">
						<Image
							src={"/assets/images/footerlogo.png"}
							alt="log image"
							width={170}
							height={170}
						/>
					</div>
				</div>
				<div className="Md:w-full md:flex md:flex-col justify-center">
					<h4 className="md:text-4xl text-3xl font-black">Blue Chip</h4>
					<h4 className="md:text-4xl text-3xl font-black">
						Hospitality Limited
					</h4>
					<p className="md:w-11/12 text-base md:text-lg text-gray-400">
						House Number F330/2, Troas Street, Near Simbins Furniture, Osu,
						Accra, Ghana.
					</p>
				</div>
				<div className="md:w-full md:flex mt-8 md:mt-0 justify-center md:space-x-8">
					<div className="md:flex md:flex-col font-semibold text-lg md:text-xl md:space-y-6">
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
					<div className="md:flex md:flex-col font-semibold text-lg md:text-xl md:space-y-6">
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
