'use client'

import useSWR, { mutate } from 'swr'
import styles from './page.module.css'
import React, { useEffect, useState } from 'react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'

const dashboard = () => {

  const router = useRouter()
  const session = useSession();

  const fetcher = (url) => fetch(url).then((res) => res.json())
  const { data, mutate, error, isLoading } = useSWR(`/api/posts?username=${session?.data?.user?.name}`, fetcher)


  if (session.status === 'loading') {
    return <p>Loading...</p>
  } 
  else if (session.status === 'unauthenticated') {
    router.push('/dashboard/login')
  }

  console.log("Session: ", session)
  console.log("Data: ", data)


  const handleSubmit = async (e) => {
    e.preventDefault();
    const title = e.target[0].value
    const desc = e.target[1].value
    const img = e.target[2].value
    const content = e.target[3].value

    try {
      await fetch(`api/posts`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({title, desc, img, content, username: session.data.user.name})
      });

      mutate() ;
      e.target.reset();
    } 
    catch (error) {
      console.log(`Dashboard/page.jsx: ${error}`)
    }
  }

  const handleDelete = async (id) => {
    try {
      const res = await fetch(`api/posts/${id}`, {
        method: "DELETE"
      });

      console.log(`RES: ${res}`)

      mutate();

    } 
    catch (error) {
        console.log(`Dashboard/page.jsx/handleDelete: ${error}`)
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.posts}>
        { isLoading ? "Loading..." : 
          data?.map((post) => {
            return (
            <div className={styles.post} key={post._id}>
              <div className={styles.imgContainer}>
                <Image src={post?.img} alt="" width={200} height={100} />
              </div>
              <h2 className={styles.postTitle}>{post.title}</h2>
              <span className={styles.delete} onClick={() => handleDelete(post._id)}>X</span>
            </div>)
          })
        }
      </div>

      <form className={styles.new} onSubmit={handleSubmit}>
        <h1>Add New Post</h1>
        <input type="text" placeholder='Title' className={styles.input} />
        <input type="text" placeholder='Description' className={styles.input} />
        <input type="text" placeholder='Image URL' className={styles.input} />
        <textarea placeholder="Content..." className={styles.textArea} rows="7" cols="30"></textarea>
        <button className={styles.button}>Send</button>
      </form>
    </div>
  )
}

export default dashboard
