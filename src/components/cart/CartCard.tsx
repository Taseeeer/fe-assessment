import { BiHeart, BiTrash } from "react-icons/bi";

export default function CartCard() {
    return (
        <div className='flex items-center gap-8'>
            <div className='bg-gray-500 w-[200px] h-[200px] rounded'></div>

            <div className='flex flex-col gap-4'>
                <p>Tropical Playsuit</p>
                <div className='flex justify-between'>
                    <span>Size</span>
                    <span>:</span>
                    <span>M</span>
                </div>
                <div className='flex justify-between'>
                    <span>Quantity</span>
                    <span>5</span>
                </div>

                <div className='flex justify-between items-center'>
                    <span className='text-primaryColor text-[2.7rem]'>$99</span>
                    <div className='flex items-center gap-4 pl-10'>
                        <button className='bg-primaryColor text-white py-[12px] cursor-pointer px-2 rounded'><BiTrash /> </button>
                        <div className='flex items-center gap-4 text-primaryColor cursor-pointer p-2 rounded bg-white border-2 border-primaryColor'>
                            <span>Wishlist</span>
                            <BiHeart /> 
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}