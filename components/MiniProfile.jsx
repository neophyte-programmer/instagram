import React from 'react'

const MiniProfile = () => {
	return (
		<div className='flex items-center justify-between mt-14 '>
			<img
				src='https://htmlstream.com/preview/unify-v2.6/assets/img-temp/400x450/img5.jpg'
				alt=''
				className='rounded-full border p-[2px] w-16 h-16 object-cover'
			/>
			<div className='flex-1 mx-4'>
				<h2 className='font-bold'>n.utifafa</h2>
				<h3 className='text-sm text-gray-500'>Welcome to Instagram</h3>
			</div>
			<button className='text-blue-400 font-semibold text-sm'>Sign Out</button>
		</div>
	)
}

export default MiniProfile
