import Head from 'next/head';
// import styles from '../styles/Home.module.css';
import Link from 'next/link';
import { getSortedPostsData } from '../lib/posts';
import Image from 'next/image';
import Header from '../components/header';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    <div >
      <Head>
        <title>Home page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <Link href="/posts" >
        <h3>Posts &rarr;</h3>
        <p>Find in-depth information about Next.js features and API.</p>
      </Link>

      <section>
        <h2 className='italic'>Blog</h2>
        <ul >
          {allPostsData?.map(({ id, date, title }) => (
            <li key={id}>
              {title}
              <br />
              {id}
              <br />
              {date}
            </li>
          ))}
        </ul>
      </section>

      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel" />
        </a>
      </footer>
    </div>
  )
}
