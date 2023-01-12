import React from 'react'
import { Link } from 'react-router-dom'

type Props = {}

const Posts = (props: Props) => {
    return (
        <div className="pt-12 mx-52">
            <div className="flex flex-col space-y-4 md:space-y-0 md:space-x-6 md:flex-row">
                <img src="https://source.unsplash.com/75x75/?portrait" alt="" className="self-center flex-shrink-0 w-24 h-24 border rounded-full md:justify-self-start dark:bg-gray-500 dark:border-gray-700" />
                <div className="flex flex-col">
                    <h4 className="text-lg font-semibold">Leroy Jenkins</h4>
                    <p className="dark:text-gray-400">Sed non nibh iaculis, posuere diam vitae, consectetur neque. Integer velit ligula, semper sed nisl in, cursus commodo elit. Pellentesque sit amet mi luctus ligula euismod lobortis ultricies et nibh.</p>
                </div>
            </div>
        </div>
    )
}

export default Posts