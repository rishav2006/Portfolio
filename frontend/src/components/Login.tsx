import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigator = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
      const response = await axios.post(
      "/api/admin/login",
      { email, password },
      { withCredentials: true }   // 🔥 VERY IMPORTANT
    );
      console.log('Login Successful');
      navigator('/admin/dashboard');
    }
    catch(err) {
      console.log('Some error happened: ' + err.message);
    };
  }


  return (
    <div className='pt-30 px-7 lg:px-15 flex flex-col items-center justify-center h-full pb-50 lg:pb-40 gap-5'>
      <h2 className='text-white text-3xl text-center'>Login for <span className='text-lime-400'>Admin Panel.</span></h2>
      <form action="" typeof='post' className='flex flex-col gap-2 w-full lg:w-3/9' onSubmit={handleSubmit}>
        <input type="email" placeholder='Enter Email' name='email' className='bg-zinc-900 px-4 py-3 border-1 border-zinc-800 text-white rounded-lg outline-none' value={email} onChange={(e) => {setEmail(e.target.value)}}/>
        <input type="password" placeholder='Enter Password' name='password' className='bg-zinc-900 px-4 py-3 border-1 border-zinc-800 text-white rounded-lg outline-none' value={password} onChange={(e) => {setPassword(e.target.value)}}/>
        <input type="submit" name='Login' value='Login' className='bg-lime-400 px-4 py-3 rounded-lg font-med outline-none'/>
      </form>
    </div>
  )
}

export default Login
