'use client'
import { signIn, useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import React from 'react'
import {HiArrowSmRight} from 'react-icons/hi'

const LoginScreen = () => {
    const {data:session} = useSession()
    const router = useRouter()

    if(session!== null){
        router.push("/")
    }
  return (
    <div className='bg-gray-800 w-screen h-screen text-white flex flex-col items-center justify-center'>
        <p className='text-[3rem]'>To Continue Application</p>
        <button onClick={()=>signIn()} className='bg-blue-600 p-2 flex items-center text-3xl'>Login<HiArrowSmRight/></button>
    </div>
  )
}

export default LoginScreen;