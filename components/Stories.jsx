import React, { useEffect, useState } from 'react'
import { faker } from '@faker-js/faker'
import { Story } from './components'
import {useSession} from 'next-auth/react'

const Stories = () => {
	const { data: session } = useSession()

	const [suggestions, setSuggestions] = useState([])

	// Runs when component loads on screen
	useEffect(() => {
		// generate 20 arrays with faker-js info
		const suggest = [...Array(20)].map((_, index) => ({
			id: index,
			name: `${faker.name.firstName().toLowerCase()}_${faker.name
				.firstName()
				.toLowerCase()} `,
			image: faker.image.avatar(),
		}))
		setSuggestions(suggest)
	}, [])

	return (
		<div className='flex gap-2 p-6 bg-white mt-8 border-gray-200 border rounded-sm overflow-x-scroll scrollbar-thin scrollbar-thumb-gray-200 hover:scrollbar-thumb-gray-300 cursor-pointer drop-shadow-sm '>
			{
				session && (
					<Story img={session?.user.image} username={session?.user.username} />
				)
			}
			{suggestions &&
				suggestions.map((profile) => (
					<Story
						key={profile.id}
						img={profile.image}
				    		username={profile.name}
					/>
				))}
		</div>
	)
}

export default Stories
