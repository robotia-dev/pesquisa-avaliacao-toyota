import React from 'react'
import Link from 'next/link'

const Header = () => {
    return (
        <header className="py-4 bg-white text-black shadow-md">
            <div className="mx-auto container flex items-center justify-between gap-4 px-4">
                <Link href="/" className="flex items-center">
                    
                        <p className="text-xl">Nissey <span className="font-bold text-red-500">Motors</span></p>
                        <img src="/logo.png" alt="Nissey Motors" style={{ maxWidth: '6rem', height: 'auto' }} />
                  
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
