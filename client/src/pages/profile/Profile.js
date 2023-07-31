import React, { useEffect, useState } from 'react'
import Header from '../../components/header/Header'
import Leftbar from '../../components/leftbar/Leftbar'
import Img1 from '../../assets/post/9.jpeg'
import User from '../../assets/person/6.jpeg'
import Feed from '../../components/feed/Feed'
import axios from 'axios'
import { useParams } from 'react-router'

const Profile = () => {

    const [user, setUser] = useState({})
    const username = useParams().username;

    useEffect(() => {
        const fetchUser = async () => {
        const res = await axios.get(`/users?username=${username}`)
            setUser(res.data)
        };
        fetchUser();
    },[username])


  return (
    <div>
        <Header />
        <div className='flex justify-between'>
          <Leftbar />
          <div className='grow'>
            <div className='border border-l-0'>
                <img className='w-full h-44 absolute' src={user.coverPicture || Img1} alt="" />
                <div className='relative mt-[7em]'>
                <img className='border-slate-600 border-2 rounded-full ms-16 w-32 h-32 ' src={user.profilePicture || User} alt="" />
                    <div className='ms-16 m-5'>
                        <p className='font-bold text-xl mt-1 mb-1'>{user.username}</p>
                        <p className='text-slate-500 mt-1 mb-1'>{user.city}, {user.from}</p>
                        <p className='text-sm w-96'>{user.desc}</p>
                    </div>
                </div>
            </div>
            <div>
                <p className='text-slate-500 font-bold m-3 ms-10 p-5 pb-0 text-lg'>User Friends</p>
                <div className='ms-16 me-16 p-5 flex flex-wrap pt-2'>
                    <div className='m-3 w-28 p-2'>
                        <img className='w-24 h-24 rounded-lg border mt-2 mb-2' src={User} alt="" />
                        <p className='text-sm mt-2 mb-2'>John Carter</p>
                    </div>
                    <div className='m-3 w-28 p-2'>
                        <img className='w-24 h-24 rounded-lg border mt-2 mb-2' src={User} alt="" />
                        <p className='text-sm mt-2 mb-2'>John Carter</p>
                    </div>
                    <div className='m-3 w-28 p-2'>
                        <img className='w-24 h-24 rounded-lg border mt-2 mb-2' src={User} alt="" />
                        <p className='text-sm mt-2 mb-2'>John Carter</p>
                    </div>
                    <div className='m-3 w-28 p-2'>
                        <img className='w-24 h-24 rounded-lg border mt-2 mb-2' src={User} alt="" />
                        <p className='text-sm mt-2 mb-2'>John Carter</p>
                    </div>
                </div>
            </div>
            <div> 
                <div className='ms-16 me-16 p-5 pt-2'>
                    <Feed username={username} />
                </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Profile