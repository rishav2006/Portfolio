import axios from 'axios';
import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';

const Registration = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigator = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userData = {
      name: name,
      email: email,
      password: password
    };

    try{
      const response = await axios.post('/api/admin/signup', userData);
      navigator('/admin/dashboard');
    }
    catch(error){
      console.log(error.message);
    }

  }
  
  
  return (
    <div className='pt-30 px-7 lg:px-15 flex flex-col items-center justify-center h-full pb-50 lg:pb-40 gap-5'>
      <h2 className='text-white text-3xl text-center'>Signup for <span className='text-lime-400'>Admin Panel.</span></h2>
      <form action="" onSubmit={handleSubmit} className='flex flex-col gap-2 w-full lg:w-3/9'>
        <input type="text" placeholder='Enter Name' name='name' className='bg-zinc-900 px-4 py-3 border-1 border-zinc-800 text-white rounded-lg outline-none' value={name} onChange={(e) => setName(e.target.value)}/>
        <input type="email" placeholder='Enter Email' name='email' className='bg-zinc-900 px-4 py-3 border-1 border-zinc-800 text-white rounded-lg outline-none' value={email} onChange={(e) => setEmail(e.target.value)}/>
        <input type="password" placeholder='Enter Password' name='password' className='bg-zinc-900 px-4 py-3 border-1 border-zinc-800 text-white rounded-lg outline-none' value={password} onChange={(e) => setPassword(e.target.value)}/>
        <input type="submit" name='Signup' value='Signup' className='bg-lime-400 px-4 py-3 rounded-lg font-med outline-none'/>
      </form> 
    </div>
  )
}

export default Registration
