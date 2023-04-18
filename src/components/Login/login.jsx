import React from 'react'
import './Login.css'
import Welcome from '../Login/Welcome'


function Login() {
  return (
    <div className='Login_container'>
      <Welcome/>
      <div className='login_Form'>
      <h4>Login</h4>
        <p>Enter mobile number</p>
        <input type='tel' id='phone' name='phone' placeholder='+91-'/>
        <p>By clicking “Get OTP” you are agreeing to our <span>Terms & Privacy policies</span></p>
       <div className='ButtonContainer'><button>Get OTP</button></div> 
      </div>
    </div>
  )
}

export default Login