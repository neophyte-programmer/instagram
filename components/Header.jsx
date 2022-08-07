import React from 'react'
import Image from 'next/image'
import { instagram } from './images'

const Header = () => {
  return (
      <div>
          <div>
              <Image src={instagram} />
          </div>
          <div></div>
          <div></div>
    </div>
  )
}

export default Header