import Image from "next/image";
import Link from "next/link";
import Button from "../Components/button";
import Profile from "../Profile/page";
import Input from "../Components/input";
import Card from "../Components/card";

export default function Home() {
  return (
    <div className="signin-background--color flex min-h-screen flex-col items-center justify-between p-48">

      <Card
        title={""}
        image={
          <Image
            alt=""
            src="/imgs/b2bit-logo.png"
            className="object-cover p-8"
            width={295}
            height={116}
          />
        }
        content={
          <form action="#" method="POST" className="mb-6">
            <Input name={'email'} type={'email'} label={'E-mail'} placeholder={'@gmail.com'} id={'email'} htmlFor={'email'}></Input>
            <Input name={'password'} type={'password'} label={'Password'} placeholder={'**********'} id={'password'} htmlFor={'password'}></Input>
            <Button type={'submit'} label={'Sign In'} />

            <Link href="Profile">click</Link>
          </form>
        }
      />

    </div>
  );
}
