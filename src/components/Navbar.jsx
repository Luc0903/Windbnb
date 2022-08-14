import { BiSearchAlt2 } from 'react-icons/bi';
import LocationResults from './LocationResults';
import SearchButton from './SearchButton';
export default function Navbar({ responsiveMenu, handleMenu }) {
  return (
    <>
      <div>
        <nav
          className={`${
            responsiveMenu
              ? ' flex flex-col w-80 mx-auto rounded-2xl px-4 py-5 shadow-nav__shadow font-mulish font-normal lg:h-16 lg:flex-row lg:w-2/3'
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
        {responsiveMenu && <SearchButton handleMenu={handleMenu} />}
      </div>
    </>
  );
}
