import Link from 'next/link'
import React from 'react'
import styles from '../styles/Home.module.css';


export default function about() {
  return (
    <>
      <h1>about</h1>
      <h1 className={styles.title}>
        Go <Link href="/">main page</Link>
      </h1>
    </>
  )
}
