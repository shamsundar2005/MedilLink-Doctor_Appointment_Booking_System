import React, { useState } from 'react'

const Login = () => {
  const [state,setState]=useState('Sign Up')
  const [email, setEmail]=useState('')
  const [password,setPassword]=useState('')
  const [name,setName]=useState('')

  const onSubmitHandler=async(event)=>{
    event.preventDefault() 
  }


  return (
    <form className="min-h-[80vh] flex items-center justify-center">
    <div className="flex flex-col gap-5 bg-white-100 shadow-lg hover:border border-primary rounded-lg p-8 w-[380px] sm:w-[450px]">
      {/* Heading */}
      <h1 className="text-2xl font-bold text-center">
        {state === 'Sign Up' ? 'Create Account' : 'Login'}
      </h1>
      <p className="text-gray-600 text-sm text-center">
        Please {state === 'Sign Up' ? 'Sign Up' : 'Login'} to Book Appointment
      </p>
  
      {/* Full Name */}
      {state === 'Sign Up' && <div className="flex flex-col gap-2">
      
        <label className="text-sm font-medium text-gray-700">Full Name</label>
        <input
          type="text"
          onChange={(e) => setName(e.target.value)}
          value={name}
          placeholder="Enter your full name"
          className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
        />
      </div>
}
  
      {/* Email */}
      <div className="flex flex-col gap-2">
        <label className="text-sm font-medium text-gray-700">Email</label>
        <input
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          placeholder="Enter your email"
          className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
        />
      </div>
  
      {/* Password */}
      <div className="flex flex-col gap-2">
        <label className="text-sm font-medium text-gray-700">Password</label>
        <input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          placeholder="Enter your password"
          className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
        />
      </div>
  
      {/* Button */}
      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-200 font-semibold"
      >
        {state === 'Sign Up' ? 'Sign Up' : 'Login'}
      </button>
      {
        state==='Sign Up'?
        <p>Already have an Account ? <span onClick={()=>setState('Login')} className='text-primary underline cursor-pointer'>Login</span></p>:
        <p>Create an new Account ? <span onClick={()=>setState('Sign Up')} className='text-primary underline cursor-pointer'>Sign Up</span></p>

      }
    </div>
  </form>
  
    
  )
}

export default Login