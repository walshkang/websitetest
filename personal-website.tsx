import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Header with Logo */}
      <header className="pt-8 pb-4 px-4">
        <div className="container mx-auto flex flex-col items-center justify-center">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/placeholder.svg?height=40&width=40"
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
      <nav className="bg-[#f8f0ff] py-4">
        <div className="container mx-auto">
          <ul className="flex justify-center space-x-8 text-gray-600">
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
                what I&apos;m reading / watching / listening to
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-gray-800">
                about me
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-grow container mx-auto px-4 py-16">
        <div className="flex flex-col md:flex-row items-center justify-center gap-16 max-w-6xl mx-auto">
          {/* Circular Illustration */}
          <div className="w-[500px] h-[500px] relative">
            <Image
              src="/placeholder.svg?height=500&width=500"
              alt="Sunset illustration with airplane"
              width={500}
              height={500}
              className="rounded-full"
            />
          </div>

          {/* Introduction Text */}
          <div className="max-w-xl">
            <h1 className="text-2xl mb-6">
              I&apos;m a Korean-American living in Brooklyn, New York.
            </h1>
            <p className="text-2xl">
              This website is a way for me to practice, fail forward, and learn some things on the way.
            </p>
          </div>
        </div>
      </main>
    </div>
  )
}
