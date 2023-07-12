import Image from 'next/image'
import React from 'react'
import UserTag from '../UserTag';
import UserImage from '../UserImage';

const Pin_img = ({post,session}) => {
    const handlePost=()=>{

    }
    console.log(post);
  return (
    <div className='columns-1 md:columns-2 lg:columns-4 xl:columns-5 space-y-6 m-4 ' >
        {post.map((item)=>{
            return(
                <div key={item.id} onClick={()=>handlePost(item.id)} className='flex flex-col items-center gap-1'>
                    <Image className='shadow-md  rounded-3xl' src={item.image} alt={item.title} width={250} height={100}/>
                    <p className='text-center font-bold'>{item.title}</p>
                    {session?<UserTag user={session?.user} />:<UserImage user={item}/>}
                </div>
            )
        })}
    </div>
  )
}

export default Pin_img
