import useUser from '@/hooks/useUser'
import React from 'react'

const userOnly = ({children} : {children:React.ReactNode}) => {

    const {user , AuthChecked} = useUser()
    
    if (condition) {
        
    }


  return (
    <div>userOnly</div>
  )
}

export default userOnly