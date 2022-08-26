import "../src/styles/main.scss";
import { Navbar } from "./components/Navbar/Navbar";
import { Header } from "./components/Header/Header";
import { SectionService } from './components/SectionService/SectionService'
import { SectionProduct } from './components/SectionProduct/SectionProduct'

export const App = () => {
  return (
    <>
      {/* <!-- Navbar--> */}
      <Navbar saludos='hola' />

      {/* <!-- Container --> */}
 
       <Header />
       <SectionService/>
       <SectionProduct/>
  

    </>
  );
};
