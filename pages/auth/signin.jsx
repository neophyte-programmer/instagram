import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import { getProviders, signIn } from 'next-auth/react'
import { Header } from '../../components/components'
import { instagram } from '../../components/images'

//  Access providers from server side by destructuring props
const SignIn = ({ providers }) => {
	return (
		<div>
			<Head>
				<title>Sign In</title>
				<link rel='icon' type='image/png' href='/logo.png' />
			</Head>
			<Header />
			<div className='flex flex-col items-center justify-center w-full h-full gap-4 px-6 text-center min-h-[80vh]'>
				<div className='relative h-64 w-80 '>
					<Image src={instagram} layout='fill' objectFit='contain' />
				</div>
				<p className='font-xs italic text-gray-600 '>
					This is not the real instagram app. It is just a clone built for self development and educational purposes
				</p>

				<div>
					{Object.values(providers).map((provider) => (
						<div key={provider.name}>
							<button
								className='bg-blue-500 p-3 rounded-lg text-white block'
								onClick={() => signIn(provider.id, {callbackUrl: '/'})}
							>
								Sign in with {provider.name}
							</button>
						</div>
					))}
				</div>
			</div>
		</div>
	)
}

// Server side rendering
export async function getServerSideProps(context) {
	// Gets available providers
	const providers = await getProviders()
	// Returns providers to client side
	return {
		props: { providers },
	}
}
export default SignIn
