import React from 'react'
import { Stories, Posts } from './components'

const Feed = () => {
	return (
		<main className='grid grid-cols-1 md:grid-cols-2 md:max-w-3xl xl:grid-cols-3 xl:max-w-6xl mx-auto'>
			{/* Main Feed */}
			<section className='col-span-2'>
				<Stories />
				<Posts />
			</section>

			{/* Side Section */}
			<section>
				{/* Mini Profile */}
				{/* Suggestions */}
			</section>
		</main>
	)
}

export default Feed
