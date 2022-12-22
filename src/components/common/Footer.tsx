import Logo from '../../assets/Dealerz.png';
import Socials from '../../assets/socials.png';

export default function Footer() {
    return (
        <footer className='px-[3.5rem] py-[3rem] flex justify-between'>
            <div className='flex gap-8'>
                <div className='bg-gray-100 w-[360px] h-[360px]'></div>
                <div className='flex flex-col gap-10'>
                    <img src={Logo} alt="Dealerz" />
                    <div className='flex flex-col gap-4'>
                        <span>Privacy Policy</span>
                        <span>Terms and Conditions</span>
                    </div>
                    <span className='pt-[8rem]'>@2020 TanahAir Studio. All rights reserved.</span>
                </div>
            </div>
            <div>
                <img src={Socials} alt="Social Media" />
            </div>
        </footer>
    )
}