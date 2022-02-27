/* eslint-disable react-hooks/exhaustive-deps */
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import { useRouter } from "next/router";
import nProgress from "nprogress";
import { useState, Fragment, useEffect } from "react";
import { Dialog, Transition } from "@headlessui/react";

const Navbar = (props: any) => {
	const Router = useRouter();
	useEffect(() => {
		Router.events.on("routeChangeStart", (url) => {
			console.log(url);
			nProgress.start();
		});

		Router.events.on("routeChangeComplete", () => {
			nProgress.done();
		});

		return () => {
			nProgress.done();
		};
	}, []);
	const [open, setOpen] = useState(false);

	return (
		<div className="flex py-3 px-4 md:px-16 w-full bg-white font-NotoSerif fixed z-50">
			<Head>
				<link
					rel="stylesheet"
					href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css"
				/>
			</Head>
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
				<div className="lg:hidden block">
					<Image
						src={"/assets/images/Menu.svg"}
						alt="hamburger menu"
						width={20}
						height={20}
						onClick={() => setOpen(true)}
					/>
				</div>
				<div className="lg:flex hidden md:flex-row md:items-center md:text-xl md:space-x-10">
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
					{/* <div
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
						<Link href="/team">
							<a>Team</a>
						</Link>
					</div> */}
				</div>
			</div>
			<Transition.Root show={open} as={Fragment}>
				<Dialog
					as="div"
					className="fixed z-50 inset-0 overflow-hidden"
					onClose={setOpen}
				>
					<div className="absolute left-0 inset-0 overflow-hidden">
						<Transition.Child
							as={Fragment}
							enter="ease-in duration-200"
							enterFrom="opacity-0"
							enterTo="opacity-100"
							leave="ease-in-out duration-200"
							leaveFrom="opacity-100"
							leaveTo="opacity-0"
						>
							<Dialog.Overlay className="absolute inset-0 bg-gray-50 opacity-30 transition-opacity" />
						</Transition.Child>
						<div className="fixed inset-y-0 right-0 max-w-full flex">
							<Transition.Child as={Fragment}>
								<div className="relative w-screen max-w-md">
									<Transition.Child as={Fragment}>
										<div
											className="absolute top-0 right-0 -ml-8 pt-4
                    pr-2 flex sm:-ml-10 sm:pr-4"
										>
											<button
												type="button"
												className="rounded-md text-gray-300 focus:outline-none"
												onClick={() => setOpen(false)}
											>
												<Image
													src={"/assets/images/Cancel.svg"}
													alt="cancel icon"
													width={20}
													height={20}
												/>
											</button>
										</div>
									</Transition.Child>
									<div
										className="h-full w-full flex flex-col py-6 bg-secondary-color
                  shadow-xl overflow-y-scroll"
									>
										<div className="px-4 sm:px-6">
											<Dialog.Title
												className="text-lg font-medium
                      text-white"
											></Dialog.Title>
										</div>
										<div className="mt-6 relative flex-1 m-auto px-4 sm:px-6">
											<div
												className="flex flex-col justify-start items-center text-2xl font-NotoSerif
                      space-y-4 font-medium mt-20 text-white text-center"
											>
												<Link href={"/"}>
													<a>Home</a>
												</Link>
												<Link href={"/about"}>
													<a>About</a>
												</Link>
												<Link href={"/services"}>
													<a>Services</a>
												</Link>
												<Link href={"/portfolio"}>
													<a>Porfolio</a>
												</Link>
												<Link href={"/contact_us"}>
													<a>Contact Us</a>
												</Link>
												<Link href={"/team"}>
													<a>Team</a>
												</Link>
											</div>
										</div>
									</div>
								</div>
							</Transition.Child>
						</div>
					</div>
				</Dialog>
			</Transition.Root>
		</div>
	);
};

export default Navbar;
