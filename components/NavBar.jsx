import React from 'react'
import Image from 'next/image';
 
function NavBar() {
  return (
    <nav className='flex flex-row justify-between pl-10 pr-10 p-2 place-items-center'>
      <div className='text-3xl font-bold text-center flex gap-3 place-items-center'>
      <Image
      src="/dennis.png"
      width={50}
      height={50}
      className='rounded-full'
      alt="Dennis Njoroge Muhia"
    />
      Dennis Muhia</div>
      <div className='flex gap-5'>
        <a href='https://www.linkedin.com/in/dennis-muhia-2920b7226/' className='flex space-x-5 place-items-center pr-2 rounded-full bg-blue-700 text-white hover:bg-blue-500 cursor-pointer p-1 text-md font-normal '>
      <Image
      src="/linkedin.png"
      width={20}
      height={20}
      className='rounded-full'
      alt="Dennis Njoroge Muhia"
    />
      Linkedin</a>
      <a href='https://github.com/dmuhia136' className='flex place-items-center pr-2 rounded-full bg-gray-800 text-white hover:bg-gray-500 cursor-pointer p-1 text-md font-normal '>
      <Image
      src="/github.png"
      width={20}
      height={20}
      className='rounded-full'
      alt="Dennis Njoroge Muhia"
    />
      Github</a>
      </div>
      
    </nav>
  )
}

export default NavBar