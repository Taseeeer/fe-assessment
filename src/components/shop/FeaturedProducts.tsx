export default function FeaturedProducts({ info }: any) {
    return (
        <div>
            <div className='flex py-4 gap-4 cursor-pointer'>
                <img src={info.image} alt="Product" className='h-[80px] w-[80px] rounded' />
                <div className='flex flex-col gap-2'>
                    <span>Tropical Playsuit</span>
                    <span className='text-primaryColor'>${ info.price }</span>
                </div>
            </div>
        </div>
    )
}