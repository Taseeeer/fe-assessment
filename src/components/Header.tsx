import { BiPhone ,BiCar, BiHeart, BiCart, BiUser, BiBell, BiSearch } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import Logo from '../assets/Dealerz.png';

export default function Header() {
    return (
        <header className=''>
            <div className='px-[3.5rem] py-[2rem] flex justify-between'>
                <Link to="/">
                    <img src={Logo} alt="Dealerz" />
                </Link>
                <div className='flex gap-8'>
                    <span className='flex items-center gap-2 cursor-pointer'> <BiPhone className='text-xl' /> Call Center</span>
                    <span className='flex items-center gap-2 cursor-pointer'> <BiCar className='text-xl' /> Shipping & Returns</span>
                </div>
            </div>

            <div className='px-[3.5rem] py-[2rem] flex items-center bg-gray-100 justify-between py-6'>
                <ul className='flex gap-8 [&>*]:text [&>*]:cursor-pointer'>
                    <Link to="/shop">
                        <li>Shop</li>
                    </Link>
                    <Link to="/gallery">
                        <li>Gallery</li>
                    </Link>
                    <li>About</li>
                    <li>Blog</li>
                </ul>
                
                <div className='flex items-center bg-white rounded px-4'>
                    <input className='p-4 w-[35rem] outline-0' placeholder='Search what you need' />
                    <BiSearch className='text-2xl cursor-pointer' />
                </div>

                <div className='flex gap-8 [&>*]:text-2xl [&>*]:cursor-pointer'>
                    <BiHeart />
                    <Link to="/cart">
                        <div className='relative'>
                            <BiCart />
                            <span className='absolute bg-primaryColor text-white px-[7px] py-[1px] rounded-full text-sm bottom-4 left-3'>3</span>
                        </div>
                    </Link>
                    <BiUser />
                    <BiBell />
                </div>
            </div>
        </header>
    )
}