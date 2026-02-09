import useUser from '@/hooks/useUser'
import { Stack } from 'expo-router'

const AuthLayout = () => {
  const {user} = useUser()

  console.log(user)
  return (
    <Stack  />
  )
}

export default AuthLayout

