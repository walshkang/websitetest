import React from 'react'
import Layout from '../components/Layout'
import Image from 'next/image'
import Link from 'next/link'

export default function Media() {
  return (
    <Layout>
      <h1 className="text-3xl font-bold text-gray-800 mb-4">what I&apos;m reading / watching / listening to</h1>
      <p className="text-gray-600 mb-4">
        This is a placeholder for the media content. You can add more sections and content here.
      </p>
    </Layout>
  )
}
