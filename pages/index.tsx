import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Header with Logo */}
      <header className="pt-8 pb-4 px-4 w-full flex justify-center border border-red-500">
        <div className="container mx-auto flex justify-center items-center border border-blue-500">
          <Link href="/" className="flex items-center gap-3 border border-green-500">
            <Image
              src="/bird logo.jpg"
              alt="Bird Logo"
              width={40}
              height={40}
              className="w-10 h-10"
            />
            <span className="text-xl text-gray-800">Walsh Kang</span>
          </Link>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-[#f8f0ff] py-4 w-full border border-yellow-500">
        <div className="container mx-auto flex justify-center border border-purple-500">
          <ul className="flex flex-row items-center space-x-8 text-gray-600 border border-pink-500">
            <li>
              <Link href="/" className="hover:text-gray-800 border-b-2 border-gray-400">
                home
              </Link>
            </li>
            <li>
              <Link href="/blog" className="hover:text-gray-800">
                blog
              </Link>
            </li>
            <li>
              <Link href="/media" className="hover:text-gray-800">
                media
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-gray-800">
                about
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Welcome to Walsh Kang's Personal Website</h1>
        <p className="text-gray-600 mb-4">
          This is a placeholder for the main content of the website. You can add more sections and content here.
        </p>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-4">
        <div className="container mx-auto text-center">
          <p>&copy; 2023 Walsh Kang. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

