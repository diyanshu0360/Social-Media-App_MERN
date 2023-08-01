import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import likeIcon from '../../../assets/icons/like_icon.png';
import cmtIcon from '../../../assets/icons/comment_icon.png';
import bookmarkIcon from '../../../assets/icons/bookmark_icon.png';
import dotsIcon from '../../../assets/icons/dots_icon.png';
import axios from 'axios';
import { AuthContext } from '../../../context/AuthContext';

const Post = ({post}) => {

  const [like, setLike] = useState(post.likes.length);
  const [islike, setisLike] = useState(false);
  const [user, setUser] = useState({})
  const { user: currentUser } = useContext(AuthContext)
  const PF = process.env.NODE_IMG_FOLDER;

  useEffect(() => {
    setisLike(post.likes.includes(currentUser._id))
  }, [currentUser._id, post.likes])

  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get(`/users?userID=${post.userID}`)
      setUser(res.data)
    }
    fetchUser()
  },[post.userID])

  const likehandler = () => {
    try {
      axios.put(`/posts/${post._id}/like`, { userID: currentUser._id })
    } catch (error) {
      console.log(error)
    }
    setLike(islike ? like-1 : like+1);
    setisLike(!islike)
  }

  return (
    <div className='p-4'>
      <div className='ms-4 me-4 bg-white border rounded-lg'>
        <div className='p-4 pb-0 flex justify-between'>
          <div className='flex gap-3'>
            <Link to={`profile/${user.username}`}>
              <img className='border border-black rounded-full w-8 h-8 self-center' src={PF+user.profilePicture} alt="No" />
            </Link>
            <div className='self-center'>
              <p className='text-md self-center text-[15px]'>{user.username}</p>
              <p className='text-[12px] text-slate-500 self-center'>{post.createdAt}</p>
            </div>
          </div>
          <div className='self-center flex gap-2'>
            <img className='w-5 h-5' src={bookmarkIcon} alt="" />
            <img className='w-5 h-5' src={dotsIcon} alt="" />
          </div>
        </div>
        <div className='p-4 pb-3 text-sm'>
          <p>{post?.desc}</p>
        </div>
        <div className='flex justify-center'>
          <img src={`http://localhost:8080/images/${post.img}`} alt="" className='w-full h-80' />
        </div>
        <div className='p-3 flex'>
          <div className='flex ps-4 pe-4 ms-3 me-3 gap-2'>
          <img className='w-5 h-5 cursor-pointer' src={likeIcon} alt="" onClick={likehandler} />
          <p className='text-sm'>{like} Liked post</p>
          </div>
          <div className='flex ps-4 pe-4 ms-3 me-3 gap-2'>
          <img className='w-5 h-5 cursor-pointer' src={cmtIcon} alt="" onClick={likehandler} />
          <p className='text-sm'>{like} Comment</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Post