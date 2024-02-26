import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Header = () => {
    return (
        <header className=" w-screen p-5 bg-white text-black shadow-md">
            <div className="flex items-center justify-between">
                <Link href="/" className="flex items-center">
                    <p className="text-xl">Nissey <span className="font-bold text-red-500">Motors</span></p>
                </Link>

                <nav className="space-x-6">
                    <Link href="/about">
                        Sobre
                    </Link>
                    <Link href="/contact">
                        Contato
                    </Link>
                </nav>
            </div>
        </header>
    )
}

export default Header
