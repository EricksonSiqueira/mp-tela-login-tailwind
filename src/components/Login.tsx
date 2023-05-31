'use client';

import { memo } from 'react';
import { useForm } from 'react-hook-form';
import { FaLock } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';

import { loginSchema } from '@/yup/schema';
import { yupResolver } from '@hookform/resolvers/yup';

import LoginInput from './LoginInput';

function Login() {
  const formOptions = {
    resolver: yupResolver(loginSchema),
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm(formOptions);

  const onLoginSubmit = (data: any) => {
    console.log(`data`, data);
  };

  return (
    <div
      className="flex-col align-top w-full h-96 rounded-2xl font-bold"
      onSubmit={handleSubmit(onLoginSubmit)}
    >
      <h1 className="text-4xl text-gray-900 text-center">Faça seu login</h1>
      <form
        className="flex flex-col items-start mt-12"
        onSubmit={handleSubmit(onLoginSubmit)}
      >
        <LoginInput
          placeholder="kaladin@gmail.com"
          register={register(`email`)}
          label="Email"
          error={errors.email?.message as string}
          StartIcon={<HiOutlineMail className="text-gray-400" size={16} />}
        />
        <LoginInput
          placeholder="sua senha"
          register={register(`password`)}
          error={errors.password?.message as string}
          StartIcon={<FaLock className="text-gray-400" size={12} />}
        />
        <button type="submit" className="w-full bg-indigo-500 h-12 rounded-sm">
          Enviar
        </button>
      </form>
    </div>
  );
}

export default memo(Login);
