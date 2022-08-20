import React from 'react'

const Story = ({img ,username}) => {
  return (
      <div className=' w-max'>
          <img src={img} alt="" className=' h-14 w-14 object-contain rounded-[50%] border-red-500 border-2 cursor-pointer hover:scale-110 transition transform duration-300 ease-in-out' />
          <p className='text-xs w-14 truncate text-center'>{username}</p>
    </div>
  )
}

export default Story