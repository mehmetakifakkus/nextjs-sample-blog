import Head from 'next/head';
import Link from 'next/link';
import React from 'react'
import { getPostData, getPostList } from '../../lib/posts'
import { DateFormatter } from '../../lib/DateFormatter';

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

export default function Post({ postData }) {

  return (
    <>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <h1 className='italic'>{postData.title}</h1>
      <h3>{DateFormatter.toTextDate(postData.date)}</h3>
      <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      <h2>
        <Link href="/posts">Back to posts</Link>
      </h2>
    </>
  )
}
