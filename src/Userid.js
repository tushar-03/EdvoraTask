import React from 'react'

function Userid(props) {
    return (
        <div class="ml-10 mb-20 w-full max-w-sm bg-white rounded-lg border border-black shadow-lg dark:bg-gray-800  hover:bg-gray-100 border-dashed border-black">

            <div class=" pt-10 flex flex-col items-center pb-10">

                <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">{props.name}</h5>
                <span class="text-sm text-gray-500 dark:text-gray-400">Visual Designer</span>
                <div class="flex mt-4 space-x-3 md:mt-6">
                    <a href="#" class="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Call</a>
                    <a href="#" class="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-gray-900 bg-white rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700">Address</a>
                </div>
            </div>
        </div>
    )
}

export default Userid
