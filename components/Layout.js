import Link from "next/link"

const Navbar = () => {

    return (
        <div className="w-full h-20 text-white">
            <div className="py-2"> 
                <h1 className="text-2xl text-white font-black">Premleague</h1>
            </div>
            <div className="flex gap-x-4 text-lg font-medium"> 
                <Link href="/">
                    <a>Home</a>
                </Link>
                <Link href="/about">
                    <a>About</a>
                </Link>
            </div>
        </div>
    )
}



const Footer= () => {

    const date = new Date()

    return (
        <div className="w-full h-20 text-white mx-auto py-10">
            <div className="flex justify-center gap-x-4 text-lg font-medium"> 
                <Link href="/">
                    <a className="font-black">Premleague</a>
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
        <div className="px-4 py-4">
            <Navbar />
            <div className="py-2">
                {children}
            </div>
            <Footer />
        </div>
    )
}

export default Layout
