import Link from 'next/link'
import React from 'react'
import {FiPlusCircle, FiHome} from "react-icons/fi"

const Navbar = () => {
  return (
    <div className="container mx-auto mt-5 mb-5 px-5">

    
    <nav className='flex gap-6 justify-between items-center cursor-pointer'>
       
        <Link 
        className='flex items-center gap-1'
        href={'/create'}>
            <FiPlusCircle /> <span>Create</span>
        </Link>
    </nav>
    </div>
  )
}

export default Navbar