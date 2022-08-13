import SuperhostButton from './SuperhostButton';
import { BiStar } from 'react-icons/bi';
// import photo1 from '../assets/photo1.jpg';
// import photo2 from '../assets/photo2.jpg';
// import photo3 from '../assets/photo3.jpg';
// import photo4 from '../assets/photo4.jpg';
// import photo5 from '../assets/photo5.jpg';
// import photo6 from '../assets/photo6.jpg';

export default function RoomCard(props) {
  return (
    <div className=' max-w-sm max-h-64 mb-11 mx-auto'>
      <div className=' w-80'>
        <img className=' w-full object-cover rounded-3xl mb-3' src={props.img} />
      </div>
      <div className=' flex justify-between items-center mb-2'>
        {props.superHost && <SuperhostButton />}
        <p className=' w-40 text-veryLightGray text-xs font-medium'>{props.grayText}</p>
        <p className=' flex items-center text-dark__gray font-medium'>
          <BiStar fill='rgba(235, 87, 87, 0.72)' /> {props.rating}
        </p>
      </div>
      <p className=' font-montserrat font-semibold text-sm text-gray__titles'>{props.blackText}</p>
    </div>
  );
}
