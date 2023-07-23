import Head from 'next/head'
import React from 'react'

import { getPostList, getSortedPostsData } from '../lib/posts'
import { DateFormatter } from '../lib/DateFormatter'
import PostList from '../components/PostList'
import Header from '../components/Header'
import Topics from '../components/Topics'

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
      <Header />
      <Topics postListData={postListData} />
      <PostList postListData={postListData} />
    </>
  )
}
