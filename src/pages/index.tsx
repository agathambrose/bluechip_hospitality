import type { NextPage } from 'next'
import Head from 'next/head'
import Navbar from '../components/Navbar';

const Home: NextPage = () => {
  return (
		<div>
			<Head>
				<title>Bluechip - Home</title>
			</Head>
			<Navbar home={"home"} />
		</div>
	);
}

export default Home
