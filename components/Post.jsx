import React, { useEffect, useState } from 'react'
import { FaEllipsisV, FaFacebookF } from 'react-icons/fa'
import {
	BsWhatsapp,
	BsTwitter,
	BsBookmark,
	BsEmojiLaughing,
} from 'react-icons/bs'
import { AiOutlineHeart, AiOutlineComment, AiFillHeart } from 'react-icons/ai'
import { HiOutlinePaperAirplane } from 'react-icons/hi'
import {
	addDoc,
	setDoc,
	deleteDoc,
	doc,
	collection,
	serverTimestamp,
	onSnapshot,
	query,
	orderBy,
} from '@firebase/firestore'
import { db } from '../firebase'
import { useSession } from 'next-auth/react'
// import Moment from 'react-moment'

const Post = ({ id, userName, userImg, postImage, caption }) => {
	const { data: session } = useSession()
	const [shareMenu, setShareMenu] = useState(false)
	const [comment, setComment] = useState('')
	const [comments, setComments] = useState([])
	const [likes, setLikes] = useState([])
	const [hasLiked, setHasLiked] = useState(false)

	const showShareMenu = () => {
		setShareMenu((menu) => !menu)
	}

	// Call realtime comments from database
	useEffect(() => {
		return onSnapshot(
			query(
				collection(db, 'posts', id, 'comments'),
				orderBy('timestamp', 'desc')
			),
			(snapshot) => {
				setComments(snapshot.docs)
			}
		)
	}, [db, id])

	// Call likes from database

	useEffect(() => {
		return onSnapshot(collection(db, 'posts', id, 'likes'), (snapshot) => {
			setLikes(snapshot.docs)
		})
	}, [db, id])

	useEffect(
		() =>
			setHasLiked(
				likes.findIndex((like) => like.id === session?.user?.uid) !== -1
			),
		[likes]
	)

	const sendComment = async (e) => {
		e.preventDefault

		const commentToSend = comment
		setComment('')

		// Add comment to backend database
		await addDoc(collection(db, 'posts', id, 'comments'), {
			comment: commentToSend,
			username: session.user.username,
			userImage: session.user.image,
			timestamp: serverTimestamp(),
		})
	}

	const likePost = async () => {
		if (hasLiked) {
			await deleteDoc(doc(db, 'posts', id, 'likes', session.user.uid))
		} else {
			// Ensure user has only one like
			await setDoc(doc(db, 'posts', id, 'likes', session.user.uid), {
				username: session.user.username,
			})
		}
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
				<img src={postImage} alt='' className='w-full max-h-[500px] object-cover' />
			</div>

			{/* Buttons */}
			<div className='bg-white px-5 pt-5 w-full flex items-center justify-between'>
				<div className='flex items-center gap-3'>
					{
						hasLiked ? (
							<AiFillHeart className='btn text-red-500' onClick={likePost} />
						): (

							<AiOutlineHeart className='btn' onClick={likePost} />
						)
					}
					<AiOutlineComment className='btn' />
					<HiOutlinePaperAirplane className='btn rotate-90' />
				</div>
				<div>
					<BsBookmark className='btn' />
				</div>
			</div>

			{/* Captions */}
			<p className='p-5 truncate'>
				{
					likes.length > 0 && (
						<p className='font-bold'>
							{
								likes.length === 1 ? `${likes.length} like` : `${likes.length} likes`
							}
						</p>
					)
				}
				<span className='font-bold mr-1'>{userName} </span>
				{caption}
			</p>

			{/* Comments */}
			{comments.length > 0 && (
				<div className='ml-10 h-20 overflow-y-scroll scrollbar-thin scrollbar-thumb-gray-300'>
					{comments.map((comment) => (
						<div
							key={comment.id}
							className='flex items-center gap-2 mb-3'
						>
							<img
								src={comment.data().userImage}
								alt=''
								className='h-7 w-7 rounded-full object-contain'
							/>
							<p className='text-sm flex-1'>
								{' '}
								<span className='font-bold'>
									{comment.data().username}{' '}
								</span>
								{comment.data().comment}
							</p>
							{/* <Moment
								fromNow
								className='pr-5 text-xs text-gray-700'
							>
								{comment.data().timestamp?.toDate()}
							</Moment> */}
						</div>
					))}
				</div>
			)}

			{/* Input Box */}
			<form className='flex items-center p-4'>
				<BsEmojiLaughing className='btn' />
				<input
					type='text'
					className='border-none flex-1 border-b-2 focus:ring-0 outline-none border-black'
					placeholder='Add a comment...'
					value={comment}
					onChange={(e) => setComment(e.target.value)}
				/>
				<button
					type='submit'
					disabled={!comment.trim()}
					onClick={sendComment}
					className='font-semibold text-blue-400'
				>
					Post
				</button>
			</form>
		</div>
	)
}

export default Post
