import Image from 'next/image'
import React from 'react'

export default function Header() {
  return (
    <div className='flex flex-col  mx-auto mt-8 items-center'>
      <Image
        src="/images/profile.png" // Route of the image file
        height={124} // Desired size with correct aspect ratio
        width={124} // Desired size with correct aspect ratio
        alt="Your Name"
        className='rounded-full w-[120px]'
      />

      <p className='mt-4 w-[420px] text-center text-gray-600'>I am software developer from Ankara specialized on Frontend Development with React, Next.js and Tailwind.</p>
    </div>
  )
}
