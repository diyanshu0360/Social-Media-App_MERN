import axios from 'axios';
import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom';

const Register = () => {

  const username = useRef();
  const email = useRef();
  const password = useRef();
  const conpassword = useRef();
  let navigate = useNavigate();

  const handlerClick = async (e) => {
    e.preventDefault();
    
    if(password.current.value !== conpassword.current.value){
      alert("Password and Confirm Password doesn't match!!")
    } else {
      const user = {
        username: username.current.value,
        email: email.current.value,
        password: password.current.value
      }
      try {
        await axios.post("/auth/register", user);
        navigate("/login")
      } catch (error) {
        alert(error)
      }
    }
  }

  return (
    <div className='flex justify-center h-screen border'>
      <div className='p-16 w-[500px] self-center'>
        <h2 className='text-blue-500 font-bold text-5xl m-5'>SocialTag</h2>
        <p className='text-slate-600 font-bold m-5'>Connect with friends and the world around you on Socialtag</p>
      </div>
      <form onSubmit={handlerClick} className='flex flex-col border border-slate-500 p-8 ps-16 pe-16 w-[500px] self-center rounded-xl bg-gray-50 gap-4'>
        <input className='border border-slate-500 h-10 rounded-lg p-4 ms-2 me-2' type='text' placeholder='Username' ref={username} required />
        <input className='border border-slate-500 h-10 rounded-lg p-4 ms-2 me-2' type='email' placeholder='Email' ref={email} required />
        <input className='border border-slate-500 h-10 rounded-lg p-4 ms-2 me-2' type='password' placeholder='Password' ref={password} minLength="6" required />
        <input className='border border-slate-500 h-10 rounded-lg p-4 ms-2 me-2' type='password' placeholder='Confirm Password' ref={conpassword} minLength="6" required />
        <button type='submit' className='bg-blue-500 text-white h-10 rounded-lg ms-2 me-2'> Sign Up </button>
        <button className='bg-green-500 text-white h-10 rounded-lg ms-2 me-2'> Log into Account </button>
      </form>
    </div>
  )
}

export default Register