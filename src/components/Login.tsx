'use client';

import { memo, useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaLock } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';

import { InferType } from 'yup';

import { loginSchema } from '@/yup/schema';
import { yupResolver } from '@hookform/resolvers/yup';

import ButtonSubmit from './ButtonSubmit';
import LoginInput from './LoginInput';

type LoginForm = InferType<typeof loginSchema>;

function Login() {
  const formOptions = {
    resolver: yupResolver(loginSchema),
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginForm>(formOptions);

  const [isSubmiting, setIsSubmiting] = useState(false);

  const onLoginSubmit = (data: LoginForm) => {
    setIsSubmiting(true);
    setTimeout(() => {
      console.log(`data`, data);
      setIsSubmiting(false);
    }, 2000);
  };

  return (
    <div
      className="flex flex-col align-top w-full h-96 rounded-2xl font-bold lg:flex-row lg:justify-center lg:items-center lg:h-screen lg:w-screen"
      onSubmit={handleSubmit(onLoginSubmit)}
    >
      <div className="py-12 px-6 lg:w-5/12 lg:flex lg:flex-col lg:justify-start lg:h-full">
        <h1 className="text-4xl text-gray-900 text-center">Faça seu login</h1>
        <form
          className="flex flex-col items-start mt-12"
          onSubmit={handleSubmit(onLoginSubmit)}
        >
          <LoginInput
            placeholder="kaladin@gmail.com"
            register={register(`email`)}
            label="Email"
            error={errors.email?.message}
            StartIcon={<HiOutlineMail className="text-gray-400" size={16} />}
          />
          <LoginInput
            placeholder="sua senha"
            register={register(`password`)}
            label="Senha"
            isPassword
            error={errors.password?.message}
            StartIcon={<FaLock className="text-gray-400" size={12} />}
          />
          <ButtonSubmit
            className="flex justify-center items-center w-full bg-primary-blue h-12 rounded-sm text-white font-semibold transition ease-in-out delay-150 hover:bg-primary-blue-light"
            isSubmiting={isSubmiting}
          />
        </form>
      </div>
      <div className="w-7/12 h-full bg-primary-blue rounded-l-lg" />
    </div>
  );
}

export default memo(Login);
