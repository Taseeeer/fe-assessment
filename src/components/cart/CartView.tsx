import { BiSearch } from "react-icons/bi";
import CartCard from "./CartCard";

export default function CartView() {
    return (
        <section className='bg-gray-100 px-[3.5rem] py-8'>
            <div className='flex gap-8'>
                <span>1. Shopping Cart</span>
                <span>2. Checkout</span>
                <span>3. Order Succesed</span>
            </div>

            <h1 className='text-[48px] font-medium py-4'>My Cart</h1>
        
            <div className='flex py-4'>
                {/* left */}
                <div className='flex flex-col gap-20 basis-6/12'>
                    <CartCard />
                    <CartCard />
                    <CartCard />
                    <CartCard />
                </div>

                {/* right */}
                <div className='flex flex-col basis-6/12'>

                    <div className='bg-white [&>*]:py-2 w-[500px] h-[240px] p-8 rounded'>
                        <p className='text-[20px]'>Have a Coupon?</p>
                        <div className='flex items-center  border border-primaryColor bg-white rounded px-4'>
                            <input className='p-2 outline-0' placeholder='Search what you need' />
                            <BiSearch className='text-2xl cursor-pointer' />
                        </div>
                        <button className='text-white bg-primaryColor p-2 rounded mt-4'>Apply</button>
                    </div>

                    <div>
                        <p className='text-[20px] py-4 font-medium'>Cart Totals</p>

                        <div className='flex gap-8 py-4'>
                            <span className='font-medium'>Subtotal</span>
                            <span className=''>$150</span>
                        </div>
                        <div className='flex gap-8 py-4'>
                            <span className='font-medium'>Shipping</span>
                            <span className=''>Free shipping</span>
                        </div>
                        <div className='flex gap-8 py-4'>
                            <span className='font-medium'>Total</span>
                            <span className=''>$350</span>
                        </div>
                        <button className='bg-primaryColor w-full rounded text-white py-4 mt-4'>Checkout</button>
                    </div>
                </div>

            </div>
        </section>
    )
}