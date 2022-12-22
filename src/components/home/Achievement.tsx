import one from '../../assets/Brand/logo1.png';
import two from '../../assets/Brand/logo2.png';
import three from '../../assets/Brand/logo3.png';
import four from '../../assets/Brand/logo4.png';
import five from '../../assets/Brand/logo5.png';
import six from '../../assets/Brand/logo6.png';
import TestionialSlider from '../TestimonialSlider';

export default function Achievement() {

    return (
        <section className='px-[3.5rem] py-[2rem] bg-gray-100'>
            <h1 className='text-[48px] py-4 text-center font-medium'>Our Achievement</h1>

            <div className='flex flex-wrap justify-between items-center py-4'>
                <img src={one} alt="achievement" />
                <img src={two} alt="achievement" />
                <img src={three} alt="achievement" />
                <img src={four} alt="achievement" />
                <img src={five} alt="achievement" />
                <img src={six} alt="achievement" />
            </div>

            <TestionialSlider />

        </section>
    )
}