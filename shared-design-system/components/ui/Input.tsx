import React, { InputHTMLAttributes, forwardRef } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helperText?: string;
  icon?: React.ReactNode;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, helperText, icon, className = '', ...props }, ref) => {
    return (
      <div className="w-full">
        {label && (
          <label className="block text-sm font-medium text-gray-700 mb-1.5">
            {label}
            {props.required && <span className="text-red-500 ml-1">*</span>}
          </label>
        )}

        <div className="relative">
          <input
            ref={ref}
            {...props}
            className={`
              w-full px-4 py-2 text-sm border rounded-lg
              bg-white text-gray-900 placeholder-gray-500
              focus:outline-none focus:ring-2 focus:ring-offset-0 focus:ring-blue-500
              focus:border-blue-500 transition-colors
              disabled:bg-gray-50 disabled:text-gray-500 disabled:cursor-not-allowed
              ${error ? 'border-red-300 focus:ring-red-500 focus:border-red-500' : 'border-gray-300'}
              ${icon ? 'pl-10' : ''}
              ${className}
            `}
          />

          {icon && (
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 flex items-center justify-center w-5 h-5">
              {icon}
            </div>
          )}
        </div>

        {error && <p className="mt-1.5 text-xs text-red-600">{error}</p>}
        {helperText && !error && <p className="mt-1.5 text-xs text-gray-500">{helperText}</p>}
      </div>
    );
  },
);

Input.displayName = 'Input';

export default Input;
