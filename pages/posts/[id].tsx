import Head from 'next/head';
import React from 'react'
import { getPostData, getPostList } from '../../lib/posts'
import Post from '../../components/Post'

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id)
  return {
    props: {
      postData
    }
  }
}

export async function getStaticPaths() {
  const paths = getPostList()
  return {
    paths,
    fallback: false
  }
}

export default function PostIndex({ postData }) {
  return (
    <>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <Post id={postData.id} title={postData.title} date={postData.date} contentHtml={postData.contentHtml} />
    </>
  )
}
