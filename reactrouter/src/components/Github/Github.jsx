import React from 'react'
import {useState,useEffect} from 'react'
import { useLoaderData } from 'react-router-dom'
function Github() {
    // const [data,setData]=useState([])
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/Pinal2911')
    //     .then(response =>response.json())
    //     .then(data =>{
    //         setData(data)
    //     })
    // },[])
    const data=useLoaderData()
  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>
      Github Followers : {data.followers}
      <img src={data.avatar_url} alt="git icture" width={300}></img>
    </div>
  )
}

export default Github

export const githubInfoLoader =async()=> {
    const respose = await fetch ('https://api.github.com/users/Pinal2911')
    return respose.json()
}
