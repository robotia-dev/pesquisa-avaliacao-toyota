import React from 'react'
import Header from '../Header'
import Footer from '../Footer'

const Layout = ({ children }) => {
    return (
        <div className="flex flex-col min-h-screen antialiased">
            <Header />
            <main className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 bg-gray-50 ">
                {children}
            </main>
            <Footer />
        </div>
    )
}

export default Layout