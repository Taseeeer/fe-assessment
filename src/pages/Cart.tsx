import CartView from "../components/cart/CartView";
import Footer from "../components/common/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Newsletter from "../components/Newsletter";

export default function Cart() {
    return (
        <>
        <Header />
        <Hero title="Our Gallery, Your Dreams!" />
        <CartView />
        <Newsletter />
        <Footer />
        </>
    )
}