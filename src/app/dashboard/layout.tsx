import Link from "next/link";

export default function Layaout(props : any){
    return(
        <div className="flex flex-col items-center container">
            <header className=" h-28 bg-zinc-800 container flex items-center justify-between px-10 mb-5">
            
            <div className="w-20 h-20 bg-red-700 cursor-pointer duration-200 rounded-full hover:bg-green-600 md:block hidden"></div>
                <nav className="w-[300] flex justify-center gap-3 mx-auto">
                    <Link href="/dashboard" className="bg-green-700 p-2 rounded-xl px-5 hover:bg-blue-600 duration-200">Home</Link >
                    <Link href="/dashboard/produto" className="bg-green-700 p-2 rounded-xl px-5 hover:bg-blue-600 duration-200">Produto</Link >
                    <Link href="/" className="bg-red-700 p-2 rounded-xl px-5 hover:bg-blue-600 duration-200">Sair</Link >
                </nav>
                <div className="flex items-center justify-center gap-5">
                
                <button className="bg-slate-950 p-2 rounded-full w-16 h-16 md:block hidden
                    opacity-80 hover:bg-green-600 duration-200 relative
                ">
                    <div className="
                    flex justify-center items-center font-semibold 
                    bg-red-600 w-7 h-7 text-sm rounded-full absolute top-0 -right-2
                    ">10</div>
                </button>
            </div>
        </header>
        { props.children }
        </div>
    )
}