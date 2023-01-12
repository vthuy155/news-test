import React from 'react'

type Props = {}

const Banner = (props: Props) => {
    return (
        <div className='mx-8 mt-8 mb-8'>
            <a rel="noopener noreferrer" href="#" className="block max-w-sm gap-3 mx-auto sm:max-w-full hover:no-underline focus:no-underline lg:grid lg:grid-cols-12">
                <img src="https://img2.thuthuat123.com/uploads/2020/04/10/be-meo-con-xinh-dep-scottish_053203068.jpg" alt="" className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7" />
                <div className="p-6 space-y-2 lg:col-span-5">
                    <h3 className="text-2xl font-semibold sm:text-4xl hover:text-gray-500 focus:text-gray-500">Noster tincidunt reprimique ad pro</h3>
                    <span className="text-xs dark:text-gray-400">February 19, 2021</span>
                    <p>Ei delenit sensibus liberavisse pri. Quod suscipit no nam. Est in graece fuisset, eos affert putent doctus id.</p>
                    <button type="button" className="inline-block px-24 py-2.5 bg-gray-200 text-gray-700 font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-gray-300 hover:shadow-lg focus:bg-gray-300 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-400 active:shadow-lg transition duration-150 ease-in-out">Light</button>
                </div>
            </a>
        </div>
    )
}

export default Banner