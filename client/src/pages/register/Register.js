import React from 'react'

const Register = () => {
  return (
    <div className='flex justify-center h-screen border'>
      <div className='p-16 w-[500px] self-center'>
        <h2 className='text-blue-500 font-bold text-5xl m-5'>SocialTag</h2>
        <p className='text-slate-600 font-bold m-5'>Connect with friends and the world around you on Socialtag</p>
      </div>
      <div className='flex flex-col border border-slate-500 p-8 ps-16 pe-16 w-[500px] self-center rounded-xl bg-gray-50 gap-4'>
        <input className='border border-slate-500 h-10 rounded-lg p-4 ms-2 me-2' type='text' placeholder='Username' />
        <input className='border border-slate-500 h-10 rounded-lg p-4 ms-2 me-2' type='email' placeholder='Email' />
        <input className='border border-slate-500 h-10 rounded-lg p-4 ms-2 me-2' type='password' placeholder='Password' />
        <input className='border border-slate-500 h-10 rounded-lg p-4 ms-2 me-2' type='password' placeholder='Confirm Password' />
        <button className='bg-blue-500 text-white h-10 rounded-lg ms-2 me-2'> Sign Up </button>
        <button className='bg-green-500 text-white h-10 rounded-lg ms-2 me-2'> Log into Account </button>
      </div>
    </div>
  )
}

export default Register