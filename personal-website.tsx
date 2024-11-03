import Image from 'next/image'
import Link from 'next/link'

export default function PersonalWebsite() {
  const blogPosts = [
    { title: "My Journey in Web Development", date: "2023-05-15", excerpt: "In this post, I share my experiences and lessons learned throughout my web development journey..." },
    { title: "The Importance of Responsive Design", date: "2023-05-01", excerpt: "Responsive design is crucial in today's multi-device world. Here's why it matters and how to implement it effectively..." },
    { title: "5 Must-Know JavaScript Concepts", date: "2023-04-20", excerpt: "Master these 5 essential JavaScript concepts to take your coding skills to the next level..." },
  ]

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 text-gray-800 font-sans">
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-gray-800">
            YourName
          </Link>
          <nav>
            <ul className="flex space-x-4">
              <li><Link href="/" className="hover:text-gray-600">Home</Link></li>
              <li><Link href="#about" className="hover:text-gray-600">About Me</Link></li>
              <li><Link href="#blog" className="hover:text-gray-600">Blog</Link></li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="flex-grow container mx-auto px-4 py-8">
        <section id="about" className="mb-12">
          <h2 className="text-3xl font-bold mb-4">About Me</h2>
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
            <Image
              src="/placeholder.svg?height=200&width=200"
              alt="Your Name"
              width={200}
              height={200}
              className="rounded-full"
            />
            <p className="text-lg leading-relaxed">
              Hello! I'm a passionate web developer with a keen interest in creating beautiful, functional, and user-friendly websites. With a background in computer science and years of experience in front-end development, I strive to bring innovative solutions to every project I work on.
            </p>
          </div>
        </section>

        <section id="blog">
          <h2 className="text-3xl font-bold mb-4">Recent Blog Posts</h2>
          <div className="space-y-8">
            {blogPosts.map((post, index) => (
              <article key={index} className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                <p className="text-gray-600 mb-2">{post.date}</p>
                <p className="text-gray-700">{post.excerpt}</p>
                <Link href="#" className="inline-block mt-4 text-blue-600 hover:underline">
                  Read more
                </Link>
              </article>
            ))}
          </div>
        </section>
      </main>

      <footer className="bg-gray-100 py-6">
        <div className="container mx-auto px-4 text-center text-gray-600">
          <p>&copy; 2023 Your Name. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}