import { BiSearchAlt2 } from 'react-icons/bi';
export default function SearchButton({ handleMenu }) {
  return (
    <button
      onClick={handleMenu}
      className=' flex items-center justify-center text-white bg-main__red h-12 rounded-2xl w-28'
    >
      <BiSearchAlt2 className=' mx-1' /> Search
    </button>
  );
}
