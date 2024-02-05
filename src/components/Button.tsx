import React from 'react'
import { ButtonProps } from '../types/loginInputType';

const Button: React.FC<ButtonProps> = ({ action, onSubmit, text }) => {
    return (
        <button
            type={action}
            className="group relative w-full flex justify-center py-3 px-6 border border-transparent text-base font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 mt-6"
            onClick={onSubmit}
        >
            {text}
        </button>
    );
};

export default Button;