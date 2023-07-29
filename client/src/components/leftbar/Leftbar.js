import React from 'react'
import { Users } from '../../dummyData';
import Closefriend from '../closefriend/Closefriend'
import homeIcon from '../../assets/icons/home_icon.png'
import msgIcon from '../../assets/icons/message_icon.png'
import commIcon from '../../assets/icons/communities_icon.png'
import marketIcon from '../../assets/icons/store_icon.png'
import newsIcon from '../../assets/icons/newspaper_icon.png'

const Leftbar = () => {
  return (
    <div className='border p-3 border-t-0 w-60'>
      <ul className='p-3'>
        <li className='hover:border p-1 m-1 mt-2 mb-2 flex gap-2 rounded-sm'>
          <img className='h-5 w-5 self-center' src={homeIcon} alt="" />
          <p className='text-slate-600 self-center'>Feed</p>
        </li>
        <li className='hover:border p-1 m-1 mt-2 mb-2 flex gap-2 rounded-sm'>
          <img className='h-5 w-5 self-center' src={msgIcon} alt="" />
          <p className='text-slate-600 self-center'>Chats</p>
        </li>
        <li className='hover:border p-1 m-1 mt-2 mb-2 flex gap-2 rounded-sm'>
          <img className='h-5 w-5 self-center' src={commIcon} alt="" />
          <p className='text-slate-600 self-center'>Community</p>
        </li>
        <li className='hover:border p-1 m-1 mt-2 mb-2 flex gap-2 rounded-sm'>
          <img className='h-5 w-5 self-center' src={marketIcon} alt="" />
          <p className='text-slate-600 self-center'>Marketplace</p>
        </li>
        <li className='hover:border p-1 m-1 mt-2 mb-2 flex gap-2 rounded-sm'>
          <img className='h-5 w-5 self-center' src={newsIcon} alt="" />
          <p className='text-slate-600 self-center'>News feed</p>
        </li>
      </ul>
      <hr className='border-slate-300 m-4' />
      <ul>
        <p className='p-3 ms-2 text-slate-500'>Close Friends</p>
        {
          Users.map((item) => {
            return(
              <Closefriend id={item.id} user={item} />
            )
          })
        }
      </ul>
    </div>
  )
}

export default Leftbar