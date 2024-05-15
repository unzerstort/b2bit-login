import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-48">
      <article className="overflow-hidden rounded-lg shadow transition hover:shadow-lg p-4">
        <Image
          alt=""
          src="/imgs/b2bit-logo.png"
          className="object-cover p-8"
          width={295}
          height={116}
        />

        <form className="mb-6" action="#" method="POST">
          <div>
            <label className="block text-gray-700 font-bold">E-mail</label>
            <input type="email" name="" id="" placeholder="@gmail.com" className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none" autoFocus autocomplete required/>
          </div>

          <div className="mt-4">
            <label className="block text-gray-700 font-bold">Password</label>
            <input type="password" name="" id="" placeholder="********" className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500
              focus:bg-white focus:outline-none" required />
          </div>

          <button type="submit" className="w-full block button--color hover:bg-yellow-400 focus:bg-yellow-400 text-white hover:text-black font-semibold rounded-lg
              px-4 py-3 mt-6">Log In</button>
        </form>
      </article>
    </div>
  );
}
