import React, { useState } from 'react'
import axios from 'axios'

function Adata() {
const [Users ,setUsers ]= useState([])
const GetsUsers = async ()=>{
        const {data} = await axios("https://jsonplaceholder.typicode.com/users");
        setUsers(data)
        console.log(data)
    }

  return (
    <div>
        <button onClick={GetsUsers} className='bg-blue-600 rounded-2xl p-2 '>Get data</button>
        <div className='bg-yellow-50'>
        <ul>
            {Users.map((e)=>{
            return <li key={e.id}>{e.username}--- <a href={`/${e.id}`}>Explor</a>,
          
         
             
            
         
            </li>
           
          })}
        </ul>
        </div>
    </div>
  )
}

export default Adata