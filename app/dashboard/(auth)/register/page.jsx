'use client'

import Link from 'next/link'
import styles from './page.module.css'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

const register = () => {
  const[err, setErr] = useState(false)
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault()
    const name = e.target[0].value
    const email = e.target[1].value
    const password = e.target[2].value

    try {

      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({name, email, password})
      });

      if(res.ok) {
        router.push('/dashboard/login?success=Account has been created')
      }
    } 
    catch (error) {
      setErr(true);
      console.log(`Error during registration: ${error}`)
    }
  }

  return (
    <div className={styles.container}>
        <form className={styles.form} onSubmit={handleSubmit}>
            <input className={styles.input} placeholder="Username" type="text" required/>
            <input className={styles.input} placeholder="email" type="email" required/>
            <input className={styles.input} placeholder="Password" type="password" required/>

            <button className={styles.button}>Register</button>
        </form>
        {err && "Something went wrong!"}
        <Link href={'/dashboard/login'}>Login with an existing account</Link>
    </div>
  )
}

export default register
