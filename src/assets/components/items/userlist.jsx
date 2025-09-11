import React from 'react'
import Usercard from './usercard'
function Userlist({users}) {
  return (
        <div className="user-list  flex-wrap  flex justify-center w-full pt-10  gap-10 hover:via-purple-500   ">
      {users.map(user => (
        <Usercard key={user.id}
        
        {...user}  />

      ))}
    </div>

  )
}

export default Userlist