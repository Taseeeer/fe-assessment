import { Slider } from "@mui/material";
import { Box } from "@mui/system";
import { BiSearch, BiFilterAlt, BiChevronRight, BiHeart } from "react-icons/bi";
import FeaturedProducts from "./FeaturedProducts";
import ShopCard from "./ShopCard";

export default function Main() {
    
    
    function valuetext(value: number) {
        return `${value}°C`;
    }

    return (
        <section className='px-[3.5rem] bg-gray-100'>

            <div className='flex'>

                {/* left */}
                <div className='basis-5/12 px-8 py-2'>

                    <div className='flex py-4 items-center justify-center border bg-white rounded p-0 m-0'>
                        <input className='text-center' placeholder='Search what you need' />
                        <BiSearch className='text-2xl cursor-pointer' />
                    </div>

                    <div className='flex items-center justify-between py-4'>
                        <span className='text-[1.5rem] font-medium'>Price</span>
                        <BiFilterAlt className='text-2xl' />
                    </div>
                    
                    <div className='flex justify-center'>
                        <Box sx={{ width: 330 }}>
                            <Slider
                                aria-label="Small steps"
                                defaultValue={0.00000005}
                                getAriaValueText={valuetext}
                                step={2}
                                marks
                                min={2}
                                max={20}
                                valueLabelDisplay="auto"
                            />
                        </Box>
                    </div>

                    <div className='flex items-center justify-between'>
                        <span className=''>Range</span>
                        <span className=''>$2-$20</span>
                    </div>

                    <div className='flex pt-10'>
                        <span className='text-[1.5rem] font-medium'>Product Categories</span>
                    </div>

                    <div className='py-4 [&>*]:py-[15px]'>
                        <div className='flex justify-between items-center'>
                            <span>Coats and Jackets</span>
                            <BiChevronRight className='text-xl' />
                        </div>
                        <div className='flex justify-between items-center'>
                            <span>Dresses</span>
                            <BiChevronRight className='text-xl' />
                        </div>
                        <div className='flex justify-between items-center'>
                            <span>Play Suits</span>
                            <BiChevronRight className='text-xl' />
                        </div>
                        <div className='flex justify-between items-center'>
                            <span>Short</span>
                            <BiChevronRight className='text-xl' />
                        </div>
                        <div className='flex justify-between items-center'>
                            <span>Top</span>
                            <BiChevronRight className='text-xl' />
                        </div>
                        <div className='flex justify-between items-center'>
                            <span>Bottom</span>
                            <BiChevronRight className='text-xl' />
                        </div>
                    </div>                    

                    {/* Feature products */}
                    <div className='flex pt-10'>
                        <span className='text-[1.5rem] font-medium'>Featured Products</span>
                    </div>


                    <FeaturedProducts />
                    <FeaturedProducts />
                    <FeaturedProducts />
                    <FeaturedProducts />
                </div>

                {/* right */}
                <div className='bg-gray-100 basis-full px-8 py-2'>
                    <div className='flex flex-wrap gap-4 justify-between'>
                        <ShopCard />
                        <ShopCard />
                        <ShopCard />
                        <ShopCard />
                        <ShopCard />
                        <ShopCard />
                    </div>
                </div>
            </div>
        </section>
    )
}