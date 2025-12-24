'use client'

import useSWR from 'swr'
import { notFound } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { useSession } from 'next-auth/react'

const dashboard = () => {

  /*
  const [isLoading, setIsLoading] = useState(true) ;
  const [error, setError] = useState(false) ;
  const [data, setData] = useState([]) ;

  useEffect(() => {
    const getData = async () => {
      const res = await fetch(`https://jsonplaceholder.typicode.com/posts`) 

      if(!res.ok) {
        setError(true);
        return
      }
      
      setData(await res.json())
      setIsLoading(false) ;
    }

    getData() 
  },[])
  */

  const session = useSession();
  // console.log(session)

  const fetcher = (url) => fetch(url).then((res) => res.json())
  const { data, error } = useSWR('https://jsonplaceholder.typicode.com/posts', fetcher)

  console.log(data)

  return (
    <div>
    </div>
  )
}

export default dashboard
