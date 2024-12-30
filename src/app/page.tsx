import Link from "next/link";

export default function Login() {
  return (
    <div className="pt-10 w-full p-10 md:pt-10 md:w-[450] mx-auto">
        <form className="flex flex-col gap-5 bg-zinc-900 p-10 rounded-3xl shadow-2xl shadow-violet-600 ">
            <h1 className="text-3xl font-semibold mb-5 mt-5 tracking-widest">Login</h1>

            <input type="text" placeholder="email" className="rounded-md outline-none text-sm p-3 border-2 border-violet-500
              tracking-widest w-full bg-zinc-800 px-5 "/>
            <input type="text" placeholder="senha" className="rounded-md outline-none p-3 border-2 border-violet-500
              tracking-widest w-full bg-zinc-800 px-5"/>

            <div className="flex gap-5 items-center justify-center mt-3">
              <Link href="/dashboard">
                <button className="bg-green-600 p-2 px-7 rounded-md hover:bg-violet-600 duration-200
                ">Entrar</button>
              </Link>
              <Link href="/dashboard">
                <button className="bg-zinc-700 p-2 px-7 rounded-md hover:bg-violet-600 duration-200
                ">Novo</button>
              </Link>
            </div>
        </form>
    </div>
  );
}
