import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

export const Post = ({uniquePost,setUniquePost,baseURL}) => {
   
    const {id}=useParams()
    // console.log(id);
    useEffect(()=>{
        fetch(`${baseURL}/posts/${id}`).then((res)=>res.json()).then((res)=>setUniquePost(res))
    },[])
  return (
    <div>
    {uniquePost && 
        <h1>{uniquePost.title}</h1>
    }
    </div>
  )
}


