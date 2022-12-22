export default function ArticleCard() {
    return (
        <div className='py-8 w-[650px]'>
            <div className='h-[400px] bg-gray-100 rounded'></div>
            <div>
                <h1 className='text-start text-[32px] font-medium py-2'>Story about Our Brand</h1>
                <div className='flex items-center gap-2 [&>*]:text-sm'>
                    <span>14 Feb</span>
                    <span>Livia Style</span>
                </div>
                <p className='py-2 text-gray-500'>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                <span className='text-primaryColor py-2 cursor-pointer'>Explore More</span>
            </div>
        </div>
    )
}