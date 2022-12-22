import { BiRightArrowCircle } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import Jacket from '../assets/bomber.webp';

export default function Card({ info }: any) {
    return (
        <div className='w-[400px] py-8 bg-white rounded'> 
            <img src={info.image} className='w-[400px] h-[450px]' alt="Jacket" />
            <div className='p-4'>
                <span className='text-[16px] py-2 text-gray-500'>{ info.category }</span>
                <p className='text-[2.3rem] py-2'>{ info.title.slice(0,13) + "..." }</p>
                <Link to={`/details/${info.id}`}>
                    <button className='text-4xl text-white rounded-full bg-primaryColor'> <BiRightArrowCircle /> </button>
                </Link>
            </div>
        </div>
    )
}