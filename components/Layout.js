import Link from "next/link"

const Navbar = () => {

    return (
        <div className="w-full h-20 text-white">
            <div className="py-2 px-3"> 
                <h1 className="text-2xl text-white font-black">FixComp ⚽️ </h1>
            </div>
            <div className="flex gap-x-5 text-lg font-bold"> 
                <Link href="/">
                    <a className="px-3 py-1 hover:bg-slate-800 hover:py-1 hover:px-3 transition ease-in-out duration-100 rounded-lg">Home</a>
                </Link>
                <Link href="/scoreboard">
                    <a className="px-3 py-1 hover:bg-slate-800 hover:py-1 hover:px-3 transition ease-in-out duration-100 rounded-lg">Scoreboard</a>
                </Link>
                <Link href="/about">
                    <a className="px-3 py-1 hover:bg-slate-800 hover:py-1 hover:px-3 transition ease-in-out duration-100 rounded-lg">About</a>
                </Link>
            </div>
        </div>
    )
}



const Footer= () => {

    const date = new Date()

    return (
        <div className="w-full h-20 text-white mx-auto py-10 absolute bottom-0 z-50">
            <div className="flex justify-center gap-x-4 text-lg font-medium"> 
                <Link href="/">
                    <a className="font-black">FixComp</a>
                </Link>
                <p> &copy; {date.getFullYear()} All Rights Reserved.</p>
                <Link href="https://bawuahboakye.com">
                    <a className="text-purple-200 block"> &lt;/bawuahboakye&gt;</a>
                </Link>
            </div>
        </div>
    )
}

const Layout = ({children}) => {
    
    return (
        <div className="w-full px-4 py-4 relative">
            <Navbar />
            <div className="py-2">
                {children}
            </div>
            <Footer />
        </div>
    )
}

export default Layout
