import React from 'react'
import { Post } from './components'

const dummyData = [
    {
        id: 1,
        userName: "n.utifafa",
        userImg: 'https://xsgames.co/randomusers/assets/avatars/male/74.jpg',
        postImage: "https://www.lifewire.com/thmb/vF2JQGiBs5KyXDZq5z5tEl4-EIU=/2200x1466/filters:fill(auto,1)/city_AlexanderSpatari_Getty-5a13972b47c26600378f0216.jpg",
        caption: 'Overview from my home'

    },
    {
        id: 2,
        userName: "theodore_a",
        userImg: 'https://xsgames.co/randomusers/assets/avatars/male/46.jpg',
        postImage: "https://www.shutterbug.com/images/styles/600_wide/public/promocloseups8816.png",
        caption: 'Overview from my home'

    },
]

const Posts = () => {
  return (
      <div>
          {
              dummyData && dummyData.map((post) => (
                    <Post key={post.id} userName={post.userName} userImg={post.userImg} postImage={post.postImage} caption={post.caption}  /> 
                  
              ))
          }
    </div>
  )
}

export default Posts