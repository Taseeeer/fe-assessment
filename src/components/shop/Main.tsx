import { useEffect, useState } from "react";
import { BiSearch, BiFilterAlt, BiChevronRight, BiHeart } from "react-icons/bi";
import { getAllProduct } from "../../api/productServices";
import FeaturedProducts from "./FeaturedProducts";
import ShopCard from "./ShopCard";

export default function Main() {

    
    type ProductDetails = {
        id: number,
        description: string,
        image: string,
        price: number,
        title: string
    }

    const [allProducts, setAllProducts] = useState<ProductDetails[]>([]);
    const [loading, setLoading] = useState<Boolean>(true);

    const [productsLength, setProductsLength] = useState<number>(6);

    const [searchProduct, setSearchProduct] = useState<string>("");

    const [ rangeValue, setRangeValue ] = useState<number | string>(2);

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

    
    
    function valuetext(value: number) {
        return `${value}°C`;
    }

    return (
        <section className='px-[3.5rem] bg-gray-100'>

            <div className='flex'>

                {/* left */}
                <div className='basis-5/12 px-8 py-2'>

                    <div className='flex py-4 items-center justify-center border bg-white rounded p-0 m-0'>
                        <input className='text-center outline-0' placeholder='Search what you need' value={searchProduct} onChange={(e) => setSearchProduct(e.target.value)} />
                        <BiSearch className='text-2xl cursor-pointer' />
                    </div>

                    <div className='flex items-center justify-between py-4'>
                        <span className='text-[1.5rem] font-medium'>Price</span>
                        <BiFilterAlt className='text-2xl' />
                    </div>
                    
                    <div className='flex justify-center'>
                        <input 
                        id="typeinp" 
                        type="range" 
                        min="2" max="150" 
                        value={rangeValue} 
                        onChange={(e) => setRangeValue(e.target.value)}
                        step="5"
                        className='w-[100%] py-4'
                        />
                    </div>

                    <div className='flex items-center justify-between'>
                        <span className=''>Range</span>
                        <span className=''>$2-$150</span>
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

                    { allProducts && allProducts.slice(0, 4).map(product => (
                        <FeaturedProducts info={product} />
                    ))}

                </div>

                {/* right */}
                { loading ? <h1 className='text-[3rem] text-red-500'>Loading...</h1> : null }
                <div className='bg-gray-100 basis-full px-8 py-2'>
                    <div className='flex flex-wrap gap-4 justify-between'>
                        { allProducts && allProducts.slice(0,productsLength)
                        .filter((product) => {
                            if(searchProduct === "") {
                                return product;
                            } else if(product.title.toLocaleLowerCase().includes(searchProduct.toLocaleLowerCase())) {
                                return product;
                            } else if(product.price >= rangeValue && product.price <= rangeValue) {
                                return product;
                            }
                        }) 
                        .map((product) => (
                            <ShopCard key={product.id} info={product} />
                        )) }
                    </div>
                </div>
            </div>
        </section>
    )
}