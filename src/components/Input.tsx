
import React from 'react'
import { InputProps } from '../types/loginInputType';

const Input: React.FC<InputProps> = ({
    handleChange,
    value,
    labelText,
    labelFor,
    id,
    name,
    type,
    isRequired = false,
    placeholder,
    customClass,
    maxLength,
    minLength,
    error,
}) => {

    return (
        <div className="mb-4">
            <label htmlFor={labelFor} className="block text-sm font-medium text-gray-700">
                {labelText}{isRequired ? <span className='text-red-900'>*</span> : ""}
            </label>
            <input
                onChange={(event) => handleChange(event, type, maxLength, minLength)}
                value={value}
                id={id}
                name={name}
                type={type}
                className="mt-1 p-2 block w-full rounded-md border border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder={placeholder}
            />
            <span className='text-red-900'>{error ? error : ""}</span>
        </div>
    )
}

export default Input
