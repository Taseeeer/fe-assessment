import { Rating } from "@mui/material";
import { useState } from "react";
import { BiHeart } from "react-icons/bi";

export default function ShopCard({ info }: any) {
    const [value, setValue] = useState<number | null>(5);

    return (
        <div className='bg-white w-[424px] h-[375px] rounded'>
            <div className='flex justify-end p-2'>
                <span> <BiHeart className='bg-orange-200 text-primaryColor rounded' /> </span>
            </div>

            <div className='flex flex-col items-center'>
                <img src={info.image} alt="Product" className='h-[180px] w-[180px]' />
                <h1 className='text-[24px]'>{info.title.slice(0,15) + "..."}</h1>
                <Rating
                name="simple-controlled"
                value={info.rating.rate}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
                />
                <span className='text-gray-300'>{ info.category }</span>
                <span className='text-primaryColor'>${ info.price }</span>
            </div>
        </div>
    )
}