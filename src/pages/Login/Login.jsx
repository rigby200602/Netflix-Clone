import React from 'react'
import './Login.css'
import logo from '../../assets/logo.png'

const Login = () => {
  return (
    <div className='login h-screen'>
      <img src={logo} alt="Logo" width='150px' />
      <div className="login-form w-full max-w-[450px] rounded-[4px] p-[60px] m-auto">
        <h1 className='text-[32px] font-medium mb-[28px]'>Sign Up</h1>
        <form>
          <input type="text" placeholder='Your name' />
          <input type="text" placeholder='Email' />
          <input type="text" placeholder='Password' />
          <button className='w-full p-[16px] bg-[#e50914] text-white rounded-[4px] text-[16px] cursor-pointer font-semibold'>Sign Up</button>
          <div className="flex items-center justify-between text-[#b3b3b3] text-[13px]">
            <div className="remember flex items-center gap-[5px]">
              <input className='max-w-[18px] max-h-[18px]' type="checkbox" />
              <label>Remember Me</label>
            </div>
            <p>Need help?</p>
          </div>

        </form>
      </div>
    </div>
  )
}

export default Login
