import React, { useEffect, useState } from 'react'
import Share from './share/Share'
import Post from './post/Post'
import axios from "axios";

const Feed = ({username}) => {

  const [posts, setPosts] = useState([])

  useEffect(() => {
    const fetchPosts = async () => {
      const res = username ? await axios.get("/posts/profile/" + username) : await axios.get("/posts/timeline/64c3f943a190016274ee71a6");
      setPosts(res.data)
    }
    fetchPosts()
  },[username])

  return (
    <div className='bg-slate-100'>
      <Share />
      {
        posts.map((item) => {
          return(
            <Post key={item._id} post={item} />
          )
        })
      }
    </div>
  )
}

export default Feed