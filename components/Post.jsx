import React, { useState } from 'react'
import { FaEllipsisV, FaFacebookF } from 'react-icons/fa'
import { BsWhatsapp, BsTwitter, BsBookmark, BsEmojiLaughing } from 'react-icons/bs'
import { AiOutlineHeart, AiOutlineComment, AiFillHeart} from 'react-icons/ai'
import { HiOutlinePaperAirplane} from 'react-icons/hi'

const Post = ({ userName, userImg, postImage, caption }) => {
	const [shareMenu, setShareMenu] = useState(false)

	const showShareMenu = () => {
		setShareMenu((menu) => !menu)
	}

	return (
		<div className='my-7 bg-white shadow-md rounded-xl w-full'>
			{/* Header */}
			<div className='flex items-center p-5 bg-white relative rounded-xl'>
				<img
					src={userImg}
					alt=''
					className='rounded-full h-12 w-12 object-contain border p-1 mr-3'
				/>
				<p className='flex-1 font-bold'>{userName}</p>

				<FaEllipsisV
					className='cursor-pointer hover:scale-105 relative'
					onClick={showShareMenu}
				/>
				{shareMenu && (
					<div className='absolute right-[2.5rem] -bottom-12 z-50 mt-4 w-max bg-white shadow-md text-base '>
						<ul className=' mx-auto'>
							<li
								className='border-b cursor-pointer hover:bg-gray-100 px-4 py-2 duration-100 transition-all ease-in-out flex items-center gap-3 text-base'
								onClick={showShareMenu}
							>
								<BsWhatsapp className='text-xl text-green-500' />
								<p className='font-medium tracking-wide text-md'>
									Share on WhatsApp
								</p>
							</li>
							<li
								className='border-b cursor-pointer hover:bg-gray-100 px-4 py-2 duration-100 transition-all ease-in-out flex items-center gap-3 text-base'
								onClick={showShareMenu}
							>
								<FaFacebookF className='text-xl text-blue-500' />
								<p className='font-medium tracking-wide text-md'>
									Share on Facebook
								</p>
							</li>
							<li
								className='border-b cursor-pointer hover:bg-gray-100 px-4 py-2 duration-100 transition-all ease-in-out flex items-center gap-3 text-base'
								onClick={showShareMenu}
							>
								<BsTwitter className='text-xl text-blue-500' />
								<p className='font-medium tracking-wide text-md'>
									Share on Twitter
								</p>
							</li>
						</ul>
					</div>
				)}
			</div>

			{/* Post image */}
			<div className='w-full '>
				<img src={postImage} alt='' className='w-full object-cover' />
			</div>

            {/* Buttons */}
            <div className='bg-white p-5 w-full flex items-center justify-between'>
                <div className='flex items-center gap-3'>
                    <AiOutlineHeart className='btn' />
                    <AiOutlineComment className='btn' />
                    <HiOutlinePaperAirplane className='btn rotate-90' />
                </div>
                <div>
                    <BsBookmark className='btn' />
                </div>
            </div>

            {/* Captions */}
            <p className='p-5 truncate'>
                <span className='font-bold mr-1'>{userName} </span>
                {caption}
            </p>

			{/* Comments */}

            {/* Input Box */}
            <form className='flex items-center p-4'>
                <BsEmojiLaughing className='btn' />
                <input type="text" className='border-none flex-1 border-b-2 focus:ring-0 outline-none border-black' placeholder='Add a comment...' />
                <button className='font-semibold text-blue-400'>Post</button>
            </form>
		</div>
	)
}

export default Post
