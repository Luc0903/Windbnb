import { BiMap } from 'react-icons/bi';
export default function LocationResults() {
  return (
    <ul className=' font-mulish text-sm text-dark__gray max-w-4xl'>
      <li className=' flex items-center my-5'>
        <BiMap className=' fill-dark__gray' />
        Helsinki, Finland
      </li>
      <li className=' flex items-center my-5'>
        <BiMap className=' fill-dark__gray' />
        Turku, Finland
      </li>
      <li className=' flex items-center my-5'>
        <BiMap className=' fill-dark__gray' />
        Oulu, Finland
      </li>
      <li className=' flex items-center my-5'>
        <BiMap className=' fill-dark__gray' />
        Vaasa, Finland
      </li>
    </ul>
  );
}
