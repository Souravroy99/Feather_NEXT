'use client'

import useSWR from 'swr'
import { notFound } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'

const dashboard = () => {

  const router = useRouter()
  const session = useSession();
  console.log(session)

  const fetcher = (url) => fetch(url).then((res) => res.json())
  const { data, error } = useSWR('https://jsonplaceholder.typicode.com/posts', fetcher)

  if(session.status === 'loading') {
    return <p>Loading...</p>
  }
  else if(session.status === 'unauthenticated') {
    router.push('/dashboard/login')
  }

  console.log(data)

  return (
    <div>
    </div>
  )
}

export default dashboard
