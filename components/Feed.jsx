import React from 'react'
import { Stories, Posts, MiniProfile, Suggestions } from './components'

const Feed = () => {
	return (
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
	)
}

export default Feed
