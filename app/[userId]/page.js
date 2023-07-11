'use client'
import { useSession } from 'next-auth/react'
import { getFirestore } from "firebase/firestore";
import React, { useEffect } from 'react'
import { doc, getDoc } from "firebase/firestore";
import app from '@/utils/firebase';
import UserInfo from '@/components/UserInfo';

const Profile = () => {
    // const db = getFirestore(app);
    const{data:session}= useSession()

    // useEffect(()=>{
    //     getPost()
    // },[session])

//     const getPost=async()=>{
        

// const docRef = doc(db, "data", session?.user?.email);
// const docSnap = await getDoc(docRef);

// if (docSnap.exists()) {
//   console.log("Document data:", docSnap.data());
// } else {
//   // docSnap.data() will be undefined in this case
//   console.log("No such document!");
// }
//     }

    // useEffect(()=>{
    //     console.log(params.userId.replace("%40","@"));
    // },[params])
  return (
    <div>
      <UserInfo session={session}/>
    </div>
  )
}

export default Profile
