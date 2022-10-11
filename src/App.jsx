import { BrowserRouter, Routes, Route } from "react-router-dom";
import "../src/styles/main.scss";
import { Navbar } from "./components/Navbar/Navbar";
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer";
import CartContainer from "./components/CartView/CartContainer";
import { Home } from "./components/Home/Home";
import { Footer } from "./components/Footer/Footer";
// import { Carrusel } from './components/Carrusel/Carrusel';
import { CartContextProvider } from "./components/CartContext/CartContext";
import { Soporte } from "./components/Soporte/Soporte";
import { PageError } from "./components/PageError/PageError";
import { Checkout } from "./components/Checkout/Checkout";


import  ScrollTop from "./components/ScrollTop/ScrollTop";
export const App = () => {
  return (
    <CartContextProvider>
      <BrowserRouter>
        <div className="App">
          <Navbar />
   
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/categoria/:categoria" element={<Soporte />} />
            <Route path="/detalles/:id" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<CartContainer />}></Route>
            <Route path="*" element={<PageError/>}></Route>
            <Route path="/checkout" element={<Checkout/>}></Route>

          </Routes>
 
        </div>


      </BrowserRouter>
      <Footer/>
      <ScrollTop/>
    </CartContextProvider>
      
  );
};
