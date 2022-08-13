import RoomCard from './RoomCard';
import photo1 from '../assets/photo1.jpg';
import photo2 from '../assets/photo2.jpg';
import photo3 from '../assets/photo3.jpg';
import photo4 from '../assets/photo4.jpg';
import photo5 from '../assets/photo5.jpg';
import photo6 from '../assets/photo6.jpg';

export default function MainPage() {
  const roomsData = [
    {
      img: photo1,
      superHost: true, //SI SUPERHOST VIENE TRUE, HAY QUE LLAMAR AL BUTTONCOMPONENT
      grayText: 'Entire apartment . 2 beds',
      rating: 4.4,
      blackText: 'Stylist apartment in center of the city',
      id: 1,
    },
    {
      img: photo2,
      grayText: 'Private room',
      rating: 4.25,
      blackText: 'Cozy, peaceful and private room with...',
      id: 2,
    },
    {
      img: photo3,
      grayText: 'Entire house',
      rating: 4.96,
      blackText: 'Mordern House in a remote area',
      id: 3,
    },
    {
      img: photo4,
      superHost: true, //SI SUPERHOST VIENE TRUE, HAY QUE LLAMAR AL BUTTONCOMPONENT
      grayText: 'Entire apartment . 2 beds',
      rating: 4.85,
      blackText: 'Stylist room in design district',
      id: 4,
    },
    {
      img: photo5,
      grayText: 'Private room',
      rating: 4.54,
      blackText: 'Modern apartment close to nature',
      id: 5,
    },
    {
      img: photo6,
      grayText: 'Entire house',
      rating: 4.64,
      blackText: 'House in a remote area',
      id: 6,
    },
  ];
  return (
    <main className=' font-montserrat'>
      <div className=' max-w-5xl mx-auto'>
        <div className=' flex justify-between items-center w-80 mx-auto mb-6 md:w-11/12 md:text-center'>
          <p className=' font-bold text-lg text-gray__titles'>Stays in Finland</p>
          <p className=' font-medium text-sm text-dark__gray'>12+ stays</p>
        </div>
        <section className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
          {roomsData.map((room) => {
            return <RoomCard key={room.id} {...room} />;
          })}
        </section>
      </div>
    </main>
  );
}
