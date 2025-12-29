'use client'

import Link from 'next/link'
import styles from './page.module.css'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

const Register = () => {
  const[err, setErr] = useState(false)
  const router = useRouter();

  const handleSubmit = async (e) => {
    setErr(false);
    e.preventDefault()

    const name = e.target.name.value
    const email = e.target.email.value
    const password = e.target.password.value

    try {

      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({name, email, password})
      });

      if (!res.ok) {
        setErr(true);
        return;
      }

      router.push('/dashboard/login?success=Account has been created')
    } 
    catch (error) {
      setErr(true);
      console.log(`Error during registration: ${error}`)
    }
  }

  return (
    <div className={styles.container}>
        <form className={styles.form} onSubmit={handleSubmit}>
            <input name="name" className={styles.input} placeholder="Username" type="text" required/>
            <input name="email" className={styles.input} placeholder="email" type="email" required/>
            <input name="password" className={styles.input} placeholder="Password" type="password" required/>

            <button className={styles.button}>Register</button>
        </form>
        
        {err && <p className={styles.error}>Something went wrong!</p>}
        <Link href={'/dashboard/login'}>Login with an existing account</Link>
    </div>
  )
}

export default Register
