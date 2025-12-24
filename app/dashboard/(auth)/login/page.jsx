'use client'

import { signIn, useSession } from 'next-auth/react'
import styles from './page.module.css'
import { useRouter } from 'next/navigation'

const Login = () => {

  const session = useSession()
  const router = useRouter()

  if(session.status === 'loading') {
    return <p>Loading...</p>
  }
  else if(session.status === 'authenticated') {
    router.push('/dashboard')
  }
  

  const handleSubmit = async (e) => {
    e.preventDefault()
    const email = e.target[0].value
    const password = e.target[1].value

    signIn('credentials', {email, password})
  }

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit}>
          <input className={styles.input} placeholder="email" type="email" required/>
          <input className={styles.input} placeholder="Password" type="password" required/>

          <button className={styles.button}>Login</button>
      </form>

      <button onClick={() => signIn("google")}>Login with Google</button>
    </div> 
  )
}

export default Login
