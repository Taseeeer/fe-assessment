import { Rating } from "@mui/material";
import { useState } from "react";
import { BiHeart } from "react-icons/bi";

export default function ShopCard() {
    const [value, setValue] = useState<number | null>(5);

    return (
        <div className='bg-white w-[424px] h-[375px] rounded'>
            <div className='flex justify-end p-2'>
                <span> <BiHeart className='bg-orange-200 text-primaryColor rounded' /> </span>
            </div>

            <div className='flex flex-col items-center'>
                <div className='h-[180px] w-[180px]'></div>
                <h1 className='text-[24px]'>Urbano Jacket</h1>
                <Rating
                name="simple-controlled"
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
                />
                <span className='text-gray-300'>watchmenow</span>
                <span className='text-primaryColor'>$99</span>
            </div>
        </div>
    )
}