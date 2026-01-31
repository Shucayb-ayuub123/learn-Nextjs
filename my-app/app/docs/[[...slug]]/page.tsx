import React from 'react'
import { Metadata } from 'next'

export const metadata: Metadata =  {
    title:{
      absolute   : "How docs are here"
    }
}
const page = async ({params} : {params: {slug : string[]}}) => {
    const{slug} = await params
  
    if (slug?.length == 2) {
        return (
          <h1>veiw docs for feature {slug[0]} and concept {slug[1]}</h1>
        )
    } else if (slug?.length ===  1) {
        return (
                   <h1>veiw docs for feature {slug[0]}</h1>
        )
    }

    return <h1>Docs home page</h1>
  
}

export default page