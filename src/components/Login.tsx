/* eslint-disable jsx-a11y/anchor-is-valid */

'use client';

import { memo, useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaLock } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';

import Image from 'next/image';
import Link from 'next/link';

import { InferType } from 'yup';

import useWindowSize from '@/hooks/useWindowSize';
import LoginImage from '@/public/images/sign-in-rafiki.svg';
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

  const { isMobile } = useWindowSize();

  const onLoginSubmit = (data: LoginForm) => {
    setIsSubmiting(true);
    setTimeout(() => {
      console.log(`data`, data);
      setIsSubmiting(false);
    }, 2000);
  };

  return (
    <div
      className="flex flex-col align-top w-full h-full rounded-2xl font-bold justify-center items-center lg:flex-row  lg:h-screen lg:w-screen"
      onSubmit={handleSubmit(onLoginSubmit)}
    >
      <div className="py-12 px-6 h-full w-full flex flex-col lg:w-5/12  justify-center items-center">
        <h1 className="text-4xl text-gray-900 text-center">Faça seu login</h1>
        <form
          className="flex flex-col items-start mt-12 w-full lg:max-w-md"
          onSubmit={handleSubmit(onLoginSubmit)}
        >
          <LoginInput
            placeholder="kaladin@gmail.com"
            register={register(`email`)}
            label="Email"
            error={errors.email?.message}
            StartIcon={<HiOutlineMail className="text-gray-400" size={16} />}
            wrapperClassName="mb-10"
          />
          <LoginInput
            placeholder="sua senha"
            register={register(`password`)}
            label="Senha"
            isPassword
            error={errors.password?.message}
            StartIcon={<FaLock className="text-gray-400" size={12} />}
          />
          <Link
            href="#"
            className="text-sm text-gray-400 mt-2 font-normal w-full text-end"
          >
            Esqueci minha senha
          </Link>
          <ButtonSubmit
            className="flex justify-center items-center w-full bg-primary-blue h-12 rounded-sm text-white font-semibold transition ease-in-out delay-150 hover:bg-primary-blue-light mt-8 mb-10"
            isSubmiting={isSubmiting}
          />
        </form>
        <Link href="#" className="text-sm text-gray-400 font-normal">
          Não tem conta ainda?{` `}
          <span className="text-primary-blue">Crie agora</span>
        </Link>
      </div>
      {!isMobile && (
        <div className="w-7/12 h-full bg-primary-blue rounded-l-lg flex flex-col items-center justify-center">
          <div className="w-96 h-96 relative animate-float-slow">
            <Image src={LoginImage} alt="nada" fill />
          </div>
          <a
            href="https://storyset.com/user"
            className="text-xs text-gray-300 pb-6"
          >
            User illustrations by Storyset
          </a>
          <h2 className="text-slate-50 text-xl max-w-xs text-center">
            A melhor experiencia de login que você já teve na sua vida.
          </h2>
        </div>
      )}
    </div>
  );
}

export default memo(Login);
