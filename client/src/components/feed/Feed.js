import React from 'react'
import Share from './share/Share'
import Post from './post/Post'
import { Posts } from '../../dummyData';

const Feed = () => {
  return (
    <div className='bg-slate-100'>
      <Share />
      {
        Posts.map((item) => {
          return(
            <Post key={item.id} post={item} />
          )
        })
      }
    </div>
  )
}

export default Feed