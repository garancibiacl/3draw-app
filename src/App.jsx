import { BrowserRouter, Routes, Route} from 'react-router-dom';
import "../src/styles/main.scss";
import { Navbar } from "./components/Navbar/Navbar";
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import { Home } from './components/Home/Home';
// import { Carrusel } from './components/Carrusel/Carrusel';
import  { CarritoContext } from './components/CartContext/CartContext'
import { Soporte } from './components/Soporte/Soporte';
export const App = () => {
  return (
    
    <CarritoContext>

    <BrowserRouter>
    <div className='App'>
      {/* <!-- Navbar--> */}
<Navbar/>
      {/* <!-- Container --> */}
      {/* <Header /> */}
      {/* <SectionService/>
      <SectionProduct/> */}
      <Routes>

       <Route path='/' element={ <Home/>} />
 
              {/* <Route path='/categoria/:categoria' element={ <Carrusel /> } /> */}
               <Route path='/categoria/:categoria' element={ <Soporte /> } />
              <Route path='/detalles/:id' element={ <ItemDetailContainer/>} />

         
              <Route path="*" element={<h1>Error 404</h1>}></Route>
       

       </Routes>
    </div>
    </BrowserRouter>

    </CarritoContext>

  );
};
