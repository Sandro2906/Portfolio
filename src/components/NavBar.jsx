import React, { useState } from 'react'
import {FaBars, FaTimes} from 'react-icons/fa'
import {Link} from 'react-scroll'

const NavBar = () => {

    const [nav, setNav] = useState(false);

  const links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "about",
    },
    {
      id: 3,
      link: "portfolio",
    },
    {
      id: 4,
      link: "experience",
    },
    {
      id: 5,
      link: "contact",
    },
  ];

  return (
    <div className="
    flex 
    justify-between 
    items-center 
    w-full 
    h-20 
    px-4
    bg-black 
    text-white 
    fixed z-20">

      <div>
        <h1 className="
        text-5xl 
        font-signature
        ml-2">Sandro</h1>
      </div>

      <ul className="hidden md:flex">
        {links.map(({ id, link }) => (
         <li key={id} className='
         p-4 
         capitalize
        text-gray-500 
        hover:scale-150 
        duration-200 cursor-pointer'>
           <Link to={link} smooth duration={500}>{link}</Link>
         </li>
        ))}
      </ul>
     

            <div onClick={()=> {setNav(!nav)}} className='
            md:hidden 
            cursor-pointer 
            pr-4 
            z-10 
            text-gray-500'>
            {nav ? <FaTimes  size={30}/> : <FaBars size={30} />}
            </div>

            {
              nav &&(
                <ul className='
                flex 
                flex-col 
                justify-center 
                items-center 
                top-0 
                left-0 
                absolute 
                w-full 
                h-screen 
                bg-gradient-to-b
                 from-black
                 to-gray-500
                 text-gray-500'>

                {links.map(({ id, link }) => (
                    <li key={id} className='px-4 cursor-pointer capitalize py-6 text-4xl'>
                        <Link onClick={()=>setNav(!nav)} to={link} smooth duration={500}>{link}</Link>
                    </li>
                 ))}
                </ul>

              )
            }

      </div>
 
  )
}

export default NavBar