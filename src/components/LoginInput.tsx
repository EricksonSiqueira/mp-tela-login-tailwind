import { HTMLAttributes, memo } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';

export interface LoginInputProps extends HTMLAttributes<HTMLElement> {
  label?: string;
  error?: string;
  disabled?: boolean;
  placeholder: string;
  register: UseFormRegisterReturn;
}

function LoginInput({
  label,
  error,
  disabled = false,
  placeholder,
  register,
  ...rest
}: LoginInputProps) {
  return (
    <div className="border-solid border-gray-400 border w-full mb-5 rounded-md h-12 p-2 relative">
      {label && (
        <span className="absolute text-slate-800 -top-4 left-1 bg-slate-100 rounded-lg px-2">
          {label}
        </span>
      )}

      <input
        disabled={disabled}
        placeholder={placeholder}
        className=" w-full h-full bg-transparent text-gray-100 placeholder:text-gray-600 focus:outline-none"
        {...rest}
        {...register}
      />

      {error && <p>{error}</p>}
    </div>
  );
}

export default memo(LoginInput);
