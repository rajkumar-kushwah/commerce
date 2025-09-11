import React from 'react'
import { users } from '../Heros/User'
import Userlist from '../items/userlist'
import './Popler.css'
function Popler() {
  return (
    <div className='popler flex flex-col items-center pt-10 space-y-5  placeholder-purple-400 from-pink-100  to-indigo-300'>
        <h1 className='text-4xl font-semibold text-gray-800 underline'>
          header
        </h1>
        <div className='popler-container flex justify-center w-full  '>
      <Userlist  users={users}/>
     </div>
    </div>
  )
}

export default Popler