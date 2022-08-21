import React from 'react'
import { Stories, Posts, MiniProfile, Suggestions } from './components'

const Feed = () => {
	return (
		<main className='grid grid-cols-1 md:grid-cols-2 md:max-w-3xl xl:grid-cols-3 xl:max-w-6xl mx-auto'>
			{/* Main Feed */}
			<section className='col-span-2'>
				<Stories />
				<Posts />
			</section>

			{/* Side Section */}
			<section className='hidden xl:inline-grid md:col-span-1'>
        <MiniProfile />
        <Suggestions />
			</section>
		</main>
	)
}

export default Feed
