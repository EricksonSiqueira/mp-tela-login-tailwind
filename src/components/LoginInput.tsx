import { HTMLAttributes, memo, useState } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';

export interface LoginInputProps extends HTMLAttributes<HTMLElement> {
  label?: string;
  error?: string;
  disabled?: boolean;
  placeholder: string;
  register: UseFormRegisterReturn;
  StartIcon?: any;
}

function LoginInput({
  label,
  error,
  disabled = false,
  placeholder,
  register,
  StartIcon,
  ...rest
}: LoginInputProps) {
  const [focused, setFocused] = useState(false);

  return (
    <div
      className={`border-solid border-gray-400 border w-full mb-5 rounded-md h-12 relative flex items-center bg-white ${
        focused && `border-blue-500 shadow-blue`
      }`}
    >
      {label && (
        <span className="absolute text-gray-900 -top-4 left-1 bg-white rounded-lg px-2 text-sm h-6 font-normal">
          {label}
        </span>
      )}

      {StartIcon && (
        <div className="h-full flex items-center justify-center pl-2">
          {StartIcon}
        </div>
      )}

      <input
        disabled={disabled}
        placeholder={placeholder}
        onFocus={() => setFocused(true)}
        className=" w-full h-12 bg-transparent text-gray-900 placeholder:text-gray-400 placeholder:text-sm placeholder:font-normal focus:outline-none pl-2"
        {...rest}
        {...register}
        onBlur={() => setFocused(false)}
      />

      {error && <p>{error}</p>}
    </div>
  );
}

export default memo(LoginInput);
