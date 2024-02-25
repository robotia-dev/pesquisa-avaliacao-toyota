import React from 'react'

const Footer = () => {
    return (
        <footer className="py-1 text-center bg-gray-800 text-white text-sm">
            <div className="container mx-auto">
                <p>{new Date().getFullYear()} &copy; Felipe Suknaic</p>
            </div>
        </footer>
    )
}

export default Footer