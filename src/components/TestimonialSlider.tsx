import { useEffect, useState } from 'react';
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';

export default function TestionialSlider() {

    const [current, setCurrent] = useState<number>(0);

    const allTestimonials = [
        {
            title: 'Good Seller!',
            testimonial: `I am very happy with the services provided, it is very helpful, starting from the insight that the company gave from the start that I did not understand what it was so I got knowledge and made my website look better`,
            name: 'Anna Saraspova',
            buyer: 'Your Beloved Buyer',
        },
        // {
        //     title: 'Good Seller!',
        //     testimonial: `With Testimonial Generator you can easily generate viral testimonies for your website or product, no need to learn how to write a testimonial. Having Testimonals on your website will help drive conversions and bring further sales of your products/services.`,
        //     name: 'John Doe',
        //     buyer: 'Your Beloved Buyer',
        // },
        // {
        //     title: 'Good Seller!',
        //     testimonial: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum`,
        //     name: 'Naruto',
        //     buyer: 'Your Beloved Buyer',
        // },
    ];

    const nextSlide = (): void => {
        if(current === allTestimonials.length-1) {
            return setCurrent(0);
        }
        return setCurrent(prevState => prevState + 1);
    }

    const previousSlide = (): void => {
        if(current === 0) {
            return setCurrent(allTestimonials.length-1);
        }
        return setCurrent(prevState => prevState - 1);
    }

    return (
        <div className='bg-white rounded mt-[7rem]'>
            <div className='flex items-center text-white'>
            <button className='p-4 bg-primaryColor text-2xl rounded-full' onClick={previousSlide}> <BiLeftArrowAlt /> </button>

            <div className='flex items-center p-10'>
                <div className='w-[100%] h-[320px] p-10 bg-gray-100 rounded'></div>
                <div className='px-10 '>
                    {
                        allTestimonials.map((each, index) => (
                            <div key={each.name}>
                                <h1 className='text-primaryColor text-start text-[48px] font-medium'>{ each.title }</h1>
                                <p className='text-black'>{ each.testimonial}</p>
                                <p className='text-xl text-black py-2'>{ each.name }</p>
                                <p className='text-black py-2 cursor-pointer'>{ each.buyer }</p>
                            </div>
                        ))
                    }
                </div>
            </div>
            
            <button className='p-4 bg-primaryColor text-2xl rounded-full' onClick={nextSlide}> <BiRightArrowAlt /> </button>

            </div>
        </div>
    )
}