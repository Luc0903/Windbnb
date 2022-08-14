import { useState } from 'react';
import logoImg from '../assets/triangleLogo.png';
import Navbar from './Navbar';
export default function Header() {
  const [responsiveMenu, setResposiveMenu] = useState(false);
  const handleMenu = () => {
    setResposiveMenu(!responsiveMenu);
  };
  return (
    <header
      className={`${responsiveMenu ? ' h-screen flex flex-col p-5' : 'pt-5 px-3 mb-10 md:flex md:justify-between'}`}
    >
      <p
        className={`${
          responsiveMenu
            ? ' flex h-4 mb-4 text-main__red font-poppins font-bold text-sm lg:hidden'
            : 'text-main__red flex font-poppins font-bold text-sm mb-10'
        }`}
      >
        <img className=' mx-1' src={logoImg} alt='logo' />
        windbnb
      </p>
      <Navbar responsiveMenu={responsiveMenu} handleMenu={handleMenu} />
    </header>
  );
}
