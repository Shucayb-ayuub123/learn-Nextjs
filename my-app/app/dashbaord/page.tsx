import React from 'react'

import { Metadata } from 'next'
import Link from 'next/link';

export const metadata:Metadata = {
  title : "dashboard",
};
const Dashboard = () => {
  return (
    <div>
        <h1>welcom dashboard</h1>
        
        <Link href={'/'}>Home</Link>
    </div>
  )
}

export default Dashboard