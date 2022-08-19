import React from 'react'
import Image from 'next/image'
import { instagram, ig } from './images'
import { BsSearch, BsPlusCircle, BsHeart } from 'react-icons/bs'
import { AiOutlineHome, AiOutlineMenu } from 'react-icons/ai'
import { HiOutlinePaperAirplane, HiOutlineUserGroup } from 'react-icons/hi'

const Header = () => {
	return (
		<div className='flex justify-center w-screen shadow-sm border-b bg-white sticky top-0 z-50'>
			<div className='flex justify-between bg-white w-full max-w-6xl items-center lg:mx-auto p-2'>
				{/* Left */}
				<div className='relative h-20 w-32 hidden lg:inline-grid cursor-pointer'>
					<Image src={instagram} layout='fill' objectFit='contain' />
				</div>
				<div className='relative h-10 w-10 flex-shrink-0 lg:hidden cursor-pointer'>
					<Image src={ig} layout='fill' objectFit='contain' />
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
					<AiOutlineHome className='navBtn' />
					<AiOutlineMenu className='text-xl cursor-pointer md:hidden' />
					<div className='relative navBtn'>
                        <HiOutlinePaperAirplane className='navBtn rotate-45' />
                        <div className='absolute -top-2 -right-1 text-xs w-5 h-5 bg-red-500 rounded-full text-white font-bold flex items-center justify-center animate-pulse'>3</div>
					</div>
					<BsPlusCircle className='navBtn' />
					<HiOutlineUserGroup className='navBtn' />
					<BsHeart className='navBtn' />
					<img
						src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDtQ4YYvu990oOH2z_4HMlVEyMv_1pxubhuc0sffLu6tjmcx9LSoaFxtIV3xGK3TygpHY&usqp=CAU'
						alt='profile'
						className='w-10 h-10 rounded-full object-contain cursor-pointer shadow-lg'
					/>
				</div>
			</div>
		</div>
	)
}

export default Header