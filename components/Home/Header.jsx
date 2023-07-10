'use client'
import { signIn, signOut, useSession} from "next-auth/react";
import Image from "next/image";
import React from "react";
import { HiSearch, HiBell, HiChat } from "react-icons/hi";

const Header = () => {
  const{data:session}= useSession()
  console.log("session",session);
  return (
    <div className="flex items-center gap-6 p-2">
      <Image
        src="/images/pintrest.png"
        alt="pintrest"
        width={50}
        height={50}
        className="w-12 h-12 p-2 hover:bg-gray-300 hover:rounded-full cursor-pointer"
      />
      <button className="bg-black text-white px-2 py-1.5 rounded-lg">
        Home
      </button>
      <button className="bg-gray-300 rounded-lg px-2 py-1.5">Create</button>

      <div className="bg-gray-100 flex items-center w-full p-2 rounded-2xl">
        <HiSearch className="text-[24px] " />
        <input type="text" className="p-1 outline-none bg-transparent" placeholder="Search" />
      </div>
      <HiBell className="text-gray-500 text-[2.6rem] cursor-pointer" />
      <HiChat className="text-gray-500 text-[2.6rem] cursor-pointer" />
      {session==null?
      <button onClick={()=>signIn()} className="bg-blue-600 text-white px-2 py-1.5 rounded-lg" >Login</button>
      :
      <>
      <button onClick={()=>signOut()} className="bg-red-600 text-white px-2 py-1.5 rounded-lg" >LogOut</button>
      <Image src={session?.user.image} alt="prof-img" width={50} height={50} className="cursor-pointer w-12 h-8 bg-cover rounded-full"/>
      </>
      }
    </div>
  );
};

export default Header;
