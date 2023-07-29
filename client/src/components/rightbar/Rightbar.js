import React from 'react'
import { Users } from '../../dummyData'
import Online from '../online/Online'
const adsImg = 'https://th.bing.com/th/id/OIP.A8hqxKr7lEfR-pamEj2TGgHaIZ?w=166&h=189&c=7&r=0&o=5&dpr=2.2&pid=1.7';

const Rightbar = () => {
  return (
    <div className='p-3 border border-t-0 w-60'>
      <div className='m-3'>
        <div className='flex justify-center'>
        <img src={adsImg} alt="" />
        </div>
        <div className='mt-5'>
          <hr className='border-slate-300' />
          <p className='text-slate-500 p-3'>Online Friends</p>
        </div>
        {
          Users.map((item) => {
            return(
              <Online key={item.id} user={item} />
            )
          })
        }
      </div>
    </div>
  )
}

export default Rightbar