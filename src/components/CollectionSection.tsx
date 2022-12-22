import { Key, useEffect, useState } from "react";
import { getAllProduct } from "../api/productServices";
import Button from "./Button";
import Card from "./Card";

export default function CollectionSection() {

    type ProductDetails = {
        id: number,
        description: string,
        image: string,
        price: number,
        title: string
    }

    const [allProducts, setAllProducts] = useState<ProductDetails[]>([]);
    const [loading, setLoading] = useState<Boolean>(true);

    const [productsLength, setProductsLength] = useState<number>(6)

    useEffect(() => {
        (async () => {
            try {
                const response = await getAllProduct();
                setAllProducts(response);
                setLoading(false);
            } catch(e) {
                console.error(e);
            }
        })();
    }, []);

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

            { loading ? <h1 className='text-[3rem] text-red-500'>Loading...</h1> : null }
            <div className='flex justify-between flex-wrap [&>*]:m-2'>
                { allProducts && allProducts.slice(0,productsLength).map((product) => (
                    <Card key={product.id} info={product} />
                ))}
            </div>

            <div className='flex justify-center py-8'>
                <button className='bg-primaryColor text-white px-4 py-3 mt-4 rounded' 
                onClick={() => setProductsLength((prevState: number) => prevState + 3)}>Find out More</button>
            </div>
        </section>
    )
}