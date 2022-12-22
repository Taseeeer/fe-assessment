export default function FeaturedProducts() {
    return (
        <div>
            <div className='flex py-4 gap-4 cursor-pointer'>
                <div className='w-[80px] h-[80px] bg-gray-200 rounded'></div>
                <div className='flex flex-col gap-2'>
                    <span>Tropical Playsuit</span>
                    <span className='text-primaryColor'>100$</span>
                </div>
            </div>
        </div>
    )
}