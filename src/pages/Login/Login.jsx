import { useState } from 'react'
import React from 'react'
import './Login.css'
import logo from '../../assets/logo.png'

const Login = () => {
  
  const [signState,setSignState] = useState("Sign In")

  return (
    <div className='login h-screen'>
      <div className='flex items-center justify-center mb-[2%]'>
        <img src={logo} alt="Logo" width='150px mx-auto flex items-center justify-center' />
      </div>

      <div className="login-form w-full max-w-[450px] rounded-[4px] p-[60px] m-auto">
        <h1 className='text-[32px] font-medium mb-[28px] text-center'>{signState}</h1>
        <form>
          {signState === "SignUp" ? <input type="text" placeholder='Your name' /> : <></>}
          <input type="text" placeholder='Email' />
          <input type="text" placeholder='Password' />
          <button className='w-full p-[16px] bg-[#e50914] text-white rounded-[4px] text-[16px] cursor-pointer font-semibold'>{signState}</button>
          <div className="flex items-center justify-between text-[#b3b3b3] text-[13px]">
            <div className="remember flex items-center gap-[5px]">
              <input className='max-w-[18px] max-h-[18px]' type="checkbox" />
              <label>Remember Me</label>
            </div>
            <p>Need help?</p>
          </div>
        </form>
        <div className="form-switch mt-[40px] text-[#737373]">
          {signState === 'SignIn' ? <p>New to Netflix? <span>Sign Up Now</span></p> : 
          <p>Already have account? <span>Sign In Now</span></p>}
        </div>
      </div>
    </div>
  )
}

export default Login
