import React from 'react'
import call from '../../assets/call.png'

function Add_Lead_Screen() {
  return (
    <div className='Lead_Add'>
        <div className='profile'>
            <img alt='profile_picture'/>
            <span>Abhijit Mohanty</span>
            <img src={call}/>
        </div>
    </div>
  )
}

export default Add_Lead_Screen