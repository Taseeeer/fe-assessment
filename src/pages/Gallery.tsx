import CollectionSection from "../components/CollectionSection";
import Footer from "../components/common/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Newsletter from "../components/Newsletter";
import TestionialSlider from "../components/TestimonialSlider";

export default function Gallery() {
    return (
        <>
        <Header />
        <Hero title="Our Gallery, Your Dreams!" />
        <CollectionSection />
        <TestionialSlider />
        <Newsletter />
        <Footer />
        </>
    )
}