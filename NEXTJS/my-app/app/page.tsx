import React from 'react'
import Link from 'next/link'

const page = () => {
  return (
    <>
     <h1>Home page</h1>
      <Link href={'/dashbaord'}> Dashboard </Link>
     </>
  )
}

export default page