'use client'
import Form from '@/components/Home/Form'
import { signIn, useSession } from 'next-auth/react'
// import { useRouter } from 'next/navigation'
import React from 'react'

const Pins = () => {
  const{data:session}= useSession()
  // const router = useRouter()
  if(session == null){
    signIn()
  }
  return (
    <div>
      <Form/>
    </div>
  )
}

export default Pins
