"use client"

import Image from "next/image";
import Button from "../Components/button";
import Input from "../Components/input";
import Card from "../Components/card";
import { useState } from 'react';
import { login } from '@/services/index';
import { useRouter } from "next/navigation";

export default function Home() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  async function handleSubmit(e : any) {
    e.preventDefault();

    try {
      await submitForm(email, password).
        then(() => {
          router.push('/Profile');
        });

    } catch (error) {
      alert('Erro ao submeter o formulário.');
    }
  }

  function handleEmail(e : any) {
    setEmail(e.target.value);
  }

  function handlePassword(e : any) {
    setPassword(e.target.value);
  }

  return (
    <div className="signin-background--color flex min-h-screen flex-col items-center justify-between p-48">
      <Card
        image={
          <Image
            alt="B2Bit logo"
            src="/imgs/b2bit-logo.png"
            className="object-cover"
            width={295}
            height={116}
          />
        }
        content={
          <form action="#" method="POST" className="mb-6" onSubmit={handleSubmit}>
            <Input
              name={'email'}
              type={'email'}
              label={'E-mail'}
              placeholder={'@gmail.com'}
              id={'email'}
              htmlFor={'email'}
              value={email}
              onChange={handleEmail}
            />
            <Input
              name={'password'}
              type={'password'}
              label={'Password'}
              placeholder={'**********'}
              id={'password'}
              htmlFor={'password'}
              value={password}
              onChange={handlePassword}
            />
            <Button type={'submit'} label={'Sign In'} />
          </form>
        }
      />
    </div>
  );

  function submitForm(email: string, password: string) {
    return new Promise<void>((resolve, reject) => {
      login(email, password).then(() => {
        resolve()
      }).catch(reject);
    })
  }
}