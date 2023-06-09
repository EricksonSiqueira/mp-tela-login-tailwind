import { HTMLAttributes, memo, useState } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';

export interface LoginInputProps extends HTMLAttributes<HTMLElement> {
  label?: string;
  error?: string;
  disabled?: boolean;
  placeholder: string;
  isPassword?: boolean;
  register: UseFormRegisterReturn;
  StartIcon?: JSX.Element;
}

function LoginInput({
  label,
  error,
  disabled = false,
  placeholder,
  register,
  isPassword = false,
  StartIcon,
  ...rest
}: LoginInputProps) {
  const [focused, setFocused] = useState(false);
  const [showPassword, setShowPassword] = useState(isPassword);

  return (
    <div
      className={`border-solid border-gray-400 border w-full mb-9 rounded-md h-12 relative flex items-center bg-white ${
        focused && `border-blue-500 shadow-blue`
      } ${error && `border-red-600`}}`}
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
        type={showPassword ? `password` : `text`}
        onFocus={() => setFocused(true)}
        className=" w-full h-12 bg-transparent text-gray-900 font-normal placeholder:text-gray-400 placeholder:text-sm placeholder:font-normal focus:outline-none pl-2"
        {...rest}
        {...register}
        onBlur={() => setFocused(false)}
      />

      {isPassword && (
        <button
          type="button"
          className="absolute right-2"
          onClick={() => setShowPassword(!showPassword)}
        >
          {showPassword ? (
            <AiOutlineEye size={20} color="#9CA3AF" />
          ) : (
            <AiOutlineEyeInvisible size={20} color="#9CA3AF" />
          )}
        </button>
      )}

      {error && (
        <p className="text-red-600 text-xs absolute left-2 -bottom-5">
          {error}
        </p>
      )}
    </div>
  );
}

export default memo(LoginInput);
