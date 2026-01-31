import Link from 'next/link'
import React from 'react'

const page = () => {
  const products = 100
  return (
    <div>
        <h1>Product name</h1>
         <Link href={'/products/1'}>Product 1</Link>
         <br />
         <Link href={'/products/2'}>Product 2</Link>
         <br />
         <Link href={`/products/${products}`}  replace>Product 3</Link>
    </div>
  )
}

export default page