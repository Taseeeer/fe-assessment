import CollectionSection from "../components/CollectionSection";
import Footer from "../components/common/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Achievement from "../components/home/Achievement";
import Articles from "../components/home/Articles";
import OurStory from "../components/home/OurStory";
import TopItemsSection from "../components/home/TopItemsSection";
import Newsletter from "../components/Newsletter";

export default function Home() {
    return (
        <>
        <Header />
        <Hero />
        <CollectionSection />
        <TopItemsSection />
        <OurStory />
        <Achievement />
        <Articles /> 
        <Newsletter />
        <Footer />
        </>
    )
}