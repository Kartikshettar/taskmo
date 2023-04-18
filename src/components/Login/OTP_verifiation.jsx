import React from 'react'
import Welcome from './Welcome';
import "./otp.css";

function OTP_verifiation() {
  return (
    <div className='otp_verification'>
        <Welcome/>
        <div className="OTP_container">
        <h3>Login</h3>
        <p>We have sent a verification code on your </p>
        <p>mobile number <span>+91- 8879462674</span></p>
        <div className="inputfield">
        <input type="number" maxlength="1" className="input" disabled />
        <input type="number" maxlength="1" className="input" disabled />
        <input type="number" maxlength="1" className="input" disabled />
        <input type="number" maxlength="1" className="input" disabled />
        </div>
        <p>Didn't receive the code? <span>Resend OTP</span></p>
        <button>Verify</button>
        </div>
    </div>
  )
}

export default OTP_verifiation