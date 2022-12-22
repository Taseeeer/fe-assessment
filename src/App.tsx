import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from './components/shop/Main';
import Gallery from './pages/Gallery';
import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';
import Shop from './pages/Shop';
import './App.css';
import Cart from "./pages/Cart";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/gallery" element={ <Gallery /> } />
        <Route path="/details/:id" element={ <ProductDetails /> } />
        <Route path="/shop" element={ <Shop /> } />
        <Route path="/cart" element={ <Cart /> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
