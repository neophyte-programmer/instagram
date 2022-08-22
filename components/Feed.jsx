import React from 'react'
import Head from 'next/head'
import { insta } from './images'
import { Stories, Posts, MiniProfile, Suggestions } from './components'
import { signIn, useSession } from 'next-auth/react'
import Image from 'next/image'

const Feed = () => {
	const { data: session } = useSession()

	return (
		<div>
			{session ? (
				<>
					<Head>
						<title>Instagram | Home</title>
						<link rel='icon' type='image/png' href='/logo.png' />
					</Head>
					<main className='grid grid-cols-1 md:grid-cols-2 md:max-w-3xl xl:grid-cols-3 xl:max-w-6xl mx-auto gap-10'>
						{/* Main Feed */}
						<section className='col-span-2'>
							<Stories />
							<Posts />
						</section>

						{/* Side Section */}
						<section className='hidden xl:inline-grid md:col-span-1'>
							<div className='fixed flex flex-col gap-4'>
								<MiniProfile />
								<Suggestions />
							</div>
						</section>
					</main>
				</>
			) : (
				<>
					<Head>
						<title>Not Logged In</title>
						<link rel='icon' type='image/png' href='/logo.png' />
					</Head>
					<div className='w-full h-full min-h-[95vh] xl:min-h-[89vh] flex flex-col items-center justify-center text-center bg-gradient-to-br from-orange-600 via-red-500 to-purple-500 text-white gap-4'>
						<p className='font-semibold text-lg'>Welcome to</p>
						<div className='relative w-[10rem] h-20 xl:h-[15rem] xl:w-[35rem] '>
							<Image
								src={insta}
								layout='fill'
								objectFit='contain'
							/>
						</div>
						<img
							src={insta}
							alt=''
							className='w-80 object-contain'
						/>

						<p className='font-semibold text-lg'>
							You are currently logged out. Sign in to see what
							everyone is posting.
						</p>
						<button
							onClick={signIn}
							className='py-2 px-5 border-2 border-white rounded-lg hover:border-transparent hover:bg-white hover:text-red-500 font-bold transition-all duration-400 ease-in-out hover:scale-110'
						>
							Log In
						</button>
					</div>
				</>
			)}
		</div>
	)
}

export default Feed
