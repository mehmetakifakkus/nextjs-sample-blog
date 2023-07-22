import Head from 'next/head'
import Link from 'next/link'
import React from 'react'
import moment from 'moment'

import { getPostList, getSortedPostsData } from '../../lib/posts'
import { DateFormatter } from '../../lib/DateFormatter'

interface PostIdProps {
  id: string,
  title: string,
  date: string
}

export async function getStaticProps({ params }) {
  const postListData = getSortedPostsData()
  return {
    props: {
      postListData
    }
  }
}

export default function ListPosts({ postListData }) {
  return (
    <>
      <Head>
        <title>All Posts</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>All Post List</h1>
      <ul>
        {postListData.map((postId: PostIdProps) => <li>
          <div key={postId.id} style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '1rem' }}>
            <h3>
              <Link href={`/posts/${postId.id}`}>{postId.title}</Link>
            </h3>
            ({DateFormatter.toTextDate(postId.date)})
          </div>
        </li>)}
      </ul>
      <h2 style={{ marginTop: '2.5rem' }}>
        <Link href="/">Back to home</Link>
      </h2>
    </>
  )
}
