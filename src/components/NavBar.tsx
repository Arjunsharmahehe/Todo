import Link from "next/link";

export default function Navbar(){
    return (
        <nav className="bg-neutral-950 border-b-4 border-b-neutral-800">
        <div className="flex justify-between max-w-7xl mx-auto px-4 py-2 sm:px-6 lg:px-8">
            <Link href="/dashboard"
                  className="font-bold text-3xl">
                Dashboard
            </Link>
            {/* Authentication Buttons */}
            <div className="ml-4 flex gap-3 items-center md:ml-6">
                <Link href="/login"
                      className="flex items-center bg-neutral-800 hover:bg-neutral-600 hover:border-neutral-600 border-3 border-neutral-800 text-white font-bold py-1 px-4 rounded-md transition-colors duration-300 ease-in-out">
                    Login
                </Link>
                <Link href='/logout'
                      className="flex items-center bg-neutral-950 hover:bg-neutral-900 border-3 border-neutral-800 text-white font-bold py-1 px-4 rounded-lg transition-colors duration-300 ease-in-out">
                    Logout
                </Link>
            </div>
        </div>
      </nav>
    )
}