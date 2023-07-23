import Link from 'next/link'
import React, { useContext } from 'react'
import PostCart from './PostCart'
import Footer from './Footer'
import TopicContext from '../context/TopicContext'

export interface PostProps {
  id: string,
  title: string,
  date: string,
  topics: string[]
}

export default function PostList({ postListData }) {

  const { selectedTopic } = useContext(TopicContext);

  return (
    <div className='flex flex-col mb-8 max-w-[1200px] items-center mx-auto px-8'>
      <div className='grid mt-12 mb-6 gap-x-8 gap-y-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
        {postListData.filter((post: PostProps) => {
          if (selectedTopic === null) {
            return true;
          }
          return post.topics.includes(selectedTopic)
        }).map((post: PostProps) =>
          <Link key={post.id} href={`/posts/${post.id}`}>
            <PostCart id={post.id} title={post.title} date={post.date} topics={post.topics} />
          </Link>
        )}
      </div>
      <Footer href="/" title="Main page" />
    </div>
  )
}
