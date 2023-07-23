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

      <p className='mt-4 w-[440px] text-center text-sm text-gray-500'>I am software developer from Ankara, Turkey specialized on Frontend Development with Typescript, React, Next.js and Tailwind.</p>
    </div>
  )
}
