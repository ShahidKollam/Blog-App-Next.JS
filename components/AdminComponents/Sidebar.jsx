
import assets from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const sidebar = () => {
    console.log("ok");
    
  return (
    <div className='bg-zinc-600 h-screen w-1/5 border border-zinc-100'>
        <div>
            <Image src={assets.logo} alt='logo'/>
        </div>
        <div>
        </div>
    </div>
  )
}

export default sidebar