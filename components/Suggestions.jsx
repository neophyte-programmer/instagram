import React, { useEffect, useState } from 'react'
import { faker } from '@faker-js/faker'

const Suggestions = () => {
	const [suggestions, setSuggestions] = useState([])

	useEffect(() => {
		// generate 20 arrays with faker-js info
		const suggest = [...Array(7)].map((_, index) => ({
			id: index,
			username: `${faker.name.firstName().toLowerCase()}_${faker.name
				.firstName()
				.toLowerCase()} `,
			name: faker.name.fullName(),
			image: faker.image.avatar(),
			followers: faker.random.numeric(3),
		}))
		setSuggestions(suggest)
	}, [])
	return (
		<div className='overflow-y-scroll scrollbar-thin scrollbar-thumb-gray-200 max-h-[400px] pr-5'>
			<div className='flex justify-between items-center mb-3'>
				<h3 className='font-bold text-gray-500 '>Suggestions for you</h3>
				{/* <button className='font-semibold text-gray-800 text-sm'>
					See All
				</button> */}
			</div>

			{suggestions &&
				suggestions.map((profile) => (
					<div
						key={profile.id}
						className='flex items-center justify-between gap-4 p-2 border-b'
					>
						<img
							src={profile.image}
							alt=''
							className='w-10 h-10 rounded-full object-cover border p-[2px]'
						/>
						<div className='flex-1'>
							<h2 className='font-bold truncate'>{profile.name}</h2>
							<h3 className='text-xs text-gray-400 font-medium'>
								Has {profile.followers} followers
							</h3>
            </div>
            <button className='text-blue-400 font-semibold text-sm'>Follow</button>
					</div>
				))}
		</div>
	)
}

export default Suggestions
