import React from 'react'
import Header from '../../components/header/Header'
import Leftbar from '../../components/leftbar/Leftbar'
import Img1 from '../../assets/post/9.jpeg'
import User from '../../assets/person/6.jpeg'

const Profile = () => {
  return (
    <div>
        <Header />
        <div className='flex justify-between'>
          <Leftbar />
          <div className='grow'>
            <div className='border border-l-0'>
                <img className='w-full h-44 absolute' src={Img1} alt="" />
                <div className='relative mt-[7em]'>
                <img className='border-slate-600 border-2 rounded-full ms-16 w-32 h-32 ' src={User} alt="" />
                    <div className='ms-16 m-5'>
                        <p className='font-bold text-xl mt-1 mb-1'>Smitha Kolan</p>
                        <p className='text-slate-500 mt-1 mb-1'>New York, Madrid</p>
                        <p className='text-sm w-96'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, illo earum nemo quis </p>
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
          </div>
        </div>
    </div>
  )
}

export default Profile