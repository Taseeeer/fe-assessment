import ArticleCard from "../article/ArticleCard";

export default function Articles() {
    return (
        <section className='px-[3.5rem] py-8'>
            <div className='flex items-end justify-between'>
                <h1 className='text-[48px] w-[400px] font-medium'>Get Better Insights from Our Articles</h1>
                <span className='text-primaryColor pb-2 cursor-pointer'>See more</span>
            </div>

            <div className='flex flex-wrap justify-between grow'>
                <ArticleCard />
                <ArticleCard />
                <ArticleCard />
                <ArticleCard />
            </div>
        </section>
    )
}