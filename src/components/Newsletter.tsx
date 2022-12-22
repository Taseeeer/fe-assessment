import { BiRightArrowCircle } from "react-icons/bi";

export default function Newsletter() {
    return (
        <div className='px-[3.5rem] bg-gray-100 rounded py-8'>
            <div className='flex flex-col items-center bg-white py-[5rem]'>
                <h1 className='text-[48px] font-medium py-4'>Join Our News Letters</h1>
                <p className='text-gray-500 pt-4 pb-8'>Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster </p>

                <div className='flex items-center bg-white rounded px-4 bg-gray-100'>
                    <input className='p-4 w-[35rem] bg-gray-100 rounded' placeholder='Search what you need' />
                    <button className='text-4xl text-white rounded-full bg-primaryColor'> <BiRightArrowCircle /> </button>
                </div>
            </div>
        </div>
    )
}