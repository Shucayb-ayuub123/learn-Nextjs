import React from 'react'
import type { ReactNode } from 'react'
const ProductLayout = ({children} : {children :ReactNode}) => {

   const generateRandom = (count: number) => {
      return Math.floor(Math.random() * count);
    };
  
    const random = generateRandom(3);
  
    if (random === 1) {
      throw new Error("Error loading review");
    }
  
  return (
    <>
    {children}
    <h1>Features Product</h1>
    </>
  )
}

export default ProductLayout