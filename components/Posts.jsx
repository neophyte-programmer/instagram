import React, { useEffect, useState } from 'react'
import { Post } from './components'
import { onSnapshot, collection, query, orderBy } from '@firebase/firestore'
import { db } from '../firebase'


const Posts = () => {
	const [posts, setPosts] = useState([])

	useEffect(() => {
		// Query posts by server timestamp
		return onSnapshot(
			query(collection(db, 'posts'), orderBy('timestamp', 'desc')),
			(snapshot) => {
				setPosts(snapshot.docs)
			}
		)
    }, [db])
    
    console.log(posts);

	return (
        <div>
            {/* Call data from database */}
			{posts &&
				posts.map((post) => (
					<Post
                        key={post.id}
                        id={post.id}
						userName={post.data().username}
						userImg={post.data().userImg}
						postImage={post.data().image}
						caption={post.data().caption}
					/>
				))}
		</div>
	)
}

export default Posts
