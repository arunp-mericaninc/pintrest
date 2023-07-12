import React from 'react'
import {HiArrowSmRight} from 'react-icons/hi'

const LoginScreen = () => {
  return (
    <div className='bg-gray-800 w-screen h-screen text-white flex flex-col items-center justify-center'>
        <p className='text-[3rem]'>To Continue Application</p>
        <button className='bg-blue-600 p-2 flex items-center text-3xl'>Login<HiArrowSmRight/></button>
    </div>
  )
}

export default LoginScreen
