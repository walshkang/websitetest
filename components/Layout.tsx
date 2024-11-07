import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const router = useRouter()

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Header with Logo */}
      <header className="pt-8 pb-4 px-4 w-full flex justify-center">
        <div className="container mx-auto flex justify-center items-center">
          <Link href="/" className="flex items-center gap-3">
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
      <nav className="bg-[#f8f0ff] py-4 w-full">
        <div className="container mx-auto flex justify-center">
          <ul className="flex flex-row items-center space-x-8 text-gray-600">
            <li>
              <Link href="/" className={`hover:text-gray-800 ${router.pathname === '/' ? 'border-b-2 border-gray-400' : ''}`}>
                home
              </Link>
            </li>
            <li>
              <Link href="/blog" className={`hover:text-gray-800 ${router.pathname === '/blog' ? 'border-b-2 border-gray-400' : ''}`}>
                blog
              </Link>
            </li>
            <li>
              <Link href="/media" className={`hover:text-gray-800 ${router.pathname === '/media' ? 'border-b-2 border-gray-400' : ''}`}>
                what I&apos;m reading / watching / listening to
              </Link>
            </li>
            <li>
              <Link href="/about" className={`hover:text-gray-800 ${router.pathname === '/about' ? 'border-b-2 border-gray-400' : ''}`}>
                about
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-grow container mx-auto px-4 py-8">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-4">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 Walsh Kang. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default Layout