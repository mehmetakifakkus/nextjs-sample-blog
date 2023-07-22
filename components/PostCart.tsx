import React from 'react'
import { PostProps } from './PostList'
import { DateFormatter } from '../lib/DateFormatter'

const PostCartHeader = ({ id, className }) => (
  <img src={`https://picsum.photos/seed/${id}/500/200`} className={className} alt="Random Post Cart Image"></img>
)

export default function PostCart({ id, title, date, topics }: PostProps) {
  return (
    <div key={id} className='group flex flex-col max-w-[360px] rounded-lg border border-gray-400 h-80 w-full shadow-xl shadow-gray-400 transition-all duration-300 hover:scale-[1.03] hover:shadow-2xl dark:shadow-black'>
      <div className='bg-slate-600 w-full rounded-t-md'>
        <PostCartHeader id={id + date} className={"rounded-t-lg object-cover h-36"} />
      </div>
      <div className='relative flex flex-col px-3 pt-4 h-44'>
        <span className='text-xl text-gray-700 group-hover:text-black'>{title}</span>
        <div className='flex gap-1 absolute bottom-12 w-full flex-wrap'>
          {
            topics.map((topic, index) => (
              <span key={index} className='text-gray-600 text-xs whitespace-nowrap border rounded-full border-gray-300 py-1 px-3 '>{topic.replace('-', ' ')}</span>
            ))
          }
        </div>
        <span className='absolute bottom-2 left-4 text-gray-500 group-hover:text-gray-700 text-sm'>
          Published: {DateFormatter.toTextDate(date)}
        </span>
      </div>
    </div>
  )
}
