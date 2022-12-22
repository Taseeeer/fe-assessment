type ButtonProps = {
    text: string
}

export default function Button({ text }: ButtonProps) {
    return (
        <button className='bg-primaryColor text-white px-4 py-3 mt-4 rounded'>{ text }</button>
    )
}