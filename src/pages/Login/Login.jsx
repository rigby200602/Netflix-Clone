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
          <button className='w-full p-[16px] bg-[#e50914] text-white rounded-[4px] text-[16px]'>Sign Up</button>
          <div className="form-help">
            <div className="remember"></div>
             <input type="checkbox" />
             <label htmlFor="">Remember Me</label>
             <p>Need help?</p>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login
