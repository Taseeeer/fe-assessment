import { Rating } from '@mui/material';
import { useState } from 'react';
import { BiCar, BiCart, BiHeart } from 'react-icons/bi';
import Jacket from '../../assets/bomber.webp';

export default function Main() {

    const [value, setValue] = useState<number | null>(5);
    const [quantity, setQuantity] = useState<number>(0);

    return (
        <section className='px-[3.5rem] py-8'>
            <div>
                <span className='font-medium cursor-pointer'>Grocery {">"} Fruits {">"} Japan Oranges</span>
            </div>

            <div className='flex flex-wrap'>
                {/* images */}
                <div className='flex flex-col flex-wrap basis-6/12'>
                    <img src={Jacket} alt="Product" className='w-[600px] h-[550px]' />
                    <div className='flex gap-2'>
                        <img src={Jacket} alt="Product" className='w-[190px] h-[170px]' />
                        <img src={Jacket} alt="Product" className='w-[190px] h-[170px]' />
                        <img src={Jacket} alt="Product" className='w-[190px] h-[170px]' />
                    </div>
                </div>

                <div className='flex flex-col [&>*]:py-2 flex-wrap basis-6/12'>
                    <h1 className='text-[62px]'>Urbano Jacket</h1>
                    <Rating
                    name="simple-controlled"
                    value={value}
                    onChange={(event, newValue) => {
                        setValue(newValue);
                    }}
                    />
                    <span className='text-primaryColor text-[3rem]'>$99</span>
                    <span className='font-medium text-xl'>Product Details</span>
                    <span className='text-gray-500'>
                        Develop a website by finding a product identity that has value and branding to become a characteristic of a company. We will also facilitate the business marketing of these products with our SEO experts so that they become a ready-to-use website and help sell a product from the company.
                    </span>
                    <span className='text-gray-500'>
                        Develop a website by finding a product identity that has value and branding to become a characteristic of a company. We will also facilitate the business marketing of these products with our SEO experts so that they become a ready-to-use website and help sell a product from the company.
                    </span>

                    <div className='flex justify-between items-center'>
                        <span>Quality</span>
                        <div className='bg-gray-100 flex gap-4 items-center p-2'>
                            <span className='cursor-pointer' onClick={() => setQuantity(prevState => prevState > 0 ? prevState - 1 : 0)}>-</span>
                            <span>{ quantity }</span>
                            <span className='cursor-pointer' onClick={() => setQuantity(prevState => prevState + 1)}>+</span>
                        </div>
                        <span className='text-primaryColor'>Add note</span>
                    </div>

                    <div className='flex justify-between py-y'>
                        <span>Sub Total</span>
                        <span>$10</span>
                    </div>

                    <div className='flex gap-8 py-y'>
                        <span className='flex items-center gap-2 p-2 border border-primaryColor rounded curosor-pointer'>
                            <button className='text-primaryColor'>Wishlist</button>
                            <BiHeart className='text-primaryColor border-red-500' />
                        </span>
                        <span className='flex items-center gap-2 p-2 rounded bg-primaryColor text-white p-2 curosor-pointer'>
                            <button>Add to Cart</button>
                            <BiCart />
                        </span>
                    </div>
                </div>
            </div>

        </section>
    )
}