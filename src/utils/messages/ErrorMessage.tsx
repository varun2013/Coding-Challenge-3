import React from 'react'
import error from "../../assets/images/error.svg"
const ErrorMessage = (message: string) => {
  return (
    <div id="toast-danger" className="flex items-center w-full max-w-xs p-4 mb-4 text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800" role="alert">
    <div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-red-500 bg-red-100 rounded-lg dark:bg-red-800 dark:text-red-200">
        <img src={error} alt='error'></img>
        <span className="sr-only">Error icon</span>
    </div>
    <div className="ms-3 text-sm font-normal">{message}</div>
   
</div>
  )
}

export default ErrorMessage