import React from 'react'
import success from "../../assets/images/success.svg"
const SuccessMessage = (
    message: string
) => {
    return (
        <div id="toast-success" className="flex items-center w-full max-w-xs p-4 mb-4 text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800" role="alert">
            <div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-green-500 bg-green-100 rounded-lg dark:bg-green-800 dark:text-green-200">
                <img src={success} alt='error'></img>
                <span className="sr-only">Check icon</span>
            </div>
            <div className="ms-3 text-sm font-normal">{message}</div>

        </div>
    )
}

export default SuccessMessage