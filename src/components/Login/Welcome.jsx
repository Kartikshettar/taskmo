import React from 'react';
import Bodyimg from '../../assets/Group.svg';
import './Welcome.css'

function Welcome() {
  return (
    <div className='Login_container'>
        <img className='Login_Img' src={Bodyimg} alt='Login'/>
    </div>
  )
}

export default Welcome