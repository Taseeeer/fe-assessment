import CollectionSection from "../components/CollectionSection";
import Footer from "../components/common/Footer";
import GalleryHero from "../components/gallery/GalleryHero";
import Header from "../components/Header";
import Achievement from "../components/home/Achievement";
import Articles from "../components/home/Articles";
import OurStory from "../components/home/OurStory";
import TopItemsSection from "../components/home/TopItemsSection";
import Newsletter from "../components/Newsletter";

export default function Gallery() {
    return (
        <>
        <Header />
        <GalleryHero />
        <CollectionSection />
        <Achievement />
        <Newsletter />
        <Footer />
        </>
    )
}