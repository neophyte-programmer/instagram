import React from 'react'
import { signOut, useSession} from "next-auth/react"

const MiniProfile = () => {
	const { data: session } = useSession()
	console.log(session)

	return (
		<div className='flex items-center justify-between mt-14 '>
			<img
				src={session?.user?.image}
				alt=''
				className='rounded-full border p-[2px] w-16 h-16 object-cover'
			/>
			<div className='flex-1 mx-4'>
				<h2 className='font-bold'>{session?.user?.username}</h2>
				<h3 className='text-sm text-gray-500'>Welcome to Instagram</h3>
			</div>
			<button className='text-blue-400 font-semibold text-sm' onClick={signOut}>Sign Out</button>
		</div>
	)
}

export default MiniProfile
