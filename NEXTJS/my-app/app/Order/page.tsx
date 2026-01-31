
"use client"
import { useRouter } from 'next/navigation'
const page = () => {
 const router = useRouter()

  const handleClick = () => {
    console.log("order is here")
    router.()
  }
  return (
    <div>
        <h1>Order place</h1>
        <button onClick={handleClick}>Back Home</button>
    </div>
  )
}

export default page