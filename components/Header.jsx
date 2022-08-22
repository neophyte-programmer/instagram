import React from 'react'
import Image from 'next/image'
import { useSession, signIn, signOut } from 'next-auth/react'
import { instagram, ig } from './images'
import { BsSearch, BsPlusCircle, BsHeart } from 'react-icons/bs'
import { AiOutlineHome, AiOutlineMenu } from 'react-icons/ai'
import { HiOutlinePaperAirplane, HiOutlineUserGroup } from 'react-icons/hi'
import { useRouter } from 'next/router'

const Header = () => {
	// Pull in session information
	const { data: session } = useSession()
	const router = useRouter()

	return (
		<div className='flex justify-center w-screen shadow-sm border-b bg-white sticky top-0 z-50'>
			<div className='flex justify-between bg-white w-full max-w-6xl items-center lg:mx-auto px-2 py-1'>
				{/* Left */}
				<div className='relative h-20 w-32 hidden lg:inline-grid cursor-pointer'>
					<Image src={instagram} layout='fill' objectFit='contain' onClick={() => router.push("/")} />
				</div>
				<div className='relative h-10 w-10 flex-shrink-0 lg:hidden cursor-pointer'  >
					<Image src={ig} layout='fill' objectFit='contain' onClick={() => router.push("/")} />
				</div>
				{/* Middle */}
				<div className='max-w-xs hidden md:flex'>
					<div className='relative mt-1 p-3 rounded-md '>
						<div className='absolute inset-y-0 pl-3 flex items-center pointer-events-none'>
							<BsSearch className='h-5 w-5 text-gray-500 ' />
						</div>
						<input
							type='text'
							placeholder='Search'
							className='bg-gray-50 block w-full pl-10 sm:text-sm border-gray-300 rounded-md focus:ring-black focus:border-black'
						/>
					</div>
				</div>
				{/* Right */}
				<div className='flex items-center justify-end space-x-4'>
					<AiOutlineHome className='navBtn2' onClick={() => router.push("/")} />
					{/* <AiOutlineMenu className='text-xl cursor-pointer md:hidden' /> */}

					{session ? (
						<>
							<div className='relative navBtn'>
								<HiOutlinePaperAirplane className='navBtn rotate-45' />
								<div className='absolute -top-2 -right-1 text-xs w-5 h-5 bg-red-500 rounded-full text-white font-bold flex items-center justify-center animate-pulse'>
									3
								</div>
							</div>
							<BsPlusCircle className='navBtn2' />
							<HiOutlineUserGroup className='navBtn' />
							<BsHeart className='navBtn' />
							<img
								src={session.user.image}
								alt='profile'
								className='w-10 h-10 rounded-full object-cover cursor-pointer shadow-lg'
								onClick={signOut}
							/>
						</>
					) : (
						<button className='text-bold text-blue-400' onClick={signIn}>Sign In</button>
					)}
				</div>
			</div>
		</div>
	)
}

export default Header
