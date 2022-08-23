import React, { Fragment, useRef, useState } from 'react'
import { useRecoilState } from 'recoil'
import { modalState } from '../atoms/modalAtom'
import { Dialog, Transition } from '@headlessui/react'
import { BsCamera } from 'react-icons/bs'
import { AiOutlineDelete } from 'react-icons/ai'

const Modal = () => {
	const [open, setOpen] = useRecoilState(modalState)
	const filePickerRef = useRef(null)
	const [selectedFile, setSelectedFile] = useState(null)

	const uploadPost = () => {}
	const addImageToPost = (e) => {
		const reader = new FileReader()
		if (e.target.files[0]) {
			reader.readAsDataURL(e.target.files[0])
		}
		reader.onload = (readerEvent) => {
			setSelectedFile(readerEvent.target.result)
		}
	}
	return (
		//   Wrap everything in transition and show if open state is true and render as react fragment
		<Transition.Root show={open} as={Fragment}>
			<Dialog
				as='div'
				className='fixed z-10 inset-0 overflow-y-auto'
				onClose={() => setOpen(false)}
			>
				<div className='flex items-end justify-center min-h-[800px] sm:min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0 '>
					<Transition.Child
						as={Fragment}
						enter='ease-out duration-400'
						enterFrom='opacity-0 scale-0'
						enterTo='opacity-100 scale-100'
						leave='ease-in duration-400'
						leaveFrom='opacity-100 scale-105'
						leaveTo='opacity-0 scale-0'
					>
						<Dialog.Overlay className='fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity' />
					</Transition.Child>
					{/* Trick browser into centering modal contents */}
					<span
						className='hidden sm:inline-block sm:align-middle sm:h-screen'
						aria-hidden='true'
					>
						&#8203
					</span>
					<Transition.Child
						as={Fragment}
						enter='ease-out duration-400'
						enterFrom='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
						enterTo='opacity-100 translate-y-0 sm:scale-100'
						leave='ease-in duration-300'
						leaveFrom='opacity-100 translate-y-0 sm:scale-100   '
						leaveTo='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
					>
						<div className='inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align:middle sm:w-full sm:max-w-sm  sm:p-6 '>
							<div>
								{selectedFile ? (
									<div className='w-full relative'>
										<img
											src={selectedFile}
											alt=''
											className='w-full relative rounded-lg object-cover h-full max-h-[300px]'
										/>
										<button className='bg-red-500 absolute right-0 bottom-0 m-1 cursor-pointer inline-block p-2 rounded-full hover:bg-red-600' onClick={() => setSelectedFile(null)}>
											<AiOutlineDelete className='  text-2xl text-white ' />
										</button>
									</div>
								) : (
									<div
										onClick={() =>
											filePickerRef.current.click()
										}
										className='mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-blue-100 cursor-pointer'
									>
										<BsCamera
											className='w-6 h-6 text-blue-600'
											aria-hidden='true'
										/>
									</div>
								)}

								<div>
									<div className='mt-3 text-center sm:mt-5'>
										<Dialog.Title
											as='h3'
											className='text-lg leading-6 font-medium text-gray-900'
										>
											Upload a Photo
										</Dialog.Title>
										<div>
											<input
												type='file'
												hidden
												accept='image/*'
												onChange={addImageToPost}
												ref={filePickerRef}
											/>
										</div>
										<div className='mt-2'>
											<input
												type='text'
												className='border-none border-b-2 border-gray-200 focus:ring-0 w-full '
												// ref={captionRef}
												placeholder='Please enter a caption....'
											/>
										</div>
									</div>
								</div>

								<div className='mt-4'>
									<button
										className='inline-flex justify-center w-full rounded-lg border border-transparent shadow-sm px-4 py-2 bg-blue-500 text-base font-medium text-white hover:bg-blue-600 focus:outline-none disabled:bg-blue-300 capitalize disabled:cursor-not-allowed sm:text-sm'
										type='button'
										disabled={!selectedFile}
										// onClick={uploadPost}
									>
										{/* {loading ? "Uploading... " : "Upload Post"} */}
										Upload
									</button>
								</div>
							</div>
						</div>
					</Transition.Child>
				</div>
			</Dialog>
		</Transition.Root>
	)
}

export default Modal
