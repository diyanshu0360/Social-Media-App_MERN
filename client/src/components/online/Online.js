import React from 'react'

const Online = ({user}) => {
  return (
    <div>
        <div className='p-3 flex gap-3'>
          <img className='border border-black w-8 h-8 rounded-full' src={user.profilePicture} alt="No" />
          <div className='bg-green-500 rounded-full w-3 h-3 absolute' />
          <p className='text-sm self-center'>{user.username}</p>
        </div>
    </div>
  )
}

export default Online