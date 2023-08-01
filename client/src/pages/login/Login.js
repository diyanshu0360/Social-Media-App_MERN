import React, { useContext, useRef } from 'react'
import { useNavigate } from 'react-router-dom';
import { loginCall } from '../../apiCalls';
import { AuthContext } from '../../context/AuthContext';


const Loading = () => {
  return (
    <div class="inline-block h-6 w-6 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]" role="status"></div>
  )
};

const Login = () => {

  const email = useRef();
  const password = useRef();
  const navigate = useNavigate();
  const { user, isFetching, error, dispatch } = useContext(AuthContext);


  const handlerClicked = (e) => {
    e.preventDefault(); // It will not refresh whole page everytime
    loginCall({ email: email.current.value, password: password.current.value }, dispatch);
  }

  console.log(user)

  return (
    <div className='flex justify-center h-screen border'>
      <div className='p-16 w-[500px] self-center'>
        <h2 className='text-blue-500 font-bold text-5xl m-5'>SocialTag</h2>
        <p className='text-slate-600 font-bold m-5'>Connect with friends and the world around you on Socialtag</p>
      </div>
      <form className='flex flex-col border border-slate-500 p-8 ps-16 pe-16 w-[500px] self-center rounded-xl bg-gray-50 gap-4' onSubmit={handlerClicked}>
        <input className='border border-slate-500 h-10 rounded-lg p-4 ms-2 me-2' ref={email} type='email' placeholder='Email' required />
        <input className='border border-slate-500 h-10 rounded-lg p-4 ms-2 me-2' ref={password} type='password' minLength="6" placeholder='Password' required />
        <button className='bg-blue-500 text-white h-10 rounded-lg ms-2 me-2' > {isFetching ? <Loading /> : "Log In"} </button>
        <p className='text-center text-blue-500 text-sm'>Forgot Password?</p>
        <button className='bg-green-500 text-white h-10 rounded-lg ms-2 me-2' onClick={() => navigate("/register")} > {isFetching ? <Loading /> : "Create a New Account"} </button>
      </form>
    </div>
  )
}

export default Login