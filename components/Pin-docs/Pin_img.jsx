import Image from 'next/image'
import React from 'react'
import UserTag from '../UserTag';
import UserImage from '../UserImage';

const Pin_img = ({post,session}) => {
    console.log(post);
  return (
    <div className='grid grid-cols-4 m-4 gap' >
        {post.map((item)=>{
            return(
                <div className='flex flex-col items-center gap-1'>
                    <Image className='shadow-md  rounded-3xl' src={item.image} alt={item.title} width={250} height={250}/>
                    <p className='text-center font-bold'>{item.title}</p>
                    {session?<UserTag user={session?.user} />:<UserImage user={item}/>}
                </div>
            )
        })}
    </div>
  )
}

export default Pin_img
