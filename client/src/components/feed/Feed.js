import React, { useContext, useEffect, useState } from 'react'
import Share from './share/Share'
import Post from './post/Post'
import axios from "axios";
import { AuthContext } from '../../context/AuthContext'

const Feed = ({username}) => {

  const [posts, setPosts] = useState([])
  const { user } = useContext(AuthContext)

  useEffect(() => {
    const fetchPosts = async () => {
      const res = username ? await axios.get("/posts/profile/" + username) : await axios.get("/posts/timeline/" + user._id);
      setPosts(res.data)
    }
    fetchPosts()
  },[username, user._id])

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