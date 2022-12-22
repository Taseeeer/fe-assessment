import Button from "./Button";
import Card from "./Card";

export default function CollectionSection() {
    return (
        <section className='bg-gray-100 py-20 px-[3.5rem]'>

            <div className='px-[3.5rem]'>
                <h1 className='text-[48px] text-center font-medium'>Our Premium Collection</h1>
                <ul className='flex justify-between [&>*]:cursor-pointer [&>*]:text-gray-500 py-8'>
                    <li>All Products</li>
                    <li>Coats & Jackets</li>
                    <li>Dressed</li>
                    <li>Playsuit</li>
                    <li>Short</li>
                    <li>Shirt</li>
                    <li>T-Shirt</li>
                </ul>
            </div>

            <div className='flex justify-between flex-wrap [&>*]:m-2'>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>

            <div className='flex justify-center py-8'>
                <Button text='Find out More' />
            </div>
        </section>
    )
}