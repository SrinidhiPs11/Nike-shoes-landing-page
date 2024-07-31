import { useState } from 'react'
import {headerLogo} from '../assets/images'
import {hamburger} from '../assets/icons'
import { navLinks } from '../constants'

const Nav = () => {
    const [expand, setExpand] = useState(false);

    return (
      <>
      <header className="padding-x py-5 z-20 w-full bg-white shadow-lg fixed">
        <nav className='flex justify-between items-center max-container'>
          <a href='/'>
            <img src={headerLogo} alt='logo' width={120} height={29} />
          </a>
          <ul className={`flex flex-col md:flex-row md:flex-1 md:justify-center md:items-center md:gap-16 ${expand ? 'flex' : 'hidden'} md:flex py-2 md:py-0 bg-white absolute md:static left-0 right-0 top-full shadow-md md:shadow-none`}>
            {navLinks.map((item) => (
              <li key={item.label}>
                <a href={item.href} className="font-montserrat leading-normal text-lg text-slate-gray hover:text-coral-red block py-2 px-4 md:p-0 mx-5 md:mx-0 ">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="md:hidden cursor-pointer" onClick={() => setExpand(!expand)}>
            <img src={hamburger} width={25} height={25} alt="menu" />
          </div>
        </nav>
      </header>
      </>
    )
}

export default Nav