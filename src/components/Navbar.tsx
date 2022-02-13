/* eslint-disable react-hooks/exhaustive-deps */
import Image from "next/image";
import Link from "next/link";

const Navbar = (props: any) => {
	return (
		<div className="flex py-3 px-10 md:px-16 w-full bg-white drop-shadow font-NotoSerif fixed z-50">
			<div className="flex w-full items-center justify-between">
				<div>
					<Link href={"/"}>
						<a>
							<Image
								src={"/assets/images/Logo.svg"}
								alt="logo image"
								width={50}
								height={50}
							/>
						</a>
					</Link>
				</div>
				<div className="md:hidden block">
					<Image
						src={"/assets/images/Menu.svg"}
						alt="hamburger menu"
						width={20}
						height={20}
					/>
				</div>
				<div className="md:flex hidden md:flex-row md:items-center md:text-xl md:space-x-10">
					<div
						className={`${
							props.home === "home"
								? "focus:text-primary-color text-primary-color"
								: "text-secondary-color focus:text-secondary-color"
						}`}
					>
						<Link href="/">
							<a>Home</a>
						</Link>
					</div>
					<div
						className={`${
							props.about === "about"
								? "focus:text-primary-color text-primary-color"
								: "text-secondary-color focus:text-secondary-color"
						}`}
					>
						<Link href="/about">
							<a>About</a>
						</Link>
					</div>
					<div
						className={`${
							props.services === "services"
								? "focus:text-primary-color text-primary-color"
								: "text-secondary-color focus:text-secondary-color"
						}`}
					>
						<Link href="/services">
							<a>Services</a>
						</Link>
					</div>
					<div
						className={`${
							props.portfolio === "portfolio"
								? "focus:text-primary-color text-primary-color"
								: "text-secondary-color focus:text-secondary-color"
						}`}
					>
						<Link href="/portfolio">
							<a>Portfolio</a>
						</Link>
					</div>
					<div
						className={`${
							props.contact_us === "contact us"
								? "focus:text-primary-color text-primary-color"
								: "text-secondary-color focus:text-secondary-color"
						}`}
					>
						<Link href="/contact_us">
							<a>Contact Us</a>
						</Link>
					</div>
					<div
						className={`${
							props.team === "team"
								? "focus:text-primary-color text-primary-color"
								: "text-secondary-color focus:text-secondary-color"
						}`}
					>
						<Link href="/">
							<a>Team</a>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
