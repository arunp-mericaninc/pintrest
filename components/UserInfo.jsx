import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import Pin_img from "./Pin-docs/Pin_img";
import {
  getFirestore,
  collection,
  query,
  where,
  getDocs,
} from "firebase/firestore";
import app from "@/utils/firebase";

const UserInfo = () => {
    const{data:session}= useSession()
  const router = useRouter();
  const db = getFirestore(app);
  const [post, setPost] = useState([])
  if (session == null) {
    router.push("/");
  }
  console.log(post);
  useEffect(() => {
    if(session!==null){
        getUserPost();
    }
  }, []);

  const getUserPost = async () => {
    const q = query(collection(db, "pinterest"), where("email", "==", session.user.email));

    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
        let data = doc.data()
        data.id = doc.id
        setPost((users)=>[...users, data])
      // doc.data() is never undefined for query doc snapshots
      console.log(doc.id, " => ", doc.data());
      console.log(setPost);
    });
  };

  const handleLogout = () => {
    signOut();
  };
  return (
    <>
      <div className="flex flex-col items-center mt-4 gap-4">
        <Image
          src={session?.user?.image}
          alt={session?.user?.name}
          width={100}
          height={100}
          className="rounded-full"
        />
        <p className="font-semibold text-2xl">{session?.user?.name}</p>
        <span>{session?.user?.email}</span>
        <div className="flex justify-between gap-4">
          <button className="bg-gray-200 p-2 font-semibold rounded-full">
            Share
          </button>
          <button
            onClick={() => handleLogout()}
            className="bg-gray-200 p-2 font-semibold rounded-full"
          >
            Logout
          </button>
        </div>
      </div>
      <div >
        <Pin_img post={post} session={session} />
      </div>
    </>
  );
};

export default UserInfo;
