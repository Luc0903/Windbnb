import { useState } from 'react';
import { BiSearchAlt2 } from 'react-icons/bi';
import logoImg from '../assets/triangleLogo.png';
import LocationResults from './LocationResults';
export default function Header() {
  const [responsiveMenu, setResposiveMenu] = useState(false);
  const handleMenu = () => {
    setResposiveMenu(!responsiveMenu);
  };
  return (
    <header
      className={`${
        responsiveMenu ? ' h-screen flex flex-col p-5 md:items-center' : 'pt-5 px-3 mb-10 md:flex md:justify-between'
      }`}
    >
      <p
        className={`${
          responsiveMenu
            ? ' flex h-4 mb-4 text-main__red font-poppins font-bold text-sm'
            : 'text-main__red flex font-poppins font-bold text-sm mb-10'
        }`}
      >
        <img className=' mx-1' src={logoImg} alt='logo' />
        windbnb
      </p>
      <nav
        className={`${
          responsiveMenu
            ? ' flex flex-col text-center w-80 mx-auto rounded-2xl px-4 py-5 shadow-nav__shadow font-mulish font-normal md:mx-10'
            : 'flex justify-between items-center w-80 mx-auto rounded-2xl h-14 px-4 py-5 shadow-nav__shadow font-mulish font-normal md:mx-10'
        }`}
      >
        <input
          type='text'
          placeholder='Location'
          className={`${
            responsiveMenu
              ? 'text-gray__titles text-sm font-normal outline-none border-none w-full placeholder:text-gray__titles my-1'
              : ' text-gray__titles text-sm font-normal outline-none border-none w-full placeholder:text-gray__titles'
          }`}
        />
        <input
          type='text'
          placeholder='Add Guests'
          className={`${
            responsiveMenu
              ? 'text-veryLightGray text-sm font-normal outline-none border-none w-full my-1'
              : 'text-veryLightGray text-sm font-normal outline-none border-none w-full'
          }`}
        />
        <div>
          <BiSearchAlt2
            className={`${responsiveMenu ? 'fill-main__red h-8' : ' fill-main__red h-14'}`}
            onClick={handleMenu}
          />
        </div>
      </nav>
      {responsiveMenu && <LocationResults />}
    </header>
  );
}
