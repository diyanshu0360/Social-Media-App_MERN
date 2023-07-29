import React from 'react'

const Closefriend = ({user}) => {
  return (
    <div>
        <li className='flex gap-4 p-2 m-2'> 
          <img className='w-8 h-8 border border-black rounded-full' src={user.profilePicture} alt="No" />
          <p className='text-sm self-center'>{user.username}</p>
        </li>
    </div>
  )
}

export default Closefriend