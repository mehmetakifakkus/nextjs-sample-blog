import React from 'react'
import { DateFormatter } from '../lib/DateFormatter'
import Footer from './Footer'

const PostHeader = ({ id }) => (
  <img src={`https://picsum.photos/seed/${id}/1200/360`} alt="Random Post Image" className='w-full h-52 object-cover'></img>
)

export default function Post({ id, title, date, contentHtml }) {
  return (
    <>
      <PostHeader id={id + date} />
      <div className='p-4 pt-12 max-w-[600px] mx-auto'>
        <h1 className='text-3xl mb-2'>{title}</h1>
        <h3 className='text-gray-500 mb-4'>{DateFormatter.toTextDate(date)}</h3>
        <div className="mx-auto" dangerouslySetInnerHTML={{ __html: contentHtml }} />

        <Footer href="/posts" title="Go to Posts" />

      </div>
    </>
  )
}
