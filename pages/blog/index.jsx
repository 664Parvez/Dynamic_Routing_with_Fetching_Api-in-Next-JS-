import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import axios from 'axios'

const Blog = () => {

  const [ data, setData ] = useState ([])

  useEffect ( () => {
    axios.get ("http://localhost:3000/api/users")
    .then ( ( response ) => {
      setData (response.data)
    } )

  }, [] )

  return (
    <>
      {
        data.map( ( items ) => {
          return (
            <div key={ items.id }>
              <Link href={ `/blog/${items.id}` }>
                <a><h3>{ items.name }</h3></a>
              </Link>
            </div>
          )
        } )
      }
    </>
  )
}

export default Blog