import React, { useEffect, useState} from 'react'
import { faker } from '@faker-js/faker'
import { Story } from './components'

const Stories = () => {
    const [suggestions, setSuggestions] = useState([])

    // Runs when component loads on screen
    useEffect(() => {
        // generat 20 arrays with faker-js info
        const suggest = [...Array(20)].map((_, index) => ({
            // ...faker.helpers.contextualCard(),
            id: index,
            name: faker.name.firstName(),
            image: faker.image.avatar()


        }))
        setSuggestions(suggest);
    }, [])

  return (
      <div>
          {
              suggestions && suggestions.map((profile) => (
                  <Story key={profile.id} img={profile.image} username={profile.name} />
              ))
          }
    </div>
  )
}

export default Stories