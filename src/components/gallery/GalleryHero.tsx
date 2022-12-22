import Button from '../Button';

export default function GalleryHero() {

    return (
        <div className="bg-hero-pattern h-[600px]">
            <div className='w-[590px] ml-auto mr-[7rem]'>
                <h1 className='text-[64px] font-medium my-4 pt-[8rem] leading-tight'>Our Gallery, Your Dreams!</h1>
                <p className='my-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil quisquam expedita illo quasi quaerat unde similique quibusdam nisi eveniet quia doloremque deserunt in consectetur repellendus temporibus iusto amet, perferendis laboriosam!</p>
                <Button text='Find out More' />
            </div>
        </div>
    )
}