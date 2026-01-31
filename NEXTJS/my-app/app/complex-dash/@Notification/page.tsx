import Card from '@/app/component/Card'
import React from 'react'
import Link from 'next/link'
const page = () => {
  return (
    <Card>Notification <br />
      <Link href="/complex-dash/archi">Archived</Link>
    </Card>
  )
}

export default page