import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import axios from 'axios'

const SingleBlog = () => {

  const { id } = useRouter().query

  const [ dynData, setDynData ] = useState ([])
  const { name, position } = dynData

  useEffect ( () => {
    axios.get ( `http://localhost:3000/api/users/${id}` )
    .then ( ( response ) => {
      setDynData(response.data);
    } )
  }, [id] )

  return (
    <>
        <h2>{ name }</h2>
        <p>{ position }</p>
    </>
  )
}

export default SingleBlog
