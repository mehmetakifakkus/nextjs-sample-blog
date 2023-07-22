import Link from 'next/link'
import React from 'react'

export default function Footer({ href, title }) {
  return (
    <div className='mt-8'>
      <Link href={href}>
        <div className='border rounded-2xl border-gray-800 w-40 px-4 py-1 hover:text-white hover:bg-black'>
          {`⬅ ${title}`}
        </div>
      </Link>
    </div>
  )
}
