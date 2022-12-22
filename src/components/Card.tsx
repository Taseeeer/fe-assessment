import { BiRightArrowCircle } from 'react-icons/bi';
import Jacket from '../assets/bomber.webp';

export default function Card() {
    return (
        <div className='w-[400px] py-8 bg-white rounded'> 
            <img src={Jacket} alt="Jacket" />
            <div className='p-4'>
                <span className='text-[16px] py-2 text-gray-500'>Category Dress</span>
                <p className='text-[2.5rem] py-2'>Tropical Suit</p>
                <button className='text-4xl text-white rounded-full bg-primaryColor'> <BiRightArrowCircle /> </button>
            </div>
        </div>
    )
}