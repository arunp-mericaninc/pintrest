import Image from 'next/image'
import React from 'react'

const Pin_img = ({post}) => {
    console.log(post);
  return (
    <div className='grid grid-cols-4 m-4' >
        {post.map((item)=>{
            return(
                <div className='flex flex-col items-center gap-1'>
                    <Image className='shadow-md  rounded-3xl' src={item.image} alt={item.title} width={250} height={250}/>
                    <p className='text-center font-bold'>{item.title}</p>
                </div>
            )
        })}
    </div>
  )
}

export default Pin_img
