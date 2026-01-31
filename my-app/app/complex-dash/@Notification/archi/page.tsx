import Card from '@/app/component/Card'
import React from 'react'
import Link from 'next/link'
const page = () => {
  return (
    <Card> Veiw Archived Notification <br />
      <Link href="/complex-dash">Default</Link>
    </Card>
  )
}

export default page