'use client'
import Pin_img from '@/components/Pin-docs/Pin_img'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { collection, getDocs, getFirestore } from "firebase/firestore";
import app from '@/utils/firebase';

export default function Home() {
  const db = getFirestore(app)
  const [post, setPost] = useState([])
  useEffect(()=>{
    getPost()
  },[])
  const getPost = async()=>{
    

const querySnapshot = await getDocs(collection(db, "pinterest"));
querySnapshot.forEach((doc) => {
  let data = doc.data()
  data.id = doc.id
  setPost((users)=>[...users, data])
  // doc.data() is never undefined for query doc snapshots
  console.log(doc.id, " => ", doc.data());
});
  }
  return (
    <div>
      <Pin_img post={post}/>
    </div>
  )
}
