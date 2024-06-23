import {headerLogo} from '../assets/images'
import {hamburger} from '../assets/icons'
import { navLinks } from '../constants'
const Nav = () => {
  return (
    <header className="padding-x py-8 absolute z-10 w-full">
<nav className='flex justify-between items-center max-container  bg-white'>
    <a href='/'>
        <img src={headerLogo} alt = 'logo' width= {120} height={29} ></img>
    </a>
    <ul className="hidden md:flex md:flex-1 md:justify-center md:items-center md:gap-16 ">
    {navLinks.map((item) => (
            <li key={item.label}>
              <a href={item.href} className="font-montserrat leading-normal text-lg text-slate-gray hover:text-coral-red">
                {item.label}
                </a>
                </li>))
}
    </ul>
    <div className="md:hidden">
      <img src={hamburger} width={25} height={25}></img>
    </div>
</nav>
      
    </header>
  )
}

export default Nav
