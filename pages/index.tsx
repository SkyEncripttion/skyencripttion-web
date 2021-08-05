import Head from 'next/head'
import ComingSoon from '../components/comingSoon';

export default function Home()
{
	return (
		<>
			<Head>
				<title>SkyEncripttion</title>
				<meta name="description" content="Itsakaseru Personal Website" />
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
			</Head>
			<div className="flex flex-col justify-center h-screen select-none">
				<div className="self-center">
					<ComingSoon />
				</div>
			</div>
		</>
	);
}
